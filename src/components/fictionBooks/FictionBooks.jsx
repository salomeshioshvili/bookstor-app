"use client";
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { FaCartShopping } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './fictionBooks.module.css';
import { Pagination } from 'swiper/modules';

const FictionBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          'https://openlibrary.org/subjects/fiction.json?limit=50'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        const formattedBooks = data.works?.map(work => ({
          id: work.cover_edition_key,
          title: work.title,
          author: work.authors ? work.authors.map(author => author.name).join(', ') : 'Unknown Author',
          imageURL: `https://covers.openlibrary.org/b/olid/${work.cover_edition_key}-M.jpg`
        }));
        const slicedBooks = formattedBooks.slice(2, 10);
        setBooks(slicedBooks || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Fiction Books
      </h2>

      <div className={styles.cardContainer}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 40 },
            1024: { slidesPerView: 4, spaceBetween: 50 },
          }}
          modules={[Pagination]}
          className={styles.swiperContainer}
        >
          {books.map((book) => (
            <SwiperSlide className={styles.slide} key={book.id}>
                <div className={styles.link}>
                  <div className={styles.bookContainer}>
                  <Link href={"/shop"} ><img src={book.imageURL} alt="" className={styles.bookImage} /> </Link>

                    <div className={styles.cartContainer}>
                      <FaCartShopping  className={styles.cartIcon}/>
                    </div>
                  </div>

                  <div className={styles.textContainer}>
                    <div>
                      <h3 className={styles.bookTitle}>
                        {book.title}
                      </h3>
                      <p className={styles.authorName}>{book.author}</p>
                    </div>
                    <div>
                      <p className={styles.price}>$10.00</p>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FictionBooks;