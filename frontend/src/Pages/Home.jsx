import { Link } from "react-router-dom";
import courses from "../data/courses";
import testimonials from "../data/testimonials";
import AyahSection from "../components/AyahSection";
import "../styles/Home.css";
import {
  FaUserGraduate,
  FaClock,
  FaChartLine,
  FaBookOpen,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="home" data-aos="fade-up">
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero__pattern" aria-hidden="true"></div>

        <img
          src="/images/kids.png"
          alt="Kids learning Quran"
          className="hero__img hero__img--left"
          data-aos="fade-right"
        />
        <img
          src="/images/female_teacher.png"
          alt="Online female Quran teacher"
          className="hero__img hero__img--right"
          data-aos="fade-left"
        />

        <div className="hero__inner" data-aos="zoom-in">
          <p className="hero__eyebrow">Online Quran Academy</p>
          <h1 className="hero__title">
            Learn the Quran, <span>"Every Letter Brings Reward"</span>
          </h1>
          <p>"Whoever recites a letter from the Book of Allah will receive one good deed, and each good deed is multiplied by ten." — Jami' at-Tirmidhi</p>
          <p className="hero__subtitle">
            Our mission is to help students of all ages connect with the Holy Quran and strengthen their faith through quality online education..
          </p>
          <div className="hero__actions">
            <Link to="/enrollment" className="btn btn--gold">Start Free Trial</Link>
            <Link to="/courses" className="btn btn--ghost">View Courses</Link>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">1000+</span>
              <span className="hero__stat-label">Students Taught</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">10+</span>
              <span className="hero__stat-label">Qualified Tutors</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">15</span>
              <span className="hero__stat-label">Countries Reached</span>
            </div>
          </div>
        </div>
      </section>

      <AyahSection />

      {/* ---------- Why us ---------- */}
      <section className="why" data-aos="fade-up">
        <div className="why__inner">
          <h2 className="section-title">Why Choose Our Online Quran Academy?</h2>
          <div className="why__grid">
            <div className="why__item" data-aos="flip-left">
              <span className="why__icon"><FaUserGraduate /></span>
              <h3>Separate Tutors</h3>
              <p>Male tutors for brothers, female tutors for sisters and children — always.</p>
            </div>
            <div className="why__item" data-aos="flip-left">
              <span className="why__icon"><FaClock /></span>
              <h3>Flexible Timing</h3>
              <p>Classes scheduled around your day, with makeup sessions for missed classes.</p>
            </div>
            <div className="why__item" data-aos="flip-left">
              <span className="why__icon"><FaChartLine /></span>
              <h3>Progress Tracking</h3>
              <p>Monthly reports so you always know exactly how your child is progressing.</p>
            </div>
            <div className="why__item" data-aos="flip-left">
              <span className="why__icon"><FaBookOpen /></span>
              <h3>Certified Tutors</h3>
              <p>Every tutor is Ijazah-certified with years of teaching experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Courses preview ---------- */}
      <section className="courses-preview">
        <div className="courses-preview__inner">
          <h2 className="section-title" data-aos="fade-right">Our Courses</h2>
          <p className="section-subtitle">
            A clear path from first letters to full memorization.
          </p>

          <div className="courses-preview__grid">
            {courses.map((course) => (
              <div className="course-card" key={course.id} data-aos="zoom-in-up">
                <span className="course-card__icon" aria-hidden="true">{course.icon}</span>
                <h3 className="course-card__title">{course.title}</h3>
                <p className="course-card__desc">{course.description}</p>
                <span className="course-card__duration">{course.duration}</span>
              </div>
            ))}
          </div>

          <div className="courses-preview__cta">
            <Link to="/courses" className="btn btn--outline">See All Courses</Link>
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="testimonials">
        <div className="testimonials__inner">
          <h2 className="section-title section-title--light">What Parents Say</h2>
          <div className="testimonials__grid">
            {testimonials.map((t) => (
              <blockquote className="testimonial-card" key={t.id} data-aos="fade-up">
                <p>"{t.text}"</p>
                <cite>— {t.name}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="final-cta" data-aos="zoom-in">
        <div className="final-cta__inner">
          <h2>Ready to begin your child's Quran journey?</h2>
          <p>Book a free trial class today — no commitment required.</p>
          <Link to="/enrollment" className="btn btn--gold">Book Free Trial</Link>
        </div>
      </section>
    </main>
  );
}