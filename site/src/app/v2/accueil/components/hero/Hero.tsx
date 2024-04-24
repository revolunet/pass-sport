import styles from './styles.module.scss';
import Image from 'next/image';
import runningGirlImage from '@/images/homepage/running-girl.png';
import HeroPanel from '../hero-panel/HeroPanel';
import cn from 'classnames';

const Hero = () => {
  return (
    <div>
      <div className={styles.background} />
      <div className={cn('fr-mx-auto', styles.container)}>
        <div className={styles['image-sizer']}>
          <Image src={runningGirlImage} alt="" className={cn('fr-pr-2w', styles.image)} priority />
        </div>
        <div className={cn('fr-mx-auto', styles['panel-sizer'])}>
          <HeroPanel />
        </div>
        <div className={styles['panel-background']}></div>
      </div>
    </div>
  );
};

export default Hero;
