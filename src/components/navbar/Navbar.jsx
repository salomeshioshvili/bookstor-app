import React from "react";
import styles from './navbar.module.css'
import Link from "next/link";

function Navbar() {
  const links = [
    {
      id: 1,
      title: "Home",
      url: '/'
    },
    {
      id: 2,
      title: "About",
      url: '/about'
    },
    {
      id: 3,
      title: "Shop",
      url: '/shop'
    },
    {
      id: 4,
      title: "Sell your book",
      url: '/admin/dashboard'
    },
    {
      id: 5,
      title: "Blog",
      url: '/blog'
    },
  ];

  return (
    <div className={styles.container}>
      <div>
        {/*logo*/}
        <Link href="/">Books</Link>
      </div>
      <div className={styles.links}>
        {links.map((link) => (<div>{link.title}</div>))}
      </div>
    </div>
  );
}

export default Navbar;