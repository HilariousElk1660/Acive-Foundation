import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./Donate.module.css";

import BANNER_IMG from "./Images/banner.png";
import GOODS_IMG from "./Images/img.png";

// ── Constants ──────────────────────────────────────────────────────────────────

// const FIELDS = [
//   { label: "Your name",    key: "name",      placeholder: "e.g Nina"                        },
//   { label: "Your address", key: "address",   placeholder: "73 Eagle East Road, Parktown"    },
//   { label: "Telephone",    key: "telephone", placeholder: "e.g (+27) 12 356 7890"              },
//   { label: "Email",        key: "email",     placeholder: "e.g nina@activefoundation.co.za" },
// ];

const BANKING_DETAILS = [
  { label: "Account Name",   value: "ACTIVE FOUNDATION TRUST" },
  { label: "Bank",           value: "Nedbank"                                 },
  { label: "Account Type",   value: "Current Account"                         },
  { label: "Account #", value: "1017990417"                              },
];

// ── Component ──────────────────────────────────────────────────────────────────

export default function Donate() {
  const [form, setForm] = useState({ name: "", address: "", telephone: "", email: "" });
  const sectionRef = useRef();
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    if (window.location.hash === '#donate' && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const handleChange = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleCopy = (value, label) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 1800);
    });
  };

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
      <section className={styles.mainSection} ref={sectionRef}  id="donate">

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

              {/* Personal detail fields
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
              ))} */}

              {/* ── Banking + QR section ── */}
              <div className={`${styles.paymentSection} ${styles.formGridFull}`}>

                {/* Banking details */}
                <div className={styles.bankingBlock}>
                  <div className={styles.bankingTitle}>
                    Banking Details
                  </div>
                  <div className={styles.bankingRows}>
                    {BANKING_DETAILS.map(({ label, value }) => (
                      <div className={styles.bankingRow} key={label}>
                        <span className={styles.bankingLabel}>{label}</span>
                        <span className={styles.bankingValue}>{value}</span>
                        <button
                          className={styles.copyBtn}
                          onClick={() => handleCopy(value, label)}
                          title={`Copy ${label}`}
                        >
                          {copied === label ? (
                            <span className={styles.copiedTick}>✓</span>
                          ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="9" y="9" width="13" height="13" rx="2" />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* QR code */}
                <div className={styles.qrBlock}>
                  <div className={styles.qrTitle}>Scan to Pay</div>
                  <div className={styles.qrWrapper}>
                    {/* Dummy QR code built from SVG grid pattern */}
                    <svg
                      className={styles.qrSvg}
                      viewBox="0 0 37 37"
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="crispEdges"
                    >
                      {/* Outer quiet zone bg */}
                      <rect width="37" height="37" fill="#fff" />

                      {/* Top-left finder */}
                      <rect x="1" y="1" width="7" height="7" fill="#111" />
                      <rect x="2" y="2" width="5" height="5" fill="#fff" />
                      <rect x="3" y="3" width="3" height="3" fill="#111" />

                      {/* Top-right finder */}
                      <rect x="29" y="1" width="7" height="7" fill="#111" />
                      <rect x="30" y="2" width="5" height="5" fill="#fff" />
                      <rect x="31" y="3" width="3" height="3" fill="#111" />

                      {/* Bottom-left finder */}
                      <rect x="1" y="29" width="7" height="7" fill="#111" />
                      <rect x="2" y="30" width="5" height="5" fill="#fff" />
                      <rect x="3" y="31" width="3" height="3" fill="#111" />

                      {/* Timing pattern H */}
                      {[9,11,13,15,17,19,21,23,25,27].map((x, i) =>
                        i % 2 === 0 ? <rect key={`th${x}`} x={x} y="6" width="1" height="1" fill="#111" /> : null
                      )}
                      {/* Timing pattern V */}
                      {[9,11,13,15,17,19,21,23,25,27].map((y, i) =>
                        i % 2 === 0 ? <rect key={`tv${y}`} x="6" y={y} width="1" height="1" fill="#111" /> : null
                      )}

                      {/* Data modules */}
                      {[
                        [9,1],[10,1],[12,1],[14,1],[16,1],[18,1],[20,1],[22,1],[24,1],[26,1],[27,1],
                        [9,2],[11,2],[13,2],[15,2],[17,2],[19,2],[21,2],[23,2],[25,2],[27,2],
                        [9,3],[10,3],[12,3],[16,3],[18,3],[20,3],[24,3],[26,3],
                        [9,4],[11,4],[13,4],[15,4],[19,4],[21,4],[23,4],[25,4],[27,4],
                        [10,5],[12,5],[14,5],[16,5],[18,5],[22,5],[24,5],[26,5],
                        [1,9],[2,9],[4,9],[6,9],[9,9],[11,9],[13,9],[15,9],[17,9],[20,9],[22,9],[25,9],[27,9],
                        [1,10],[3,10],[5,10],[10,10],[12,10],[14,10],[16,10],[18,10],[21,10],[23,10],[26,10],
                        [2,11],[4,11],[6,11],[9,11],[11,11],[15,11],[19,11],[22,11],[24,11],[27,11],
                        [1,12],[3,12],[5,12],[10,12],[12,12],[14,12],[16,12],[20,12],[23,12],[25,12],
                        [2,13],[4,13],[9,13],[11,13],[13,13],[17,13],[19,13],[21,13],[24,13],[26,13],
                        [1,14],[3,14],[5,14],[6,14],[10,14],[12,14],[14,14],[16,14],[18,14],[22,14],[25,14],[27,14],
                        [2,15],[4,15],[9,15],[11,15],[13,15],[15,15],[19,15],[21,15],[23,15],[26,15],
                        [1,16],[3,16],[5,16],[10,16],[12,16],[14,16],[16,16],[18,16],[20,16],[24,16],[27,16],
                        [2,17],[4,17],[6,17],[9,17],[11,17],[13,17],[17,17],[19,17],[22,17],[25,17],
                        [1,18],[3,18],[5,18],[10,18],[12,18],[14,18],[16,18],[18,18],[20,18],[23,18],[26,18],
                        [2,19],[4,19],[9,19],[11,19],[15,19],[17,19],[19,19],[21,19],[24,19],[27,19],
                        [1,20],[3,20],[5,20],[6,20],[10,20],[12,20],[14,20],[16,20],[18,20],[22,20],[25,20],
                        [2,21],[4,21],[9,21],[11,21],[13,21],[17,21],[19,21],[23,21],[26,21],
                        [1,22],[3,22],[5,22],[10,22],[12,22],[14,22],[16,22],[18,22],[20,22],[24,22],[27,22],
                        [9,23],[11,23],[13,23],[15,23],[17,23],[19,23],[21,23],[25,23],
                        [9,24],[10,24],[12,24],[14,24],[16,24],[18,24],[20,24],[22,24],[24,24],[26,24],
                        [9,25],[11,25],[13,25],[15,25],[17,25],[19,25],[23,25],[25,25],[27,25],
                        [9,26],[10,26],[12,26],[14,26],[16,26],[18,26],[20,26],[22,26],[24,26],[26,26],
                        [9,27],[11,27],[13,27],[15,27],[17,27],[21,27],[23,27],[25,27],[27,27],
                        [1,29],[3,29],[5,29],[6,29],[10,29],[12,29],[14,29],[16,29],[18,29],[20,29],[22,29],[24,29],[26,29],[27,29],
                        [2,30],[4,30],[9,30],[11,30],[13,30],[15,30],[17,30],[19,30],[21,30],[23,30],[25,30],
                        [1,31],[3,31],[5,31],[10,31],[12,31],[14,31],[16,31],[18,31],[20,31],[22,31],[24,31],[26,31],
                        [2,32],[4,32],[6,32],[9,32],[11,32],[13,32],[15,32],[17,32],[19,32],[23,32],[25,32],[27,32],
                        [1,33],[3,33],[5,33],[10,33],[12,33],[14,33],[16,33],[18,33],[20,33],[22,33],[24,33],[26,33],
                        [2,34],[4,34],[9,34],[11,34],[13,34],[15,34],[17,34],[21,34],[23,34],[25,34],[27,34],
                        [1,35],[3,35],[5,35],[6,35],[10,35],[12,35],[14,35],[16,35],[18,35],[20,35],[22,35],[24,35],[26,35],
                      ].map(([x, y]) => (
                        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#111" />
                      ))}
                    </svg>
                  </div>
                  <p className={styles.qrHint}>Point your banking app's<br />camera here to pay</p>
                </div>

              </div>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}