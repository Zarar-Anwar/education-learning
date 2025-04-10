from rest_framework import serializers

from ..core.models import ContactForm
from rest_framework import serializers

from ..course.models import MCQ, Subject, Test, StudentProgress, StudentTest,EnrollCourse,Material


class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = '__all__'


class EnrollCourseSerializer(serializers.ModelSerializer):
    # You can include fields from the related 'Test' model
    course_name = serializers.CharField(source='test.name')
    course_description = serializers.CharField(source='test.description')
    course_id = serializers.CharField(source='test.id')
    course_tag = serializers.ImageField(source='test.tag')
    course_icon = serializers.ImageField(source='test.icon')

    class Meta:
        model = EnrollCourse
        fields = ['id', 'test','user','course_name', 'course_description','course_id', 'course_tag','course_icon', 'progress']


class MCQSerializer(serializers.ModelSerializer):
    class Meta:
        model = MCQ
        fields = '__all__'


class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = '__all__'


class SubjectSerializer(serializers.ModelSerializer):
    mcqs = MCQSerializer(many=True, read_only=True)

    class Meta:
        model = Subject
        fields = ['id','test', 'name','icon', 'mcqs']

class TestSerializer(serializers.ModelSerializer):
    subjects = SubjectSerializer(many=True, read_only=True)

    class Meta:
        model = Test
        fields = ['id', 'name', 'description','icon','tag', 'subjects']


class StudentProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProgress
        fields = ['user', 'test', 'correct_answers', 'total_answers', 'progress_percentage']

class StudentTestSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentTest
        fields = ['user', 'test', 'score', 'date_attempted']
