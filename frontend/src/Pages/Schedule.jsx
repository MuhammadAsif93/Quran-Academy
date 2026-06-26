import { Link } from "react-router-dom";
import ScheduleTable from "../components/ScheduleTable";
import "../styles/Schedule.css";

export default function Schedule() {
  return (
    <main className="schedule-page">

      {/* ---------- HEADER ---------- */}
      <section className="page-header" data-aos="fade-up">
        <div className="page-header__inner">
          <p className="page-header__eyebrow" data-aos="fade-right">
            Class Schedule
          </p>

          <h1 className="page-header__title" data-aos="zoom-in">
            Choose a Time That Works for You
          </h1>

          <p
            className="page-header__subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We offer flexible slots across time zones — pick what suits your
            family, and we'll match you with an available tutor.
          </p>
        </div>
      </section>

      {/* ---------- TABLE + NOTE ---------- */}
      <section className="schedule-content">
        <div className="schedule-content__inner">

          {/* TABLE */}
          <div data-aos="fade-right">
            <ScheduleTable />
          </div>

          {/* NOTE */}
          <div
            className="schedule-note"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <h3>📌 Good to know</h3>
            <ul>
              <li>Classes run 6 days a week — Sunday is a holiday by default.</li>
              <li>Missed classes can be rescheduled within the same week.</li>
              <li>Final timing is confirmed after your free trial class.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="schedule-cta" data-aos="zoom-in">
        <div className="schedule-cta__inner">
          <h2>Pick your slot and start learning this week.</h2>
          <Link to="/enrollment" className="btn btn--gold">
            Book Your Slot
          </Link>
        </div>
      </section>

    </main>
  );
}