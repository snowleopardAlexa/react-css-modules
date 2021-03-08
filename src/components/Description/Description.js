import React from 'react';
import styles from './styles.module.css';

function Description() {
  return (
    <div className="description">
      <h1 className={styles.title}>Why Mainecoons are so special?</h1>
      <p className={styles.para}>
      The first thing you’ll probably notice is that Maine Coons 
      are big–really big! In fact, the record for the world’s 
      longest house cat belongs to a Maine Coon who grew to be 
      over four feet long.
      </p>
    </div>
  );
}

export default Description;