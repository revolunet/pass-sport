import styles from './styles.module.scss';
import Image from 'next/image';
import heroImage from '@/images/homepage/hero.jpg';
import HeroPanel from '../hero-panel/HeroPanel';
import cn from 'classnames';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles['image-wrapper']}>
        <Image src={heroImage} alt="" className={cn(styles.image)} priority />
      </div>

      <div className={styles.container}>
        <div className={styles['cta-positioner-1']} />
        <div className={cn(styles['panel-wrapper'])}>
          <div className={cn(styles['panel-positioner'])}>
            <HeroPanel />
          </div>
        </div>
        <div className={styles['cta-positioner-2']} />
      </div>
    </div>
  );
};

export default Hero;
