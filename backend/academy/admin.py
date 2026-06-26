from django.contrib import admin
from .models import (
    Course,
    Fee,
    ScheduleSlot,
    Testimonial,
    EnrollmentRequest,
    ContactMessage,
)


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("title", "duration", "order")
    prepopulated_fields = {"slug": ("title",)}
    ordering = ("order",)


@admin.register(Fee)
class FeeAdmin(admin.ModelAdmin):
    list_display = ("course", "classes_per_week", "class_duration_minutes", "monthly_fee", "currency")


@admin.register(ScheduleSlot)
class ScheduleSlotAdmin(admin.ModelAdmin):
    list_display = ("slot_name", "start_time", "end_time", "availability")


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("name", "location", "is_published", "created_at")
    list_filter = ("is_published",)
    search_fields = ("name", "text")


@admin.register(EnrollmentRequest)
class EnrollmentRequestAdmin(admin.ModelAdmin):
    list_display = ("student_name", "course", "preferred_timing", "status", "created_at")
    list_filter = ("status", "course", "gender")
    search_fields = ("student_name", "contact_info")
    list_editable = ("status",)
    actions = ["mark_as_enrolled", "mark_as_contacted", "mark_as_rejected"]

    @admin.action(description="✅ Accept & mark as Enrolled")
    def mark_as_enrolled(self, request, queryset):
        updated = queryset.update(status="enrolled")
        self.message_user(request, f"{updated} student(s) marked as Enrolled.")

    @admin.action(description="📞 Mark as Contacted")
    def mark_as_contacted(self, request, queryset):
        updated = queryset.update(status="contacted")
        self.message_user(request, f"{updated} student(s) marked as Contacted.")

    @admin.action(description="❌ Reject request")
    def mark_as_rejected(self, request, queryset):
        updated = queryset.update(status="rejected")
        self.message_user(request, f"{updated} request(s) marked as Rejected.")


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "is_read", "created_at")
    list_filter = ("is_read",)
    search_fields = ("name", "email", "message")
    actions = ["mark_as_read", "mark_as_unread"]

    @admin.action(description="📖 Mark as Read")
    def mark_as_read(self, request, queryset):
        updated = queryset.update(is_read=True)
        self.message_user(request, f"{updated} message(s) marked as Read.")

    @admin.action(description="📩 Mark as Unread")
    def mark_as_unread(self, request, queryset):
        updated = queryset.update(is_read=False)
        self.message_user(request, f"{updated} message(s) marked as Unread.")