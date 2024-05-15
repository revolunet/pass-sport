import PageHeader from '@/components/PageHeader/PageHeader';
import styles from './styles.module.scss';
import About from './components/about';
import ObtainPassPort from './components/obtain-pass-sport';
import HowToUsePassSport from './components/how-to-use-pass-sport';
import WhereToUsePassSport from './components/where-to-use-pass-sport';
import LegalTextReference from './components/legal-text-reference';
import EligibilityTestBanner from '../../../../components/eligibility-test-banner/EligibilityTestBanner';
import SocialMediaPanel from '../../components/social-media-panel/SocialMediaPanel';

export default function ToutSavoirSurLePassSport() {
  return (
    <main className={styles.container}>
      <PageHeader title="Tout savoir sur le pass Sport" subtitle="" />

      <About />

      <div className={styles['section-container']}>
        <ObtainPassPort />
        <HowToUsePassSport />
        <WhereToUsePassSport />
        <LegalTextReference />
      </div>

      <EligibilityTestBanner />
      <SocialMediaPanel />
    </main>
  );
}
