import React from 'react';
import styles from './page.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.header}>
        <h3 className={styles.centeredText}>Welcome to Our Colorful Bookstore</h3>
      </div>

      <div className={styles.content}>
        <div className={styles.leftContent}>
          <h2>Our Bookstore</h2>
          <p>
            In the heart of our community lies a vibrant bookstore, a haven for book enthusiasts of all ages. We curate a diverse collection of books, from timeless classics to contemporary masterpieces, inviting readers on a journey through captivating narratives and thought-provoking tales.
          </p>
          <p>
            Our shelves are a reflection of our commitment to fostering a love for reading, where each book holds the promise of discovery and adventure.
          </p>
          <p>
            At our core, we believe in the power of stories to inspire, educate, and unite individuals, transcending boundaries and connecting people from all walks of life.
          </p>
        </div>

        <div className={styles.rightContent}>
          <img src="/22565.jpg" alt="Bookstore" />
        </div>
      </div>

      <div className={styles.directorQuote}>
        <h2>What Our Director, Salome, Says</h2>
        <p>"Books have the extraordinary ability to transform lives. Here at our bookstore, we aim to create an immersive experience where every visitor feels the magic within the pages. Our goal is to foster a community where the love for literature thrives."</p>
      </div>

      <div className={styles.mission}>
        <h2>Our Mission</h2>
        <p>
          At our bookstore, our mission is clear: to be a beacon of literary exploration, a space where stories come to life and minds are enriched. We are committed to promoting literacy, celebrating diversity in literature, and nurturing a culture where every individual finds their unique story.
        </p>
      </div>
    </div>
  );
};

export default About;