"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa6';
import styles from './review.module.css'; 

const Review = () => {
   return (
       <div className={styles.container}>
           <h2 className={styles.title}>Our Customers</h2>

           <div className={styles.mySwiper}>
               <Swiper
                   slidesPerView={1}
                   spaceBetween={30}
                   pagination={{
                       clickable: true,
                   }}
                   modules={[Pagination]}
                   breakpoints={{
                       640: {
                           slidesPerView: 1,
                           spaceBetween: 20,
                       },
                       768: {
                           slidesPerView: 2,
                           spaceBetween: 40,
                       },
                       1024: {
                           slidesPerView: 3,
                           spaceBetween: 50,
                       },
                   }}
               >
                   <SwiperSlide className={styles.reviewCard}>
                       <div className={styles.spaceY}>
                           <div className={styles.stars}>
                               <FaStar />
                               <FaStar />
                               <FaStar />
                               <FaStar />
                               <FaStar />
                           </div>

                           <div className={styles.textCon}>
                               <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatibus libero eaque illo voluptate ducimus commodi, eos, quam repellendus, officiis esse cum alias nemo blanditiis dolore quas officia molestiae accusantium!</p>
                               <img src="/profile.jpg" alt="avatar of Jese" className={styles.Avatar} />
                               <h5 className={styles.textLg}>Mark Ping</h5>
                               <p className={styles.textSm}>CEO, ABC Company</p>
                           </div>
                           </div>
               </SwiperSlide>
               <SwiperSlide className={styles.reviewCard}>
                       <div className={styles.spaceY}>
                           <div className={styles.stars}>
                               <FaStar />
                               <FaStar />
                               <FaStar />
                               <FaStar />
                               <FaStar />
                           </div>

                           <div className={styles.textCon}>
                               <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatibus libero eaque illo voluptate ducimus commodi, eos, quam repellendus, officiis esse cum alias nemo blanditiis dolore quas officia molestiae accusantium!</p>
                               <img src="/profile.jpg" alt="avatar of Jese" className={styles.Avatar} />
                               <h5 className={styles.textLg}>Mark Ping</h5>
                               <p className={styles.textSm}>CEO, ABC Company</p>
                           </div>
                           </div>
               </SwiperSlide>
               <SwiperSlide className={styles.reviewCard}>
                       <div className={styles.spaceY}>
                           <div className={styles.stars}>
                               <FaStar />
                               <FaStar />
                               <FaStar />
                               <FaStar />
                               <FaStar />
                           </div>

                           <div className={styles.textCon}>
                               <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatibus libero eaque illo voluptate ducimus commodi, eos, quam repellendus, officiis esse cum alias nemo blanditiis dolore quas officia molestiae accusantium!</p>
                               <img src="/profile.jpg" alt="avatar of Jese" className={styles.Avatar} />
                               <h5 className={styles.textLg}>Mark Ping</h5>
                               <p className={styles.textSm}>CEO, ABC Company</p>
                           </div>
                           </div>
               </SwiperSlide>
               <SwiperSlide className={styles.reviewCard}>
                       <div className={styles.spaceY}>
                           <div className={styles.stars}>
                               <FaStar />
                               <FaStar />
                               <FaStar />
                               <FaStar />
                               <FaStar />
                           </div>

                           <div className={styles.textCon}>
                               <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatibus libero eaque illo voluptate ducimus commodi, eos, quam repellendus, officiis esse cum alias nemo blanditiis dolore quas officia molestiae accusantium!</p>
                               <img src="/profile.jpg" alt="avatar of Jese" className={styles.Avatar} />
                               <h5 className={styles.textLg}>Mark Ping</h5>
                               <p className={styles.textSm}>CEO, ABC Company</p>
                           </div>
                           </div>
               </SwiperSlide>
           </Swiper>
           </div>
            <div className={styles.h20}></div>
       </div>
   )
}

export default Review;