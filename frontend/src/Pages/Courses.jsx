import { Link } from "react-router-dom";
import courses from "../data/courses";
import "../styles/Courses.css";

export default function Courses() {
  return (
    <main className="courses-page">

      {/* ---------- HEADER ---------- */}
      <section className="page-header" data-aos="fade-up">
        <div className="page-header__inner">
          <p className="page-header__eyebrow" data-aos="fade-right">
            Our Islamic Courses
          </p>

          <h1 className="page-header__title" data-aos="zoom-in">
            A Clear Path, From First Letters to Hifz
          </h1>

          <p className="page-header__subtitle" data-aos="fade-up" data-aos-delay="100">
            Every student begins at their own level. We provide a structured and
            personalized learning path — from basic Islamic teachings to Hifz with
            proper guidance and Tajweed.
          </p>
        </div>
      </section>

      {/* ---------- COURSES LIST ---------- */}
      <section className="courses-list">
        <div className="courses-list__inner">

          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <div
                className={`course-row ${
                  index % 2 === 1 ? "course-row--reverse" : ""
                }`}
                key={course.id}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <div className="course-row__icon-wrap">
                  <span
                    className="course-row__icon"
                    aria-hidden="true"
                    data-aos="zoom-in"
                  >
                    <Icon />
                  </span>
                </div>

                <div
                  className="course-row__content"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <span className="course-row__step">
                    Step {index + 1}
                  </span>

                  <h2>{course.title}</h2>

                  <p>{course.description}</p>

                  <span className="course-row__duration">
                    Duration: {course.duration}
                  </span>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="courses-cta" data-aos="zoom-in">
        <div className="courses-cta__inner">
          <h2>Not sure which course fits your child?</h2>
          <p>
            Book a free trial class and we'll recommend the right starting point.
          </p>

          <Link to="/enrollment" className="btn btn--gold">
            Book Free Trial
          </Link>
        </div>
      </section>

    </main>
  );
}