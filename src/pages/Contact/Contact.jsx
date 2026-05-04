import React from 'react';
import styles from './Contact.module.css';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroNav}>
                          <Navbar />
                        </div>
        <h1 className={styles.heroTitle}>Get In Touch. Make a Difference.</h1>
        <div className={styles.phoneImageContainer}>
          {/* <img 
            src="/src/assets/images/Rectangle 77.png" 
            alt="Vintage Telephone" 
            className={styles.phoneImage}
          /> */}
        </div>
        <div className={styles.socialIcons}>
          <div className={styles.icon}>
            <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </div>
          <div className={styles.icon}>
            <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.mainSection}>
        <div className={styles.leftColumn}>
          <div className={styles.infoGrid}>
            {/* Instagram Card */}
            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              <h3 className={styles.cardTitle}>Instagram</h3>
              <p className={styles.cardValue}>theactivefoundationtrust</p>
            </div>

            {/* Phone Card */}
            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
              </div>
              <h3 className={styles.cardTitle}>Phone</h3>
              <p className={styles.cardValue}>(011) 493 4805</p>
            </div>

            {/* Mail Card */}
            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <h3 className={styles.cardTitle}>Mail</h3>
              <p className={styles.cardValue}>tonsoflove@active<br/>foundation.co.za</p>
            </div>

            {/* Address Card */}
            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <h3 className={styles.cardTitle}>Address</h3>
              <p className={styles.cardValue}>72 Malbourough Road,<br/>Springfield</p>
            </div>
          </div>

          {/* Google Maps Iframe */}
          <div className={styles.mapContainer}>
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.4842523292156!2d28.058348!3d-26.245899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9508dfd7d23d83%3A0x7d8383f5d5e3c75e!2s72%20Marlborough%20Rd%2C%20Springfield%2C%20Johannesburg%2C%202190%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>GET IN TOUCH</h2>
          <p className={styles.formDescription}>
            Whether you have a question about our work, want to volunteer, are seeking support, or are interested in partnership, the Active Foundation team is here to help. Reach out using the form below, and we'll get back to you as soon as possible.
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Name</label>
              <input type="text" placeholder="type your name" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input type="email" placeholder="type your email ,e.g ninaloveschrist@gmail.com" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Subject</label>
              <input type="text" placeholder="title..." className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea placeholder="" className={styles.textarea}></textarea>
            </div>
            <button type="submit" className={styles.sendButton}>SEND NOW</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
