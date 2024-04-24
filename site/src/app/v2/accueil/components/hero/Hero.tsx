import styles from './styles.module.scss';
import Image from 'next/image';
import runningGirlImage from '@/images/homepage/running-girl.png';
import HeroPanel from '../hero-panel/HeroPanel';

const Hero = () => {
  return (
    <div>
      <div className={`${styles.background}`} />
      <div className={`fr-mx-auto ${styles.container}`}>
        <div className={styles['image-sizer']}>
          <Image src={runningGirlImage} alt="" className={`fr-pr-2w ${styles.image}`} />
        </div>
        <div className={`fr-mx-auto ${styles['panel-sizer']}`}>
          <HeroPanel />
        </div>
        <div className={styles['panel-background']}></div>
      </div>
    </div>
  );
};

export default Hero;
