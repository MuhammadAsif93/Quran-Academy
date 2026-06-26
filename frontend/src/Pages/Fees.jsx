import { Link } from "react-router-dom";
import FeeTable from "../components/FeeTable";
import "../styles/Fees.css";

import { FaCreditCard } from "react-icons/fa";

export default function Fees() {
  return (
    <main className="fees-page">

      {/* ---------- HEADER ---------- */}
      <section className="page-header" data-aos="fade-up">
        <div className="page-header__inner">
          <p className="page-header__eyebrow" data-aos="fade-right">
            Fee Structure
          </p>

          <h1 className="page-header__title" data-aos="zoom-in">
            Affordable, Transparent Pricing
          </h1>

          <p
            className="page-header__subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            No hidden charges. One-on-one classes at a price that respects
            both quality teaching and your budget.
          </p>
        </div>
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="fees-content">
        <div className="fees-content__inner">

          {/* TABLE */}
          <div data-aos="fade-right">
            <FeeTable />
          </div>

          {/* PAYMENT INFO */}
          <div
            className="fees-note"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <h3 data-aos="fade-up">
              <FaCreditCard style={{ marginRight: "8px" }} />
              Payment Info
            </h3>

            <ul>
              <li data-aos="fade-right" data-aos-delay="200">
                Fees are charged monthly, in advance.
              </li>

              <li data-aos="fade-right" data-aos-delay="250">
                Sibling discount of 10% on the second enrollment.
              </li>

              <li data-aos="fade-right" data-aos-delay="300">
                Bank transfer, EasyPaisa & JazzCash accepted.
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="fees-cta" data-aos="zoom-in">
        <div className="fees-cta__inner">
          <h2>Try your first class free — no payment required.</h2>
          <Link to="/enrollment" className="btn btn--gold">
            Start Free Trial
          </Link>
        </div>
      </section>

    </main>
  );
}