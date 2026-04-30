import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./AboutUs.module.css";

// Replace these with your actual local assets
import BANNER_IMG from "./Images/banner.png";
import GOODS_IMG from "./Images/img.png";
const KIDS_IMG = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=80";

const DONATION_AMOUNTS = [
  { label: "R50",   value: 50   },
  { label: "R100",  value: 100  },
  { label: "R250",  value: 250  },
  { label: "R500",  value: 500  },
  { label: "R1000", value: 1000 },
  { label: "R2500", value: 2500 },
];

const DONATION_TYPES = [
  "Once-off Donation",
  "Monthly Donation",
  "Corporate Giving",
  "In-kind Donation",
];

const FIELDS = [
  { label: "Your name",    key: "name",      placeholder: "e.g Nina"                          },
  { label: "Your address", key: "address",   placeholder: "73 Eagle East Road, Parktown"      },
  { label: "Telephone",    key: "telephone", placeholder: "e.g (+27) 123-5678"                },
  { label: "Email",        key: "email",     placeholder: "e.g nina@activefoundation.co.za"   },
];

const MAX_AMOUNT = 2500;

export default function DonationPage() {
  const [form, setForm] = useState({ name: "", address: "", telephone: "", email: "" });
  const [donationType, setDonationType]   = useState("");
  const [donationAmount, setDonationAmount] = useState("");

  const selectedAmt = DONATION_AMOUNTS.find((a) => a.label === donationAmount);
  const fillPct     = selectedAmt ? Math.min((selectedAmt.value / MAX_AMOUNT) * 100, 100) : 0;

  const handleChange = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <div className={styles.page}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <img className={styles.heroImg} src={BANNER_IMG} alt="Hands holding a heart" />
        <div className={styles.heroOverlay} />
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className={styles.mainSection}>

        {/* Left image */}
        <div className={styles.leftImage}>
          <img src={GOODS_IMG} alt="Donation goods in reusable bags" />
        </div>

        {/* Right content */}
        <div className={styles.rightCol}>
          <h1 className={styles.headline}>
            Every Rand you give powers Active Foundation's community projects,
            providing real help where it's needed most.
          </h1>

          <div className={styles.formCard}>
            <div className={styles.formGrid}>

              {/* Text fields */}
              {FIELDS.map(({ label, key, placeholder }) => (
                <div className={styles.fieldGroup} key={key}>
                  <label className={styles.fieldLabel}>{label}</label>
                  <input
                    className={styles.fieldInput}
                    type="text"
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={handleChange(key)}
                  />
                </div>
              ))}

              {/* Donation type */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Donation type</label>
                <select
                  className={`${styles.fieldSelect}${donationType ? ` ${styles.hasValue}` : ""}`}
                  value={donationType}
                  onChange={(e) => setDonationType(e.target.value)}
                >
                  <option value="" disabled>Select donation type</option>
                  {DONATION_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Donation amount */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Donation amount</label>
                <select
                  className={`${styles.fieldSelect}${donationAmount ? ` ${styles.hasValue}` : ""}`}
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                >
                  <option value="" disabled>Select donation amount</option>
                  {DONATION_AMOUNTS.map((a) => (
                    <option key={a.label} value={a.label}>{a.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Donation total bar */}
            <div className={styles.totalSection}>
              <div className={styles.totalLabel}>Donation total:</div>
              <div className={styles.totalBarWrap}>
                <div className={styles.dotGreen} />
                <div className={styles.totalBar}>
                  <div
                    className={styles.totalBarFill}
                    style={{ width: `${fillPct}%` }}
                  />
                </div>
                {selectedAmt && (
                  <div className={styles.totalAmount}>{donationAmount}</div>
                )}
              </div>
            </div>

            <button className={styles.donateBtn}>Donate Now</button>
          </div>
        </div>
      </section>

      {/* ── SECONDARY HERO IMAGE ── */}
      <div className={styles.secondaryHero}>
        <img src={KIDS_IMG} alt="Children in community" />
      </div>

      {/* ── NEWSLETTER ── */}
      <div className={styles.newsletterBar}>
        <p>Become a partner in change today</p>
        <input
          className={styles.newsletterInput}
          type="email"
          placeholder="Type your email here"
        />
      </div>

      {/* ── FOOTER ── */}
      <footer>
        <div className={styles.footer}>

          {/* Brand */}
          <div className={styles.footerLogo}>
            <span className={styles.logoBrand}>
              <span>Active</span> Foundation
            </span>
            <div className={styles.tagline}>One Block Can Change A Nation</div>
            <div className={styles.socialsLabel}>Check us out on our socials:</div>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Facebook">📘</a>
            </div>
          </div>

          {/* Get Involved */}
          <div className={styles.footerCol}>
            <h4>Get Involved</h4>
            <ul>
              <li>Volunteer</li>
              <li>Partner with us</li>
            </ul>
          </div>

          {/* Support */}
          <div className={styles.footerCol}>
            <h4>Support</h4>
            <ul>
              <li>Donate</li>
              <li>Corporate Giving</li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerCol}>
            <h4>Contact Us</h4>
            <ul>
              <li>72 Marlborough Road, Springfield</li>
              <li>tonsoflove@activefoundation.co.za</li>
              <li>(011) 493 4805</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottomWrap}>
          <div className={styles.footerBottom}>
            Copyright ©2025 The Active Foundation. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}