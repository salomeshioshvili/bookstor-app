import styles from './banner.module.css';
import BannerCard from '@/components/bannerCard/BannerCard';

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        {/* Left side */}
        <div className={styles.bannerLeft}>
          <h1 className={styles.bannerTitle}>
            Buy and sell your books <span className={styles.bannerHighlight}>for the best prices</span>
          </h1>
          <p className={styles.bannerText}>
            Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.
          </p>
          <div className={styles.bannerSearch}>
            <input type="search" placeholder='Search a book here' className={styles.bannerInput} />
            <button className={styles.bannerButton}>Search</button>
          </div>
        </div>
        {/* Right side */}
        <div className={styles.bannerRight}>
           <BannerCard/>
        </div>
      </div>
    </div>

  );
};

export default Banner;