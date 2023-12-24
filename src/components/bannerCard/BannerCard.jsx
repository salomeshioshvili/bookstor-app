"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import styles from './bannerCard.module.css';
import { EffectCards } from 'swiper/modules';


function BannerCard() {
  return (
    <div className={styles.swiperContainer}>
      <Swiper effect="cards" grabCursor={true} modules={[EffectCards]} className={styles.mySwiper}>
        {[...Array(9)].map((_, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            Slide {index + 1}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerCard;
