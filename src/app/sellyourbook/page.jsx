import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

function Sell() {
  return (
    <div className={styles.sellContainer}>
      <h1 className={styles.sellTitle}>Ready to Sell Your Book?</h1>
      <p className={styles.sellDescription}>
        Reach thousands of readers! Sell your book on our platform.
      </p>
      <Link href="/dashboard">
        <button className={styles.sellButton}>Log in to Your Account</button>
      </Link>
    </div>
  );
}

export default Sell;
