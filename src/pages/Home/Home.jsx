import React from "react";
import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import heroImage from "./Images/banner.jpg";
import rectangle20 from "./Images/rectangle20.png";
import rectangle22 from "./Images/rectangle22.png";
import rectangle23 from "./Images/rectangle23.png";
import rectangle24 from "./Images/rectangle24.png";
import rectangle57 from "./Images/rectangle57.png";
import rectangle58 from "./Images/rectangle58.png";
import rectangle52 from "./Images/rectangle52.png";

const programCards = [
  { title: "TONS OF LOVE", image: rectangle20 },
  { title: "CLOTHING", image: rectangle22 },
  { title: "EDUCATION", image: rectangle23 },
  { title: "OUTREACH", image: rectangle24 },
];

const values = ["Relief", "Unity", "Kindness", "Humanity", "Support"];

const donationCards = [
  { title: "HELP WITH EDUCATION", image: rectangle58 },
  { title: "HELP WITH FOOD", image: rectangle57 },
];

export const Homepage = () => {
  return (
    <main className={styles.main}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <img src={heroImage} alt="Hero background" className={styles.heroBg} />
        <div className={styles.heroOverlay} />

        <Navbar />

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroHeading}>
              The Active Foundation Trust revolves around the fact that{" "}
              <span className={styles.heroAccent}>"One Block Can Change A Nation"</span>
            </h1>
            <a href="#donate" className={styles.donateBtn}>DONATE</a>
          </div>
        </div>
      </section>

      {/* ── Programs ── */}
      <section id="projects" className={styles.programs}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>OUR PROGRAM</h2>
          <div className={styles.programGrid}>
            {programCards.map((card) => (
              <div key={card.title} className={styles.programCard}>
                <img src={card.image} alt={`Program: ${card.title}`} className={styles.programImg} />
                <div className={styles.programOverlay} />
                <span className={styles.programLabel}>{card.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Donation ── */}
      <section className={styles.donationSection}>
        {/* Values bar */}
        <div className={styles.valuesBar}>
          <div className={styles.container}>
            <div className={styles.valuesRow}>
              {values.map((item, index) => (
                <React.Fragment key={item}>
                  <span className={styles.valueItem}>{item}</span>
                  {index < values.length - 1 && (
                    <span className={styles.valueDot}>•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Donation cards */}
        <div className={styles.donationBg}>
          <div className={styles.container}>
            <div className={styles.donationHeader}>
              <h2 className={styles.sectionTitle}>START DONATING</h2>
              <p className={styles.donationSubtitle}>Be the reason someone smiles today!</p>
            </div>

            <div className={styles.carouselRow}>
              <button className={styles.arrowBtn} aria-label="Previous donation card">&#8249;</button>

              <div className={styles.donationGrid}>
                {donationCards.map((card) => (
                  <div key={card.title} className={styles.donationCard}>
                    <img src={card.image} alt={`Donation: ${card.title}`} className={styles.donationCardImg} />
                    <div className={styles.donationCardBody}>
                      <p className={styles.donationCardTitle}>{card.title}</p>
                      <button className={styles.donateNowBtn}>Donate Now</button>
                    </div>
                  </div>
                ))}
              </div>

              <button className={styles.arrowBtn} aria-label="Next donation card">&#8250;</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>ABOUT THE ACTIVE FOUNDATION TRUST</h2>
          <div className={styles.aboutContent}>
            <p className={styles.aboutWho}>Who We Are: The Active Foundation Trust</p>
            <p className={styles.aboutPoint}>
              <strong>• Our Belief</strong>: We believe that improving one city block can inspire an entire nation to change for the better.
            </p>
            <p className={styles.aboutPoint}>
              <strong>• Our Goal</strong>: To transform neglected, unhealthy areas into clean, safe, and thriving communities.
            </p>
            <p className={styles.aboutPoint}>
              <strong>• Our Method</strong>: We help residents clean up their own neighborhoods, creating an environment where people can live well and businesses can grow. We teach skills and provide support, not just handouts.
            </p>
            <p className={styles.aboutPoint}>
              <strong>• Our Proof</strong>: We&apos;ve already begun our work in Selby, Johannesburg, by cleaning up Loveday Street and building new sidewalks.
            </p>
            <p className={styles.aboutPoint}>
              Join us in proving that one block can truly change a nation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Volunteer ── */}
      <section className={styles.volunteer}>
        <div className={styles.container}>
          <div className={styles.volunteerCard}>
            <img src={rectangle52} alt="Become a Volunteer" className={styles.volunteerImg} />
            <div className={styles.volunteerOverlay} />
            <div className={styles.volunteerContent}>
              <div className={styles.volunteerText}>
                <h2 className={styles.volunteerHeading}>Become a Volunteer</h2>
                <p className={styles.volunteerBody}>
                  Join our team and help us change our community, one block at a time! Volunteers are the heart of our work. By giving just a little of your time, you can make a big difference in your neighborhood.
                </p>
              </div>
              <button className={styles.applyBtn}>APPLY NOW</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Homepage;