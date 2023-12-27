import React from 'react';
import styles from './favoriteBook.module.css'; 
import Link from 'next/link';

const FavoriteBook = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="/favoritebook.jpg" alt="" className={styles.image} />
      </div>
      <div className={styles.textContent}>
        <h2 className={styles.title}>
          Find Your Favorite <span className={styles.highlight}>Book Here!</span>
        </h2>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ut
          pariatur quia. Sint architecto tempore sapiente quibusdam et aliquid
          impedit ullam
        </p>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <h3 className={styles.statValue}>800+</h3>
            <p className={styles.statLabel}>Book Listing</p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.statValue}>550+</h3>
            <p className={styles.statLabel}>Register User</p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.statValue}>1200+</h3>
            <p className={styles.statLabel}>PDF Downloaded</p>
          </div>
        </div>
        <Link href="/shop" className={styles.exploreLink}>
          <button className={styles.exploreButton}>Explore Now</button>
        </Link>
      </div>
    </div>
  );
};

export default FavoriteBook;