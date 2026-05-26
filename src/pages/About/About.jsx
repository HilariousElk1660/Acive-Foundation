import React from 'react';
import styles from './About.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const values = ['Relief', 'Unity', 'Kindness', 'Humanity', 'Support'];

const teamMembers = [
  { name: 'Lerato Dlamini', role: 'Executive Director',   image: 'https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=400&auto=format&fit=crop&q=60' },
  { name: 'Sipho Mokoena',  role: 'Outreach Coordinator', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60' },
  { name: 'Ayanda Nkosi',   role: 'Education Lead',       image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=60' },
];

export const AboutUs = () => {
  return (
    <main className={styles.main}>

      <section className={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1200&auto=format&fit=crop&q=60"
          alt="About us hero"
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay} />
        <Navbar />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>THE ACTIVE FOUNDATION TRUST</p>
          <h1 className={styles.heroHeading}>About Us</h1>
          <p className={styles.heroSub}>
            Discover how <span className={styles.heroAccent}>Tons of Love</span> is changing
            communities — one block at a time.
          </p>
        </div>
      </section>

      <section className={styles.introBanner}>
        <div className={styles.container}>
          <h2 className={styles.introHeading}>
            Discover the Active Foundation Trust —<br />
            Where <span className={styles.introAccent}>Love</span> Meets Action
          </h2>
          <p className={styles.introBody}>
            We are a Johannesburg-based non-profit on a mission to prove that a single block,
            cleaned up and cared for, can ignite nationwide change. Through our four programmes —
            Tons of Love, Clothing, Education, and Outreach — we equip communities with the tools
            and dignity they deserve.
          </p>
        </div>
      </section>

      <div className={styles.valuesBar}>
        <div className={styles.container}>
          <div className={styles.valuesRow}>
            <span className={styles.valueItem}>Relief</span>
            <span className={styles.valueDot}>•</span>
            <span className={styles.valueItem}>Unity</span>
            <span className={styles.valueDot}>•</span>
            <span className={styles.valueItem}>Kindness</span>
            <span className={styles.valueDot}>•</span>
            <span className={styles.valueItem}>Humanity</span>
            <span className={styles.valueDot}>•</span>
            <span className={styles.valueItem}>Support</span>
          </div>
        </div>
      </div>

      <section className={styles.story}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>THE TONS OF LOVE JOURNEY</h2>
          <p className={styles.sectionSub}>
            Transforming communities through compassion and action. Explore our story of service,
            solidarity, and lasting impact.
          </p>

          <div className={styles.roadmap}>

            <div className={styles.roadmapRow}>
              <div className={styles.roadmapImgWrap}>
                <img
                  src="https://images.unsplash.com/photo-1526583644846-cd206236cd7d?w=600&auto=format&fit=crop&q=60"
                  alt="Tons of Love community gathering"
                  className={styles.roadmapImg}
                />
              </div>
              <div className={styles.roadmapCard}>
                <span className={styles.roadmapIcon}>🧡</span>
                <h3 className={styles.roadmapTitle}>Who We Are</h3>
                <p className={styles.roadmapBody}>
                  The Active Foundation Trust — Tons of Love is a community-driven non-profit
                  based in Selby, Johannesburg. We believe that improving one city block can
                  inspire an entire nation to change for the better. Through love, unity, and
                  hands-on action, we transform neglected areas into safe, thriving communities.
                </p>
              </div>
            </div>

            <div className={`${styles.roadmapRow} ${styles.roadmapRowReverse}`}>
              <div className={styles.roadmapImgWrap}>
                <img
                  src="https://plus.unsplash.com/premium_photo-1661964155049-f8a24a60be74?w=600&auto=format&fit=crop&q=60"
                  alt="Volunteers cleaning Loveday Street"
                  className={styles.roadmapImg}
                />
              </div>
              <div className={styles.roadmapCard}>
                <span className={styles.roadmapIcon}>🌱</span>
                <h3 className={styles.roadmapTitle}>Our Humble Beginnings</h3>
                <p className={styles.roadmapBody}>
                  What started as a small group of passionate volunteers picking up litter on
                  Loveday Street has grown into a multi-programme movement. We began by simply
                  cleaning up our own neighbourhood — and found that one clean block was enough
                  to spark pride across an entire community.
                </p>
              </div>
            </div>

            <div className={styles.roadmapRow}>
              <div className={styles.roadmapImgWrap}>
                <img
                  src="https://plus.unsplash.com/premium_photo-1770394034525-2aa9baaabd5b?w=600&auto=format&fit=crop&q=60"
                  alt="Children in an education session"
                  className={styles.roadmapImg}
                />
              </div>
              <div className={styles.roadmapCard}>
                <span className={styles.roadmapIcon}>📚</span>
                <h3 className={styles.roadmapTitle}>Education & Empowerment</h3>
                <p className={styles.roadmapBody}>
                  We do not just hand out resources — we teach skills. Our education programme
                  connects learners with tutors, provides school supplies, and opens doors to
                  opportunity for children who would otherwise be left behind. Knowledge, we
                  believe, is the greatest gift you can give a community.
                </p>
              </div>
            </div>

            <div className={`${styles.roadmapRow} ${styles.roadmapRowReverse}`}>
              <div className={styles.roadmapImgWrap}>
                <img
                  src="https://plus.unsplash.com/premium_photo-1661964155049-f8a24a60be74?w=600&auto=format&fit=crop&q=60"
                  alt="Clothing donation drive"
                  className={styles.roadmapImg}
                />
              </div>
              <div className={styles.roadmapCard}>
                <span className={styles.roadmapIcon}>👕</span>
                <h3 className={styles.roadmapTitle}>Clothing & Basic Needs</h3>
                <p className={styles.roadmapBody}>
                  Dignity begins with clean clothes and a warm meal. Our clothing drives collect
                  and redistribute quality items to families in need across Johannesburg. Every
                  donation — no matter how small — becomes a symbol of solidarity and care from
                  one neighbour to another.
                </p>
              </div>
            </div>

            <div className={styles.roadmapRow}>
              <div className={styles.roadmapImgWrap}>
                <img
                  src="https://images.unsplash.com/photo-1542315099045-93937d70c67a?w=600&auto=format&fit=crop&q=60"
                  alt="Outreach team in Selby Johannesburg"
                  className={styles.roadmapImg}
                />
              </div>
              <div className={styles.roadmapCard}>
                <span className={styles.roadmapIcon}>🤝</span>
                <h3 className={styles.roadmapTitle}>Community Outreach</h3>
                <p className={styles.roadmapBody}>
                  Our outreach teams are on the ground every week — building sidewalks,
                  organising clean-up campaigns, and connecting residents with social services.
                  We show up not as outsiders, but as members of the very community we serve.
                  Our goal is lasting change, block by block.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>OUR AWESOME TEAM</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamImgWrap}>
                  <img src={member.image} alt={member.name} className={styles.teamImg} />
                </div>
                <div className={styles.teamInfo}>
                  <p className={styles.teamName}>{member.name}</p>
                  <p className={styles.teamRole}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaHeading}>Join the Movement</h2>
              <p className={styles.ctaBody}>
                Whether you donate, volunteer, or simply spread the word — every action counts.
                Help us prove that one block can truly change a nation.
              </p>
            </div>
            <div className={styles.ctaBtns}>
              <Link to="/donate#donate" className={styles.ctaBtnPrimary}>DONATE NOW</Link>
              <Link to="/contact#get-in-touch" className={styles.ctaBtnSecondary}>VOLUNTEER</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUs;