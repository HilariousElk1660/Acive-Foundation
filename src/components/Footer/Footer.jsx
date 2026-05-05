import styles from "./Footer.module.css";

const KIDS_IMG = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=80";

export default function Footer() {
  return (
    <footer>
      <div className={styles.secondaryHero}>
        <img src={KIDS_IMG} alt="Children in community" />
      </div>

      <div className={styles.newsletterBar}>
        <p>Become a partner in change today</p>
        <div className={styles.newsletterForm}>
          <input
            className={styles.newsletterInput}
            type="email"
            placeholder="Type your email here"
          />
          <button className={styles.newsletterBtn} type="button">
            Subscribe
          </button>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerLogo}>
          <span className={styles.logoBrand}>
            <span>Active</span> Foundation
          </span>
          <div className={styles.tagline}>One Block Can Change A Nation</div>
          <div className={styles.socialsLabel}>Check us out on our socials:</div>
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f" />
            </a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4>Get Involved</h4>
          <ul>
            <li>Volunteer</li>
            <li>Partner with us</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Support</h4>
          <ul>
            <li>Donate</li>
            <li>Corporate Giving</li>
          </ul>
        </div>

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
  );
}