# Assuming these are the models, update if needed
from django.db import models
from django.contrib.auth.models import User

class Test(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    icon = models.ImageField(upload_to="course_icons/", blank=True, null=True)  
    tag = models.ImageField(upload_to="course_tags/", blank=True, null=True)  

    def __str__(self):
        return self.name


class Subject(models.Model):
    test = models.ForeignKey(Test, related_name='subjects', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to="course_icons/", blank=True, null=True)  


    def __str__(self):
        return self.name


class Material(models.Model):
    subject = models.ForeignKey(Subject, related_name='material', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    pdf = models.FileField(upload_to='materials/pdfs/')
    image = models.ImageField(upload_to="material_image/", blank=True, null=True)  


    def __str__(self):
        return self.name



class MCQ(models.Model):
    subject = models.ForeignKey(Subject, related_name='mcqs', on_delete=models.CASCADE)
    question = models.CharField(max_length=255)
    option_a = models.CharField(max_length=100)
    option_b = models.CharField(max_length=100)
    option_c = models.CharField(max_length=100)
    option_d = models.CharField(max_length=100)
    correct_option = models.CharField(max_length=1)

    def __str__(self):
        return self.question

# Student Progress model to track progress per student per subject
class StudentProgress(models.Model):
    email = models.CharField(max_length=100)
    subject = models.ForeignKey(Subject, related_name='progresses', on_delete=models.CASCADE)
    progress = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return f'{self.student.username} - {self.subject.name} - {self.progress}%'

# Student Test model to track student test attempts
class StudentTest(models.Model):
    email = models.CharField(max_length=100)
    test = models.ForeignKey(Test, related_name='student_tests', on_delete=models.CASCADE)
    date_taken = models.DateTimeField(auto_now_add=True)
    score = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return f'{self.student.username} - {self.test.name} - {self.score}%'


class EnrollCourse(models.Model):
    user = models.ForeignKey(User, related_name='enrolled_courses', on_delete=models.CASCADE)
    test = models.ForeignKey(Test, related_name='enrollments', on_delete=models.CASCADE)  # test is your course
    created_at = models.DateTimeField(auto_now_add=True)
    progress = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)  # in percentage: 0.00–100.00

    class Meta:
        unique_together = ('user', 'test')  # Prevent duplicate enrollments

    def __str__(self):
        return f"{self.user.username} enrolled in {self.test.name} ({self.progress}%)"
