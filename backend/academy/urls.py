from django.urls import path
from . import views

urlpatterns = [
    path("courses/", views.CourseListView.as_view(), name="course-list"),
    path("courses/<slug:slug>/", views.CourseDetailView.as_view(), name="course-detail"),
    path("fees/", views.FeeListView.as_view(), name="fee-list"),
    path("schedule/", views.ScheduleSlotListView.as_view(), name="schedule-list"),
    path("testimonials/", views.TestimonialListView.as_view(), name="testimonial-list"),
    path("enrollment/", views.EnrollmentCreateView.as_view(), name="enrollment-create"),
    path("contact/", views.ContactCreateView.as_view(), name="contact-create"),
]
