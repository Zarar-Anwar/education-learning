from django.urls import path, include

from .views import ContactFormView,SubmitTestAPIView,StuTestListView, TestListView,delete_enrollment, SubjectListView, McqsListView,user_info,enroll_in_course,enrolled_courses,MaterialListView

urlpatterns = [
    path('contact-us/', ContactFormView.as_view(), name='contact-form'),
    path('tests/', TestListView.as_view(), name='test-list'),
    path('subjects/', SubjectListView.as_view(), name='subject-list'),
    path('mcqs/', McqsListView.as_view(), name='mcqs-list'),
    path('student-tests/', StuTestListView.as_view(), name='test-list'),
    path('material/', MaterialListView.as_view(), name='material-list'),
    path('user-info/', user_info, name='user-info'),
    path('enroll-course/', enroll_in_course, name='enroll-course'),
    path('enrolled-courses/', enrolled_courses, name='enroll-course'),
    path('enrolled-courses/<int:courseId>/delete/', delete_enrollment, name='delete_enrollment'),  # New delete endpoint
    path('submit-test/', SubmitTestAPIView.as_view(), name='submit-test'),


]

urlpatterns += [
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration/', include('dj_rest_auth.registration.urls')),
]