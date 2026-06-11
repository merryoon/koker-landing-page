import React from 'react';
import styles from './Features.module.css';

const featureList = [
  {
    title: 'Always Fresh',
    desc: 'Fried in small batches with premium ingredients so they arrive warm and incredibly crunchy.',
    icon: '🔥'
  },
  {
    title: 'Traditional Recipe',
    desc: 'Passed down through generations, ensuring that genuine homemade taste in every single bite.',
    icon: '✨'
  },
  {
    title: 'Event Catering',
    desc: 'Perfect for breakfast,snack time  and corporate gatherings. We scale to satisfy any crowd.',
    icon: '🎉'
  }
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Made with Love, Served with Pride</h2>
          <p>Discover why our signature golden Koker buns keep everyone coming back for more.</p>
        </div>
        
        <div className={styles.grid}>
          {featureList.map((feat, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feat.icon}</div>
              <h3 className={styles.cardTitle}>{feat.title}</h3>
              <p className={styles.cardDesc}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}