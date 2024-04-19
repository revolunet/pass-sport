'use client';

import PageHeader from '@/components/PageHeader/PageHeader';
import styles from './styles.module.scss';
import About from './components/about';
import ObtainPassPort from './components/obtain-pass-sport';
import HowToUsePassSport from './components/how-to-use-pass-sport';
import WhereToUsePassSport from './components/where-to-use-pass-sport';
import LegalTextReference from './components/legal-text-reference';

export default function ToutSavoirSurLePassSport() {
  return (
    <div className={styles.container}>
      <PageHeader title="Tout savoir sur le Pass Sport" subtitle="" />

      <About />

      <div className={styles['section-container']}>
        <ObtainPassPort />
        <HowToUsePassSport />
        <WhereToUsePassSport />
        <LegalTextReference />
      </div>
    </div>
  );
}
