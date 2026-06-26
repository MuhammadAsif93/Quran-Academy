from rest_framework import generics, permissions
from django.core.mail import send_mail
from .models import (
    Course,
    Fee,
    ScheduleSlot,
    Testimonial,
    EnrollmentRequest,
    ContactMessage,
)
from .serializers import (
    CourseSerializer,
    FeeSerializer,
    ScheduleSlotSerializer,
    TestimonialSerializer,
    EnrollmentRequestSerializer,
    ContactMessageSerializer,
)


# ---------- Read-only public endpoints (used by Courses, Fees, Schedule, Home pages) ----------

class CourseListView(generics.ListAPIView):
    """GET /api/courses/  — list all courses."""
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [permissions.AllowAny]


class CourseDetailView(generics.RetrieveAPIView):
    """GET /api/courses/<slug>/  — single course detail."""
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    lookup_field = "slug"
    permission_classes = [permissions.AllowAny]


class FeeListView(generics.ListAPIView):
    """GET /api/fees/  — list all fee entries with course names."""
    queryset = Fee.objects.select_related("course").all()
    serializer_class = FeeSerializer
    permission_classes = [permissions.AllowAny]


class ScheduleSlotListView(generics.ListAPIView):
    """GET /api/schedule/  — list all class time slots."""
    queryset = ScheduleSlot.objects.all()
    serializer_class = ScheduleSlotSerializer
    permission_classes = [permissions.AllowAny]


class TestimonialListView(generics.ListAPIView):
    """GET /api/testimonials/  — published testimonials only."""
    queryset = Testimonial.objects.filter(is_published=True)
    serializer_class = TestimonialSerializer
    permission_classes = [permissions.AllowAny]


# ---------- Write endpoints (used by Enrollment and Contact forms) ----------

class EnrollmentCreateView(generics.CreateAPIView):
    queryset = EnrollmentRequest.objects.all()
    serializer_class = EnrollmentRequestSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        enrollment = serializer.save()

        send_mail(
            subject="New Trial Class Booking - Quran Academy",
            message=f"""
A new trial class request has been submitted.

Student Name: {enrollment.student_name}
Age: {enrollment.age}
Gender: {enrollment.gender}
Course: {enrollment.course}
Preferred Timing: {enrollment.preferred_timing}
Contact: {enrollment.contact_info}
""",
            from_email=None,
            recipient_list=["Fatima41680@gmail.com"],
            fail_silently=False,
        )


class ContactCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        contact = serializer.save()

        send_mail(
            subject="New Contact Message - Quran Academy",
            message=f"""
A new contact message has been received.

Name: {contact.name}
Email: {contact.email}
Message:

{contact.message}
""",
            from_email=None,
            recipient_list=["Fatima41680@gmail.com"],
            fail_silently=False,
        )