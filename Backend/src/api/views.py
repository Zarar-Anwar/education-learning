from rest_framework import generics
from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView
from rest_framework.response import Response
from ..core.models import ContactForm
from ..course.models import StudentTest,StudentProgress,Test, Subject, MCQ, EnrollCourse,Material
from .serializers import ContactFormSerializer, TestSerializer, SubjectSerializer,MCQSerializer,EnrollCourseSerializer,MaterialSerializer,StudentTestSerializer
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User  # Ensure this is imported

class ContactFormView(generics.CreateAPIView):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer


class TestListView(APIView):
    def get(self, request):
        tests = Test.objects.all()
        serializer = TestSerializer(tests, many=True)
        return Response(serializer.data)


class SubjectListView(APIView):
    def get(self, request):
        subjects = Subject.objects.all()
        serializer = SubjectSerializer(subjects, many=True)
        return Response(serializer.data)


class McqsListView(APIView):
    def get(self, request):
        mcqs = MCQ.objects.all()
        serializer = MCQSerializer(mcqs, many=True)
        return Response(serializer.data)


class StuTestListView(APIView):
    def get(self, request):
        test = StudentTest.objects.all()
        serializer = StudentTestSerializer(test, many=True)
        return Response(serializer.data)

class MaterialListView(APIView):
    def get(self, request):
        mcqs = Material.objects.all()
        serializer = MaterialSerializer(mcqs, many=True)
        return Response(serializer.data)
    
class SubmitTestAPIView(APIView):
    def post(self, request, format=None):
        email = request.data.get('email')
        data = request.data.get('answers', {})
        score = 0
        total = 0
        incorrect_answers = []  # To track the question numbers that are incorrect
        subject_scores = {}

        # Get the user instance from the email
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"error": "User does not exist."}, status=400)

        for qid, user_ans in data.items():
            try:
                question = MCQ.objects.get(id=int(qid))
                total += 1

                # Check if the answer is correct
                if user_ans.lower() == question.correct_option.lower():
                    score += 1
                    subject_scores.setdefault(question.subject.id, {'correct': 0, 'total': 0})
                    subject_scores[question.subject.id]['correct'] += 1
                else:
                    incorrect_answers.append(qid)  # Add the question ID to incorrect_answers list

                subject_scores.setdefault(question.subject.id, {'correct': 0, 'total': 0})
                subject_scores[question.subject.id]['total'] += 1

            except MCQ.DoesNotExist:
                continue

        # Update student progress per subject
        for subject_id, result in subject_scores.items():
            subject = Subject.objects.get(id=subject_id)
            percentage = (result['correct'] / result['total']) * 100 if result['total'] > 0 else 0
            StudentProgress.objects.update_or_create(
                email=email,
                subject=subject,
                defaults={'progress': round(percentage, 2)}
            )

        if total > 0:
            # Use the subject from the last question to access the test
            last_subject_id = list(subject_scores.keys())[-1]
            subject = Subject.objects.get(id=last_subject_id)
            test = subject.test

            test_percentage = (score / total) * 100

            StudentTest.objects.create(
                email=email,
                test=test,
                score=round(test_percentage, 2)
            )

            # Enroll the student in the course related to the test
            EnrollCourse.objects.get_or_create(
                user=user,
                test=subject.test
            )

            # Return the response with detailed result
            return Response({
                "correct": score,
                "wrong": total - score,
                "incorrect_questions": incorrect_answers,  # Add incorrect question numbers
                "score": score,
                "total": total,
                "percentage": (score / total) * 100,
            })

        return Response({"error": "No questions answered."}, status=400)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_info(request):
    user = request.user

    return JsonResponse({
        "username": user.username,
        "name": user.get_full_name(),
        "email": user.email
    })

@api_view(['POST'])
def enroll_in_course(request):
    test_id = request.data.get("test_id")
    
    if not test_id:
        return Response({"error": "Test ID is required"}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        test = Test.objects.get(id=test_id)

        # Check if the user is already enrolled in any course
        if EnrollCourse.objects.filter(user=request.user).exists():
            return Response({"message": "You are already enrolled in a course. Cannot enroll in another."}, status=status.HTTP_403_FORBIDDEN)

        # Proceed to enroll in the requested test/course
        enroll, created = EnrollCourse.objects.get_or_create(user=request.user, test=test)
        if not created:
            return Response({"message": "Already enrolled in this course"}, status=status.HTTP_400_BAD_REQUEST)

        return Response({"message": "Successfully enrolled"}, status=status.HTTP_201_CREATED)
    
    except Test.DoesNotExist:
        return Response({"error": "Course not found"}, status=status.HTTP_404_NOT_FOUND)

    

@api_view(['GET'])
def enrolled_courses(request):
    # Get all EnrollCourse objects related to the current user
    enrolled_courses = EnrollCourse.objects.filter(user=request.user)
    
    # Serialize the enrolled courses
    serializer = EnrollCourseSerializer(enrolled_courses, many=True)
    
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['DELETE'])
def delete_enrollment(request, courseId):
    # Ensure the user is authenticated
    user = request.user
    
    try:
        # Check if the user is enrolled in the course
        course = Test.objects.get(id=courseId)
        enrollment = EnrollCourse.objects.get(user=user, test=course)
        
        # Delete the enrollment record
        enrollment.delete()
        
        return Response({"message": "Successfully unenrolled from the course."}, status=status.HTTP_204_NO_CONTENT)
    except Test.DoesNotExist:
        return Response({"error": "Course not found"}, status=status.HTTP_404_NOT_FOUND)
    except EnrollCourse.DoesNotExist:
        return Response({"error": "You are not enrolled in this course."}, status=status.HTTP_404_NOT_FOUND)


