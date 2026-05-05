import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./AboutUs.module.css";

import BANNER_IMG from "./Images/banner.png";
import GOODS_IMG from "./Images/img.png";

// ── Constants ──────────────────────────────────────────────────────────────────

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
  { label: "Your name",    key: "name",      placeholder: "e.g Nina"                        },
  { label: "Your address", key: "address",   placeholder: "73 Eagle East Road, Parktown"    },
  { label: "Telephone",    key: "telephone", placeholder: "e.g (+27) 123-5678"              },
  { label: "Email",        key: "email",     placeholder: "e.g nina@activefoundation.co.za" },
];

const MAX_AMOUNT = 2500;

// ── Component ──────────────────────────────────────────────────────────────────

export default function AboutUs() {
  const [form, setForm]               = useState({ name: "", address: "", telephone: "", email: "" });
  const [donationType, setDonationType]     = useState("");
  const [donationAmount, setDonationAmount] = useState("");

  const selectedAmt = DONATION_AMOUNTS.find((a) => a.label === donationAmount);
  const fillPct     = selectedAmt ? Math.min((selectedAmt.value / MAX_AMOUNT) * 100, 100) : 0;

  const handleChange = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const selectClass = (hasValue) =>
    `${styles.fieldSelect}${hasValue ? ` ${styles.hasValue}` : ""}`;

  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <img className={styles.heroImg} src={BANNER_IMG} alt="Hands holding a heart" />
        <div className={styles.heroOverlay} />
        <div className={styles.heroNav}>
          <Navbar />
        </div>
      </section>

      {/* ── Main content ── */}
      <section className={styles.mainSection}>

        <div className={styles.leftImage}>
          <img src={GOODS_IMG} alt="Donation goods in reusable bags" />
        </div>

        <div className={styles.rightCol}>
          <h1 className={styles.headline}>
            Every Rand you give powers Active Foundation's community projects,
            providing real help where it's needed most.
          </h1>

          <div className={styles.formCard}>
            <div className={styles.formGrid}>

              {/* Personal detail fields */}
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
                  className={selectClass(donationType)}
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
                  className={selectClass(donationAmount)}
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                >
                  <option value="" disabled>Select donation amount</option>
                  {DONATION_AMOUNTS.map(({ label }) => (
                    <option key={label} value={label}>{label}</option>
                  ))}
                </select>
              </div>

            </div>

            {/* Donation progress bar */}
            <div className={styles.totalSection}>
              <div className={styles.totalLabel}>Donation total:</div>
              <div className={styles.totalBarWrap}>
                <div className={styles.dotGreen} />
                <div className={styles.totalBar}>
                  <div className={styles.totalBarFill} style={{ width: `${fillPct}%` }} />
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

      <Footer />
    </div>
  );
}