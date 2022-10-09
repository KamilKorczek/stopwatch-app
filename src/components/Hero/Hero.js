import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Stopwatch app</h1>
    </div>
  );
};

export default Hero;