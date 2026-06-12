import React from 'react';
import styles from './Hero.module.css';
import kokerImg from '../../assets/images1.jpg'; 

export default function Hero() {
  return (
    <header className={styles.heroWrapper}>
      {/* Fullscreen Background Image */}
      <img src={kokerImg} alt="Koker Background" className={styles.backgroundImage} />
      
      {/* Dark Overlay for readability */}
      <div className={styles.overlay}></div>
      
      {/* Foreground Content */}
      <div className={styles.container}>
        <div className={styles.contentSide}>
          <span className={styles.badge}>Authentic & Fresh</span>
          <h1 className={styles.mainTitle}>
            KOKER: Your <br />
            <span className={styles.highlight}>Daily Dose of Golden Joy</span>
          </h1>
          <p className={styles.description}>
            Discover the artisanal taste of authentic, freshly fried golden pastries. 
            Made to order for that perfect, satisfying crunch.
          </p>
          
          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Shop Our Products</button>
            <button className={styles.secondaryBtn}>Our Story</button>
          </div>
        </div>
      </div>
    </header>
  );
}