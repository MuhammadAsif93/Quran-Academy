import {
  FaBook,
  FaBookOpen,
  FaMosque,
  FaMoon,
  FaScroll,
  FaMicrophone,
  FaQuran,
  FaDove,
  FaPrayingHands,
} from "react-icons/fa";

const courses = [
  {
    id: "noorani-qaida",
    title: "Noorani Qaida",
    description:
      "Learn the beautiful meanings of the Holy Quran in a simple and easy way within 6 to 12 months. We help students of all ages understand translation (Tarjuma) with clear explanations and practical learning. Build a strong connection with the Quran and apply its teachings in daily life.",
    duration: "2–4 months",
    icon: FaBookOpen,
    aos: "zoom-in",
    delay: 0,
  },
  {
    id: "tarjuma-quran",
    title: "Tarjuma Quran",
    description:
      "Learn the beautiful meanings of the Holy Quran in a simple and easy way within 6 to 12 months. Understand translation with clear explanations.",
    duration: "6–12 months",
    icon: FaBookOpen,
    aos: "fade-up",
    delay: 100,
  },
  {
    id: "tarjuma-tafseer",
    title: "Tarjuma Tafseer",
    description:
      "Understand the deep meanings and explanations of the Holy Quran with Tafseer. Learn how Quranic verses guide us in daily life with clear and simple interpretation.",
    duration: "8–14 months",
    icon: FaBookOpen,
    aos: "fade-up",
    delay: 200,
  },
  {
    id: "asaan-namaz",
    title: "Asaan Namaz",
    description:
      "Learn the correct way of performing Namaz with easy steps, proper posture, and essential rules for daily prayers.",
    duration: "1–2 months",
    icon: FaMosque,
    aos: "flip-left",
    delay: 0,
  },
  {
    id: "bunyadi-maloomat",
    title: "Bunyadi Maloomat-e-Deen",
    description:
      "Gain basic Islamic knowledge including faith, worship, manners, and essential teachings of Islam in a simple and practical way.",
    duration: "2–3 months",
    icon: FaMoon,
    aos: "flip-left",
    delay: 100,
  },
  {
    id: "kalme",
    title: "Kalme",
    description:
      "Learn the Six Kalimas with correct pronunciation and understanding, strengthening your foundation of Islamic belief",
    duration: "2–4 weeks",
    icon: FaPrayingHands,
    aos: "fade-right",
    delay: 0,
  },
  {
    id: "duaas",
    title: "Duaas (Masnoon Duayen)",
    description:
      "Memorize and understand daily Sunnah duas for different situations, helping you stay connected with Allah in everyday life.",
    duration: "1–2 months",
    icon: FaPrayingHands,
    aos: "fade-right",
    delay: 100,
  },
  {
    id: "chehel-hadees",
    title: "Chehel Hadees",
    description:
      "Study 40 selected Hadiths with easy explanations to understand the teachings of Prophet Muhammad ﷺ and apply them in life.",
    duration: "2–3 months",
    icon: FaScroll,
    aos: "zoom-in-up",
    delay: 0,
  },
  {
    id: "nazira-with-tajweed",
    title: "Nazira with Tajweed",
    description:
      "Learn to read the Holy Quran fluently with proper Tajweed rules, focusing on correct pronunciation and recitation.",
    duration: "6–12 months",
    icon: FaMicrophone,
    aos: "zoom-in-up",
    delay: 100,
  },
  {
    id: "nazira-without-tajweed",
    title: "Nazira without Tajweed",
    description:
      "Learn basic Quran reading smoothly and confidently without focusing deeply on Tajweed rules.",
    duration: "4–8 months",
    icon: FaBookOpen,
    aos: "fade-up",
    delay: 200,
  },
  {
    id: "hifz-ul-quran",
    title: "Hifz-e-Quran",
    description:
      "A complete memorization program of the Holy Quran with proper revision plans, guidance, and strong support for long-term retention.",
    duration: "2–4 years",
    icon: FaDove,
    aos: "zoom-in",
    delay: 0,
  },
];

export default courses;