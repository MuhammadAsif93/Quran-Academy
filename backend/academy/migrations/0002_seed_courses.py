from django.db import migrations


def seed_courses(apps, schema_editor):
    Course = apps.get_model("academy", "Course")

    courses_data = [
        {
            "slug": "noorani-qaida",
            "title": "Noorani Qaida",
            "description": "Arabic letters ki sahih pehchan aur talaffuz — Quran padhne ka pehla qadam.",
            "duration": "2–4 months",
            "icon": "🔤",
            "order": 1,
        },
        {
            "slug": "tarjuma-quran",
            "title": "Tarjuma Quran",
            "description": "Quran ke alfaz ka asaan tarjuma, taake har student Allah ke kalaam ka maani samajh sakay.",
            "duration": "6–12 months",
            "icon": "📘",
            "order": 2,
        },
        {
            "slug": "tarjuma-tafseer",
            "title": "Tarjuma Tafseer",
            "description": "Tafseer ke saath gehri samajh — Quran ki aayaat ki tafseel aur unka pas-e-manzar.",
            "duration": "8–14 months",
            "icon": "📚",
            "order": 3,
        },
        {
            "slug": "asaan-namaz",
            "title": "Asaan Namaz",
            "description": "Namaz ka sahih tareeqa, masnoon duayen aur namaz ke arkaan ki mukammal rehnumai.",
            "duration": "1–2 months",
            "icon": "🕌",
            "order": 4,
        },
        {
            "slug": "bunyadi-maloomat",
            "title": "Bunyadi Maloomat-e-Deen",
            "description": "Islam ki bunyadi taleemaat — Arkan-e-Islam, Arkan-e-Iman aur rozmarra ke deeni masail.",
            "duration": "2–3 months",
            "icon": "🌙",
            "order": 5,
        },
        {
            "slug": "kalme",
            "title": "Kalme",
            "description": "Chhe kalmon ki sahih talaffuz ke saath yaad-dahani aur unke maani ki samajh.",
            "duration": "2–4 weeks",
            "icon": "🤲",
            "order": 6,
        },
        {
            "slug": "duaas",
            "title": "Duaas (Masnoon Duayen)",
            "description": "Rozmarra zindagi ki masnoon duayen — khane, safar, sone aur uthne ki duayen.",
            "duration": "1–2 months",
            "icon": "🙏",
            "order": 7,
        },
        {
            "slug": "chehel-hadees",
            "title": "Chehel Hadees",
            "description": "Chalees mukhtasir ahadees ka hifz aur unki rozmarra zindagi mein amal ki tarbiyat.",
            "duration": "2–3 months",
            "icon": "📜",
            "order": 8,
        },
        {
            "slug": "nazira-with-tajweed",
            "title": "Nazira with Tajweed",
            "description": "Quran ki tilawat tajweed ke qawaid ke saath — sahih makhraj aur lehja ki mehnat.",
            "duration": "6–12 months",
            "icon": "🎙️",
            "order": 9,
        },
        {
            "slug": "nazira-without-tajweed",
            "title": "Nazira without Tajweed",
            "description": "Sirf rawani ke saath Quran padhna seekhna — bunyadi reading practice.",
            "duration": "4–8 months",
            "icon": "📖",
            "order": 10,
        },
        {
            "slug": "hifz-ul-quran",
            "title": "Hifz-e-Quran",
            "description": "Mukammal Quran hifz ka structured program, roz revision plan ke saath, experienced Huffaz ki nigrani mein.",
            "duration": "2–4 years",
            "icon": "🕊️",
            "order": 11,
        },
    ]

    for data in courses_data:
        Course.objects.update_or_create(slug=data["slug"], defaults=data)


def unseed_courses(apps, schema_editor):
    Course = apps.get_model("academy", "Course")
    slugs = [
        "noorani-qaida", "tarjuma-quran", "tarjuma-tafseer", "asaan-namaz",
        "bunyadi-maloomat", "kalme", "duaas", "chehel-hadees",
        "nazira-with-tajweed", "nazira-without-tajweed", "hifz-ul-quran",
    ]
    Course.objects.filter(slug__in=slugs).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("academy", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(seed_courses, unseed_courses),
    ]