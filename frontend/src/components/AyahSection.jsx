import "../styles/AyahSection.css";
import dpImage from "../assets/images/images-quran.jpg";

export default function AyahSection() {
  return (
    <section className="ayah">
      <div className="ayah__inner">

        {/* ---------- Left: Text ---------- */}
        <div className="ayah__text" data-aos="fade-right">
          <p className="ayah__arabic" dir="rtl" lang="ar">
            خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
          </p>

          <p className="ayah__english">
            "The best among you are those who learn the Qur'an and teach it."
          </p>

          <span className="ayah__source">
            — Prophet Muhammad ﷺ (Sahih al-Bukhari)
          </span>
        </div>

        {/* ---------- Right: Image ---------- */}
        <div className="ayah__image-wrap" data-aos="fade-left" data-aos-delay="200">
          <img src={dpImage} alt="Student reading the Quran" />
        </div>

      </div>
    </section>
  );
}