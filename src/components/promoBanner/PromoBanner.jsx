import React from 'react';
import styles from './promoBanner.module.css';

const PromoBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="/awardbooks.png" alt="Award Books" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>2023 National Book Awards for Fiction Shortlist</h2>
        <a
        href="https://www.nationalbook.org/2023-national-book-awards-longlist-for-fiction/"
        className={styles.button}>
        Explore
        </a>
      </div>
    </div>
  );
};

export default PromoBanner;