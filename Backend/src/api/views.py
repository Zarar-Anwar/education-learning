from rest_framework import generics
from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView
from rest_framework.response import Response
from ..core.models import ContactForm
from ..course.models import Test, Subject, MCQ, EnrollCourse,Material
from .serializers import ContactFormSerializer, TestSerializer, SubjectSerializer,MCQSerializer,EnrollCourseSerializer,MaterialSerializer
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status

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
    

class MaterialListView(APIView):
    def get(self, request):
        mcqs = Material.objects.all()
        serializer = MaterialSerializer(mcqs, many=True)
        return Response(serializer.data)
    
    


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
        enroll, created = EnrollCourse.objects.get_or_create(user=request.user, test=test)
        if not created:
            return Response({"message": "Already enrolled"}, status=status.HTTP_404_NOT_FOUND)
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