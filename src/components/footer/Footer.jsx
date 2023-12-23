import React from 'react';
import styles from './footer.module.css';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  const sections = [
    { title: 'Bookstore', links: ['About', 'Careers', 'Shop', 'Blog'] },
    { title: 'Help Center', links: ['Discord Server', 'Twitter', 'Facebook', 'Contact Us'] },
  ];

  const footerSections = sections.map((section, index) => (
    <div key={index}>
      <h4>{section.title}</h4>
      <ul>
        {section.links.map((link, idx) => (
          <menu key={idx}>
            <a>{link}</a>
          </menu>
        ))}
      </ul>
    </div>
  ));

  return (
    <div className={styles.footercontainer}>
      <div className={styles.gridcontainer}>{footerSections}</div>
      <div className={styles.footerbottom}>
        <span style={{ color: '#d4d4d4' }}>
          &copy; Salome's bookstore {new Date().getFullYear()}
        </span>
        <div className={styles.socialicons}>
          <a href="https://www.facebook.com/"><BsFacebook /></a>
          <a href="https://www.instagram.com/"><BsInstagram /></a>
          <a href="https://twitter.com/"><BsTwitter /></a>
          <a href="https://github.com/"><BsGithub /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

