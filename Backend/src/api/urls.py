from django.urls import path, include

from .views import ContactFormView, TestListView, SubjectListView, McqsListView

urlpatterns = [
    path('contact-us/', ContactFormView.as_view(), name='contact-form'),
    path('tests/', TestListView.as_view(), name='test-list'),
    path('subjects/', SubjectListView.as_view(), name='subject-list'),
    path('mcqs/', McqsListView.as_view(), name='mcqs-list'),

]

urlpatterns += [
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration/', include('dj_rest_auth.registration.urls')),
]