'use client';

import Button from '@codegouvfr/react-dsfr/Button';
import Image from 'next/image';
import PresentationTile from './components/PresentationTile';
import { presentationTiles } from './page.messages';
import styles from './styles.module.scss';
import Callouts from './components/callout/Callout';
import NewsletterAndSocialMedia from './components/newsletter-and-social-media/NewsletterAndSocialMedia';
import Video from './components/video/Video';
import { usePathname, useRouter } from 'next/navigation';
import FindClubCard from './components/find-club-card/FindClubCard';
import Hero from './components/hero/Hero';

export default function Accueil() {
  const router = useRouter();
  const pathname = usePathname();

  const eligibilityTestOnClick = () => router.push('/v2/test-eligibilite');
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Hero />
      </section>

      <div className={`fr-px-2w ${styles['blue-background']}`}>
        <section className={`fr-container fr-px-0 ${styles.tiles}`}>
          <div className="fr-grid-row fr-grid-row--gutters">
            {presentationTiles.map((tile) => (
              <div key={tile.id} className="fr-col-12 fr-col-lg-4">
                <PresentationTile {...tile} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <FindClubCard />

      {/* <section className="fr-container">
        <h2>Mieux comprendre le Pass&apos;Sport</h2>
        <div className={`${styles.sizer}`}>
          <Video />
        </div>

        <div className={` ${styles.sizer}`}>
          <Callouts />
        </div>
      </section> */}
      {/* <NewsletterAndSocialMedia /> */}
    </main>
  );
}
