import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../assets/quran.png";

import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__pattern" aria-hidden="true"></div>

      <div className="footer__inner">

        {/* ---------- BRAND ---------- */}
        <div className="footer__col footer__col--brand" data-aos="fade-up">
          <div className="footer__brand">
            <img
              src={logo}
              alt="Quran Logo"
              className="footer__brand-logo"
              data-aos="zoom-in"
            />

            <span
              className="footer__brand-title"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Binte Hakeem Quran Academy
            </span>
          </div>

          <p className="footer__tagline" data-aos="fade-up" data-aos-delay="150">
            Learn the Quran with certified, qualified tutors — Noorani Qaida to
            Hifz, taught one-on-one from the comfort of your home.
          </p>

          <a
            className="footer__whatsapp"
            href="https://wa.me/03192761156"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <FaWhatsapp style={{ marginRight: "8px" }} />
            Chat on WhatsApp
          </a>
        </div>

        {/* ---------- EXPLORE ---------- */}
        <div className="footer__col" data-aos="fade-up" data-aos-delay="100">
          <h4 className="footer__heading">Explore</h4>
          <ul className="footer__list">
            <li data-aos="fade-right" data-aos-delay="120"><Link to="/about">About Us</Link></li>
            <li data-aos="fade-right" data-aos-delay="140"><Link to="/courses">Courses</Link></li>
            <li data-aos="fade-right" data-aos-delay="160"><Link to="/schedule">Schedule</Link></li>
            <li data-aos="fade-right" data-aos-delay="180"><Link to="/fees">Fees</Link></li>
          </ul>
        </div>

        {/* ---------- COURSES ---------- */}
        <div className="footer__col" data-aos="fade-up" data-aos-delay="200">
          <h4 className="footer__heading">Courses</h4>
          <ul className="footer__list">
            <li data-aos="fade-right" data-aos-delay="220"><Link to="/courses">Noorani Qaida</Link></li>
            <li data-aos="fade-right" data-aos-delay="240"><Link to="/courses">Nazra Quran</Link></li>
            <li data-aos="fade-right" data-aos-delay="260"><Link to="/courses">Tajweed</Link></li>
            <li data-aos="fade-right" data-aos-delay="280"><Link to="/courses">Hifz-ul-Quran</Link></li>
          </ul>
        </div>

        {/* ---------- CONTACT ---------- */}
        <div className="footer__col" data-aos="fade-up" data-aos-delay="300">
          <h4 className="footer__heading">Get in Touch</h4>

          <ul className="footer__list footer__list--contact">
            <li data-aos="fade-left" data-aos-delay="320">
              <FaPhone style={{ marginRight: "8px" }} />
              +92 3192761156
            </li>

            <li data-aos="fade-left" data-aos-delay="340">
              <FaEnvelope style={{ marginRight: "8px" }} />
              Fatima41680@gmail.com
            </li>

            <li data-aos="fade-left" data-aos-delay="360">
              <FaClock style={{ marginRight: "8px" }} />
              Mon–Sat, 9am–9pm (PKT)
            </li>
          </ul>

          <Link
            to="/enrollment"
            className="footer__cta"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Enroll Now
          </Link>
        </div>

      </div>

      <div className="footer__bottom" data-aos="fade-up" data-aos-delay="500">
        <p>© {year} Binte Hakeem Online Quran Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}