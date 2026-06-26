from django.core.management.base import BaseCommand
from academy.models import Course, Fee, ScheduleSlot, Testimonial


class Command(BaseCommand):
    help = "Populate the database with initial courses, fees, schedule slots and testimonials."

    def handle(self, *args, **options):
        courses_data = [
            {
                "title": "Noorani Qaida",
                "slug": "noorani-qaida",
                "description": "The first step for every student — correct pronunciation of Arabic letters and the basics of reading.",
                "duration": "2–4 months",
                "icon": "📖",
                "order": 1,
                "classes_per_week": 5,
                "class_duration_minutes": 30,
                "monthly_fee": 4000,
            },
            {
                "title": "Nazra Quran",
                "slug": "nazra-quran",
                "description": "Fluent Quran reading practice with attention to pronunciation, fluency and basic rules of recitation.",
                "duration": "6–12 months",
                "icon": "🕊️",
                "order": 2,
                "classes_per_week": 5,
                "class_duration_minutes": 40,
                "monthly_fee": 5000,
            },
            {
                "title": "Tajweed",
                "slug": "tajweed",
                "description": "Master the rules of correct recitation — articulation points, stops, and the melodic rules of the Quran.",
                "duration": "3–6 months",
                "icon": "🎙️",
                "order": 3,
                "classes_per_week": 4,
                "class_duration_minutes": 40,
                "monthly_fee": 5500,
            },
            {
                "title": "Hifz-ul-Quran",
                "slug": "hifz-ul-quran",
                "description": "Structured memorization program with daily revision plans, guided by experienced Huffaz.",
                "duration": "2–4 years",
                "icon": "🌙",
                "order": 4,
                "classes_per_week": 6,
                "class_duration_minutes": 45,
                "monthly_fee": 7000,
            },
        ]

        for data in courses_data:
            course, created = Course.objects.update_or_create(
                slug=data["slug"],
                defaults={
                    "title": data["title"],
                    "description": data["description"],
                    "duration": data["duration"],
                    "icon": data["icon"],
                    "order": data["order"],
                },
            )
            Fee.objects.update_or_create(
                course=course,
                defaults={
                    "classes_per_week": data["classes_per_week"],
                    "class_duration_minutes": data["class_duration_minutes"],
                    "monthly_fee": data["monthly_fee"],
                    "currency": "PKR",
                },
            )
            action = "Created" if created else "Updated"
            self.stdout.write(self.style.SUCCESS(f"{action} course: {course.title}"))

        slots_data = [
            {"slot_name": "Morning", "start_time": "08:00", "end_time": "11:00", "availability": "available"},
            {"slot_name": "Afternoon", "start_time": "13:00", "end_time": "16:00", "availability": "available"},
            {"slot_name": "Evening", "start_time": "17:00", "end_time": "20:00", "availability": "limited"},
            {"slot_name": "Night", "start_time": "20:30", "end_time": "22:30", "availability": "available"},
        ]

        for slot in slots_data:
            ScheduleSlot.objects.update_or_create(
                slot_name=slot["slot_name"],
                defaults={
                    "start_time": slot["start_time"],
                    "end_time": slot["end_time"],
                    "availability": slot["availability"],
                },
            )

        self.stdout.write(self.style.SUCCESS("Created/updated schedule slots."))

        testimonials_data = [
            {
                "name": "Sister Ayesha",
                "location": "Karachi",
                "text": "My daughter started with Noorani Qaida and within four months she could read Quran on her own. The tutor was patient and consistent.",
            },
            {
                "name": "Br. Hamza",
                "location": "UK",
                "text": "I work full-time so the flexible evening slots made a real difference. My Tajweed has improved more in three months than years of trying alone.",
            },
            {
                "name": "Sister Fatima",
                "location": "USA",
                "text": "Both my sons are now in the Hifz program. The daily revision tracking keeps them — and me — accountable.",
            },
        ]

        for t in testimonials_data:
            Testimonial.objects.update_or_create(
                name=t["name"], text=t["text"], defaults={"location": t["location"]}
            )

        self.stdout.write(self.style.SUCCESS("Created/updated testimonials."))
        self.stdout.write(self.style.SUCCESS("✅ Seeding complete!"))
