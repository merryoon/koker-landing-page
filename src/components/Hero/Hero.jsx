import React from 'react';
import styles from './Hero.module.css';
import kokerImage from '../../assets/images1.jpg'; 

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <span className={styles.badge}>Freshly Fried Daily</span>
          <h1 className={styles.title}>
            Golden, Crunchy, <br />
            <span className={styles.highlight}>Authentic Koker.</span>
          </h1>
          <p className={styles.subtitle}>
            Experience the ultimate Home Made snack. Perfectly crispy on the outside, delightfully fluffy on the inside, and baked just right.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Order Now</button>
            <button className={styles.secondaryBtn}>View Gallery</button>
          </div>
        </div>
        
        <div className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            <img 
              src={kokerImage} 
              alt="Freshly fried golden Koker snacks" 
              className={styles.mainImage} 
            />
          </div>
        </div>
      </div>
    </header>
  );
}