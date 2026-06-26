from rest_framework import serializers
from .models import (
    Course,
    Fee,
    ScheduleSlot,
    Testimonial,
    EnrollmentRequest,
    ContactMessage,
)


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ["id", "title", "slug", "description", "duration", "icon", "order"]


class FeeSerializer(serializers.ModelSerializer):
    course_title = serializers.CharField(source="course.title", read_only=True)

    class Meta:
        model = Fee
        fields = [
            "id",
            "course",
            "course_title",
            "classes_per_week",
            "class_duration_minutes",
            "monthly_fee",
            "currency",
        ]


class ScheduleSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScheduleSlot
        fields = ["id", "slot_name", "start_time", "end_time", "availability"]


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ["id", "name", "location", "text", "created_at"]


class EnrollmentRequestSerializer(serializers.ModelSerializer):
    course = serializers.SlugRelatedField(slug_field="slug", queryset=Course.objects.all())

    class Meta:
        model = EnrollmentRequest
        fields = [
            "id",
            "student_name",
            "age",
            "gender",
            "course",
            "preferred_timing",
            "contact_info",
            "status",
            "created_at",
        ]
        read_only_fields = ["id", "status", "created_at"]

    def validate_age(self, value):
        if value < 3 or value > 80:
            raise serializers.ValidationError("Age must be between 3 and 80.")
        return value


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ["id", "name", "email", "message", "created_at"]
        read_only_fields = ["id", "created_at"]