import { Link } from "react-router-dom";
import "../styles/About.css";

import { FaHandHoldingHeart, FaQuran, FaUserShield, FaPeace, FaBookOpen, } from "react-icons/fa";

export default function About() {
  return (
    <main className="about">

      {/* ---------- Page header ---------- */}
      <section className="page-header" data-aos="fade-down">
        <div className="page-header__inner">
          <p className="page-header__eyebrow">About Us</p>
          <h1 className="page-header__title">
            Binte Hakeem Academy
          </h1>
          <p className="page-header__subtitle">
            Dedicated to teaching the Quran with correct pronunciation,
            patience, and one-on-one personal attention — online, anywhere
            in the world.
          </p>
        </div>
      </section>

      {/* ---------- Mission ---------- */}
      <section className="about-mission">
        <div className="about-mission__inner">

          <div className="about-mission__text" data-aos="fade-right">
            <h2 className="section-title section-title--left">Our Mission</h2>
            <p>
              We started this academy with one simple goal — to make
              authentic, Tajweed-correct Quran education accessible to every
              Muslim family, regardless of where they live.
            </p>
            <p>
              Whether your child is starting from Noorani Qaida or pursuing
              Hifz-ul-Quran, we build a learning plan suited to their pace.
            </p>
          </div>

          <div className="about-mission__stats" data-aos="fade-left">
            <div className="about-mission__stat">
              <span>1000+</span>
              <p>Students Taught</p>
            </div>
            <div className="about-mission__stat">
              <span>10+</span>
              <p>Certified Tutors</p>
            </div>
            <div className="about-mission__stat">
              <span>15</span>
              <p>Countries Reached</p>
            </div>
            <div className="about-mission__stat">
              <span>3+</span>
              <p>Years of Service</p>
            </div>
          </div>

        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section className="about-values">
        <div className="about-values__inner">

          <h2 className="section-title" data-aos="fade-up">What We Stand For</h2>

          <div className="about-values__grid">

            <div className="about-values__item">
              <FaHandHoldingHeart className="value-icon" data-aos="fade-up" />
              <h3>Sincerity</h3>
              <p>Every class is taught with the intention of pleasing Allah and serving the student honestly.</p>
            </div>

            <div className="about-values__item">
              <FaBookOpen className="value-icon" data-aos="fade-up" />
              <h3>Correct Tajweed</h3>
              <p>We never compromise on correct pronunciation — the foundation of proper recitation.</p>
            </div>

            <div className="about-values__item">
              <FaUserShield className="value-icon" data-aos="fade-up" />
              <h3>Modesty</h3>
              <p>Gender-matched tutors and a respectful environment for all students.</p>
            </div>

            <div className="about-values__item">
              <FaPeace className="value-icon"  data-aos="fade-up" />
              <h3>Patience</h3>
              <p>Every student learns at their own pace — no rushing in Quran learning.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="about-cta" data-aos="fade-up" >
        <div className="about-cta__inner" data-aos="fade-up" >
          <h2>Want to know more about our teaching method?</h2>
          <Link to="/contact" className="btn btn--gold">
            Get in Touch
          </Link>
        </div>
      </section>

    </main>
  );
}