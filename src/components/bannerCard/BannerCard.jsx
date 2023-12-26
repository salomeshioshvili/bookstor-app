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
        <SwiperSlide className={styles.swiperSlide} style={{ backgroundImage: "url('/DivineRivals.jpeg')" }}></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} style={{ backgroundImage: "url('/study.jpeg')" }}></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} style={{ backgroundImage: "url('/Once.jpeg')" }}></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} style={{ backgroundImage: "url('/God.jpeg')" }}></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} style={{ backgroundImage: "url('/Sorcery.jpeg')" }}></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} style={{ backgroundImage: "url('/ignite.jpeg')" }}></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BannerCard;