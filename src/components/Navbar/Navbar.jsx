import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>KOKER</div>
        <div className={styles.links}>
          <a href="#menu" className={styles.link}>Our Menu</a>
          <a href="#features" className={styles.link}>Why Us</a>
          <a href="#contact" className={styles.link}>Contact</a>
        </div>
        <button className={styles.ctaButton}>Order Online</button>
      </div>
    </nav>
  );
}