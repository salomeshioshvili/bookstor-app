"use client";
import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import { FaBlog, FaBarsStaggered, FaXmark } from 'react-icons/fa6'; // Assuming FaXmark is imported from 'react-icons/fa6'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'About',
      url: '/about',
    },
    {
      id: 3,
      title: 'Shop',
      url: '/shop',
    },
    {
      id: 4,
      title: 'Sell your book',
      url: '/admin',
    },
    {
      id: 5,
      title: 'Blog',
      url: '/blog',
    },
  ];

  return (
    <div className={styles.header}>
      <div className={`${styles.container} ${isSticky ? styles.sticky : ''}`}>
        <div className={styles.titleContainer}>
          <Link href="/" className={styles.title}>
            <FaBlog className={styles.FaBlog} />Books
          </Link>
          <ul className={styles.navitems}>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.url} className={styles.link}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.buttonContainer}>
            <button onClick={toggleMenu} className={styles.button}>
              {isMenuOpen ? <FaXmark /> : <FaBarsStaggered />}
            </button>
          </div>
        </div>
      </div>
      {/* menu visible on mobile screen */}
      <div className={styles.anotherbutton}>
        <button onClick={toggleMenu} className={styles.menu}>
          {isMenuOpen ? <FaXmark className={styles.menuphone} /> : <FaBarsStaggered className={styles.menuanotherphone} />}
        </button>
      </div>
      <div className={`${styles.menuLinksContainer} ${isMenuOpen ? styles.menuOpen : ''}`}>
        {/* Display links if isMenuOpen is true */}
        <ul className={styles.menuLinks}>
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.url} className={styles.link}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;