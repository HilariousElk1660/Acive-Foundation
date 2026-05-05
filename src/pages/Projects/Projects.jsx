import React from 'react';
import styles from './Projects.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

// ── Asset imports ──────────────────────────────────────────────────────────────
import heroImg        from '../../assets/images/projectbanner.png';
import volunteerBgImg from '../../assets/images/volunteer image.png';

import img2  from '../../assets/images/2.png';
import img3  from '../../assets/images/3.png';
import img4  from '../../assets/images/4.png';
import img5  from '../../assets/images/5.png';
import img6  from '../../assets/images/6.png';
import img7  from '../../assets/images/7.png';
import img9  from '../../assets/images/9.png';
import img10 from '../../assets/images/10.png';
import img11 from '../../assets/images/11.png';
import img12 from '../../assets/images/12.png';
import img13 from '../../assets/images/13.png';
import img14 from '../../assets/images/14.png';
import img15 from '../../assets/images/15.png';
import img16 from '../../assets/images/16.png';

// ── Constants ──────────────────────────────────────────────────────────────────
const PROJECTS = [
  { id: 2,  image: img2  },
  { id: 3,  image: img3  },
  { id: 4,  image: img4  },
  { id: 5,  image: img5  },
  { id: 6,  image: img6  },
  { id: 7,  image: img7  },
  { id: 9,  image: img9  },
  { id: 10, image: img10 },
  { id: 11, image: img11 },
  { id: 12, image: img12 },
  { id: 13, image: img13 },
  { id: 14, image: img14 },
  { id: 15, image: img15 },
  { id: 16, image: img16 },
];

// ── Component ──────────────────────────────────────────────────────────────────
const Projects = () => {
  return (
    <div className={styles.container}>

      {/* ── Hero ── */}
      <section
        className={styles.hero}
        style={{ backgroundImage: `url("${heroImg}")` }}
      >
        <div className={styles.heroNav}>
          <Navbar />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Work in Action</h1>
        </div>
      </section>

      {/* ── Projects grid ── */}
      <section className={styles.projectsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>OUR PROJECTS</h2>
          <p className={styles.sectionDescription}>
            Behind every statistic is a person, a family, a community with a story. These
            projects are the chapters of that story, the direct result of your support and our
            shared commitment. Explore the tangible ways we are working together to write a
            brighter future.
          </p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map(({ id, image }) => (
            <div key={id} className={styles.gridItem}>
              <img src={image} alt={`Project ${id}`} className={styles.gridImage} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote ── */}
      <section className={styles.quoteSection}>
        <p className={styles.quoteText}>
          These projects are powered by a simple truth:{' '}
          <span className={styles.quoteHighlight}>
            change is possible when we work together!
          </span>
        </p>
      </section>

      {/* ── Volunteer banner ── */}
      <section
        className={styles.volunteerBanner}
        style={{ backgroundImage: `url("${volunteerBgImg}")` }}
      >
        <div className={styles.volunteerContent}>
          <h2 className={styles.volunteerTitle}>Become a Volunteer</h2>
          <p className={styles.volunteerText}>
            Join our team and help us change our community, one block at a time!
          </p>
          <p className={styles.volunteerSubtext}>
            Volunteers are the heart of our work. By giving just a little of your time,
            you can make a big difference in your neighborhood.
          </p>
        </div>
        <div className={styles.volunteerAction}>
          <button className={styles.applyButton}>APPLY NOW</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;