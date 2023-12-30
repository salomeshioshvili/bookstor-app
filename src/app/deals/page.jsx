import React from 'react';
import styles from './page.module.css';

function Deals() {
  return (
    <div className={styles.dealsContainer}>
      <h1 className={styles.dealsTitle}>Deals</h1>
      <p className={styles.dealsDescription}>
        Check out our latest deals and offers!
      </p>
    </div>
  );
}

export default Deals;