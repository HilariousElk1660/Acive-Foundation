import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import styles from "./Footer.module.css";

const KIDS_IMG = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=80";

const STORAGE_KEY = "af_subscribed_emails";

const getSubscribedEmails = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
};

const saveEmail = (email) => {
  const existing = getSubscribedEmails();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, email.toLowerCase()]));
};

const isAlreadySubscribed = (email) => {
  return getSubscribedEmails().includes(email.toLowerCase());
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubscribe = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("invalid");
      return;
    }

    if (isAlreadySubscribed(email)) {
      setStatus("duplicate");
      return;
    }

    setStatus("sending");

    emailjs
      .send(
        "service_qrqtob7",
        "template_9nlzm7t",
        { email },
        "ZLpJZ7CehgqhiGYpW"
      )
      .then(() => {
        saveEmail(email);
        setStatus("success");
        setEmail("");
      })
      .catch(() => {
        setStatus("error");
      });
  };

  const getMessage = () => {
    if (status === "invalid")   return { text: "Please enter a valid email address.",     color: "orange"  };
    if (status === "duplicate") return { text: "This email is already subscribed!",       color: "orange"  };
    if (status === "success")   return { text: "Thanks for subscribing!",                 color: "#90ee90" };
    if (status === "error")     return { text: "Something went wrong. Please try again.", color: "#ff6b6b" };
    return null;
  };

  const message = getMessage();

  return (
    <footer>
      <div className={styles.secondaryHero}>
        <img src={KIDS_IMG} alt="Children in community" />
      </div>

      <div className={styles.newsletterBar}>
        <p>Become a partner in change today</p>
        <div>
          <div className={styles.newsletterForm}>
            <input
              className={styles.newsletterInput}
              type="email"
              placeholder="Type your email here"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              disabled={status === "sending"}
            />
            <button
              className={styles.newsletterBtn}
              type="button"
              onClick={handleSubscribe}
              disabled={status === "sending"}
            >
              {status === "sending" ? "..." : "Subscribe"}
            </button>
          </div>
          {message && (
            <p style={{ color: message.color, fontSize: "0.78rem", marginTop: "6px", textAlign: "right" }}>
              {message.text}
            </p>
          )}
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
            <a href="https://www.instagram.com/theactivefoundationtrust" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="https://www.facebook.com/tonsofloveaf/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f" />
            </a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4>Get Involved</h4>
          <ul>
            <li><Link to="/contact">Volunteer</Link></li>
            <li><Link to="/contact">Partner with us</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Support</h4>
          <ul>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/donate">Corporate Giving</Link></li>
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