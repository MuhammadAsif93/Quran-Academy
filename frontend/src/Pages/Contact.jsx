import { useState } from "react";
import { submitContactMessage } from "../api/api";
import "../styles/Contact.css";

import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaUser, FaCommentDots, FaCheckCircle, FaExclamationTriangle 
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await submitContactMessage(form);
      setSent(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      
      <section className="page-header" data-aos="fade-down">
        <div className="page-header__inner">
          <p className="page-header__eyebrow">Contact Us</p>
          <h1 className="page-header__title">We'd Love to Hear From You</h1>
          <p className="page-header__subtitle">
            Questions about courses, timing, or fees? Send us a message or
            reach out directly.
          </p>
        </div>
      </section>

      <section className="contact-content" data-aos="fade-up">
        <div className="contact-content__inner">

          {/* ---------- Contact info ---------- */}
          <div className="contact-info" data-aos="fade-right">

            <div className="contact-info__item" data-aos="zoom-in">
              <span><FaPhone /></span>
              <div>
                <h4>Phone</h4>
                <p>+92 3192761156</p>
              </div>
            </div>

            <div className="contact-info__item" data-aos="zoom-in">
              <span><FaEnvelope /></span>
              <div>
                <h4>Email</h4>
                <p>Fatima41680@gmail.com</p>
              </div>
            </div>

            <div className="contact-info__item" data-aos="zoom-in">
              <span><FaClock /></span>
              <div>
                <h4>Office Hours</h4>
                <p>Mon–Sat, 9am–9pm (PKT)</p>
              </div>
            </div>

            <a
              href="https://wa.me/03192761156"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info__whatsapp"
              data-aos="flip-left"
            >
              <FaWhatsapp style={{ marginRight: "8px" }} />
              Chat on WhatsApp
            </a>

          </div>

          {/* ---------- Contact form ---------- */}
          <div className="contact-form-wrap" data-aos="fade-left">
  {sent ? (
    <div className="contact-success" data-aos="zoom-in">
      <FaCheckCircle className="contact-icon success" />
      <h2>Message Sent!</h2>
      <p>We'll get back to you as soon as possible.</p>
    </div>
  ) : (
    <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up">

      {error && (
        <p className="contact-form__error">
          <FaExclamationTriangle className="contact-icon error" />
          {error}
        </p>
      )}

      <label>
        <FaUser className="field-icon" />
        Your Name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full name"
          required
        />
      </label>

      <label>
        <FaEnvelope className="field-icon" />
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
      </label>

      <label>
        <FaCommentDots className="field-icon" />
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help?"
          rows="5"
          required
        />
      </label>

      <button
        type="submit"
        className="btn btn--gold"
        disabled={loading}
        data-aos="zoom-in"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

    </form>
  )}
</div>
        </div>
      </section>
    </main>
  );
}