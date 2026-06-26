from django.db import models


class Course(models.Model):
    """Each Quran course offered — Noorani Qaida, Nazra, Tajweed, Hifz, etc."""

    title = models.CharField(max_length=120)
    slug = models.SlugField(max_length=140, unique=True)
    description = models.TextField()
    duration = models.CharField(max_length=60, help_text="e.g. '2–4 months'")
    icon = models.CharField(max_length=10, blank=True, help_text="Emoji icon, e.g. 📖")
    order = models.PositiveIntegerField(default=0, help_text="Controls display order")

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return self.title


class Fee(models.Model):
    """Pricing tied to a specific course."""

    course = models.OneToOneField(Course, on_delete=models.CASCADE, related_name="fee")
    classes_per_week = models.PositiveIntegerField(default=5)
    class_duration_minutes = models.PositiveIntegerField(default=30)
    monthly_fee = models.DecimalField(max_digits=10, decimal_places=2)
    currency = models.CharField(max_length=10, default="PKR")

    def __str__(self):
        return f"{self.course.title} — {self.currency} {self.monthly_fee}"


class ScheduleSlot(models.Model):
    """Available class time slots."""

    AVAILABILITY_CHOICES = [
        ("available", "Available"),
        ("limited", "Limited"),
        ("full", "Full"),
    ]

    slot_name = models.CharField(max_length=60, help_text="e.g. 'Morning'")
    start_time = models.TimeField()
    end_time = models.TimeField()
    availability = models.CharField(
        max_length=10, choices=AVAILABILITY_CHOICES, default="available"
    )

    class Meta:
        ordering = ["start_time"]

    def __str__(self):
        return f"{self.slot_name} ({self.start_time}–{self.end_time})"


class Testimonial(models.Model):
    """Parent/student reviews shown on the homepage."""

    name = models.CharField(max_length=120)
    location = models.CharField(max_length=120, blank=True)
    text = models.TextField()
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} — {self.text[:40]}"


class EnrollmentRequest(models.Model):
    """Submitted from the Enrollment page form."""

    GENDER_CHOICES = [("male", "Male"), ("female", "Female")]

    STATUS_CHOICES = [
        ("pending", "Pending"),
        ("contacted", "Contacted"),
        ("enrolled", "Enrolled"),
        ("rejected", "Rejected"),
    ]

    student_name = models.CharField(max_length=150)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    course = models.ForeignKey(
        Course, on_delete=models.SET_NULL, null=True, related_name="enrollment_requests"
    )
    preferred_timing = models.CharField(max_length=60)
    contact_info = models.CharField(
        max_length=150, help_text="WhatsApp number or email provided by the user"
    )
    status = models.CharField(max_length=12, choices=STATUS_CHOICES, default="pending")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.student_name} — {self.course} ({self.status})"


class ContactMessage(models.Model):
    """Submitted from the Contact page form."""

    name = models.CharField(max_length=150)
    email = models.EmailField()
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} <{self.email}>"
