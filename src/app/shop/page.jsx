"use client";
import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import styles from './page.module.css'; 

export default function Shop() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    setLoading(true);
    fetch('https://openlibrary.org/subjects/romance.json?limit=96')
      .then(res => res.json())
      .then(data => {
        const bookData = data?.works || [];
        const extractedBooks = bookData.map(book => ({
          id: book?.key,
          title: book?.title,
          imageURL: `http://covers.openlibrary.org/b/id/${book?.cover_id}-L.jpg`, // Construct the image URL
        }));

        setBooks(extractedBooks);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className={styles.Container}>
        <h1 className={styles.LoadingText}>Please wait...</h1>
      </div>
    );
  }

  return (
    <div className={styles.MainContainer}>
      <h2 className={styles.MainHeading}>All Books are Available Here</h2>
      <div className={styles.GridContainer}>
        {books.map(book => (
          <Card className={styles.BookCard} key={book.id}>
            <img src={book?.imageURL} alt="" className={styles.BookImage} /> 
            <h5 className={styles.BookTitle}>{book?.title}</h5>
            <p className={styles.BookDescription}>
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order....
            </p>
            <button className={styles.BuyButton}>Buy Now</button>
          </Card>
        ))}
      </div>
    </div>
  );
}