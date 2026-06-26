import { useState } from "react";
import courses from "../data/courses";
import { submitEnrollment } from "../api/api";
import "../styles/Enrollment.css";

export default function Enrollment() {
  const [form, setForm] = useState({
    student_name: "",
    age: "",
    gender: "",
    course: "",
    preferred_timing: "",
    contact_info: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await submitEnrollment({ ...form, age: Number(form.age) });
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="enrollment-page">

      <section className="page-header" data-aos="fade-down">
        <div className="page-header__inner">
          <p className="page-header__eyebrow">Enrollment</p>
          <h1 className="page-header__title">Start Your Free Trial Class</h1>
          <p className="page-header__subtitle">
            Fill the form below and our team will contact you within 24 hours
            to schedule your first free class.
          </p>
        </div>
      </section>

      <section className="enrollment-content">
        <div className="enrollment-content__inner">

          {submitted ? (
            <div className="enrollment-success" data-aos="zoom-in">
              <span>✅</span>
              <h2>Thank you, {form.student_name || "friend"}!</h2>
              <p>
                Your request has been received. Our team will reach out to you
                shortly on the contact details you provided.
              </p>
            </div>
          ) : (
            <form className="enrollment-form" onSubmit={handleSubmit} data-aos="fade-up">

              {error && (
                <p className="enrollment-form__error" data-aos="fade-in">
                  ⚠️ {error}
                </p>
              )}

              <div className="enrollment-form__row" data-aos="fade-right">
                <label>
                  Student Name
                  <input
                    type="text"
                    name="student_name"
                    value={form.student_name}
                    onChange={handleChange}
                    placeholder="e.g. Ahmed Khan"
                    required
                  />
                </label>

                <label>
                  Age
                  <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    placeholder="e.g. 9"
                    min="3"
                    max="80"
                    required
                  />
                </label>
              </div>

              <div className="enrollment-form__row" data-aos="fade-left">
                <label>
                  Gender
                  <select name="gender" value={form.gender} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>

                <label>
                  Preferred Course
                  <select name="course" value={form.course} onChange={handleChange} required>
                    <option value="">Select a course</option>
                    {courses.map((c) => (
                      <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="enrollment-form__row" data-aos="fade-right">
                <label>
                  Preferred Timing
                  <select
                    name="preferred_timing"
                    value={form.preferred_timing}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a slot</option>
                    <option value="morning">Morning (8AM – 11AM)</option>
                    <option value="afternoon">Afternoon (1PM – 4PM)</option>
                    <option value="evening">Evening (5PM – 8PM)</option>
                    <option value="night">Night (8:30PM – 10:30PM)</option>
                    <option value="night">Night (11:00PM – 01:30AM)</option>
                  </select>
                </label>

                <label data-aos="fade-left">
                  WhatsApp / Email
                  <input
                    type="text"
                    name="contact_info"
                    value={form.contact_info}
                    onChange={handleChange}
                    placeholder="e.g. +92 3192761156"
                    required
                  />
                </label>
              </div>

              <button
                type="submit"
                className="btn btn--gold enrollment-form__submit"
                disabled={loading}
                data-aos="zoom-in"
              >
                {loading ? "Submitting..." : "Book Free Trial"}
              </button>

            </form>
          )}

        </div>
      </section>
    </main>
  );
}