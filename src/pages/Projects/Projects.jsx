import React from 'react';
import styles from './Projects.module.css';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

/**
 * NOTE: Images are referenced as strings assuming they are served
 * from the public directory or your assets folder structure.
 * In a standard Vite setup, images in 'src/assets/images' should be imported.
 */

const Projects = () => {
  const projects = [
    { id: 2, image: '/src/assets/images/2.jpg.png' },
    { id: 3, image: '/src/assets/images/3.jpg.png' },
    { id: 4, image: '/src/assets/images/4.jpg.png' },
    { id: 5, image: '/src/assets/images/5.jpg.png' },
    { id: 6, image: '/src/assets/images/6.jpg.png' },
    { id: 7, image: '/src/assets/images/7.jpg.png' },
    { id: 9, image: '/src/assets/images/9.jpg.png' },
    { id: 10, image: '/src/assets/images/10.jpg.png' },
    { id: 11, image: '/src/assets/images/11.jpg.png' },
    { id: 12, image: '/src/assets/images/12.jpg.png' },
    { id: 13, image: '/src/assets/images/13.jpg.png' },
    { id: 14, image: '/src/assets/images/14.jpg.png' },
    { id: 15, image: '/src/assets/images/15.jpg.png' },
    { id: 16, image: '/src/assets/images/16.jpg.png' },
  ];

  // Using string paths for backgrounds as well
  const heroImg = '/src/assets/images/projectbanner.png';
  const volunteerBgImg = '/src/assets/images/volunteer image.png';

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section 
        className={styles.hero} 
        style={{ backgroundImage: `url("${heroImg}")` }}
      >
        <div className={styles.heroNav}>
                  <Navbar />
                </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Work in Action</h1>
        </div>
      </section>

      {/* Projects Grid Section */}
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
          {projects.map((project) => (
            <div key={project.id} className={styles.gridItem}>
              <img 
                src={project.image} 
                alt={`Project ${project.id}`} 
                className={styles.gridImage}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className={styles.quoteSection}>
        <p className={styles.quoteText}>
          These projects are powered by a simple truth: <span className={styles.quoteHighlight}>change is possible when we work together!</span>
        </p>
      </section>

      {/* Volunteer Banner */}
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
            Volunteers are the heart of our work. By giving just a little of your time, you can make a big difference in your neighborhood.
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