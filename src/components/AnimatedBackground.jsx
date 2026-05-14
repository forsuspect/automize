import React from 'react';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      <div className={styles.orb3}></div>
      <div className={styles.noiseOverlay}></div>
    </div>
  );
};

export default AnimatedBackground;
