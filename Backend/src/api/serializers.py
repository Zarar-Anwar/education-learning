from rest_framework import serializers

from ..core.models import ContactForm
from rest_framework import serializers

from ..course.models import MCQ, Subject, Test, StudentProgress, StudentTest


class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = '__all__'




class MCQSerializer(serializers.ModelSerializer):
    class Meta:
        model = MCQ
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
