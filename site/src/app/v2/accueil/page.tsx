'use client';

import Button from '@codegouvfr/react-dsfr/Button';
import Image from 'next/image';
import PresentationTile from './components/PresentationTile';
import { presentationTiles } from './page.messages';
import styles from './styles.module.scss';
import Callouts from './components/callout/Callout';
import SocialMediaPanel from './components/social-media-panel/SocialMediaPanel';
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
        <section className="fr-pt-8w">
          <FindClubCard />
        </section>
        <section className={`fr-mx-auto fr-pb-2w ${styles['video-section']}`}>
          <h4 className={`fr-pt-10w ${styles.title}`}>Mieux comprendre le Pass&apos;Sport</h4>
          {/* <div className="fr-mx-auto"> */}
          <Video />
          {/* </div> */}
        </section>
      </div>
      <div className={`fr-hidden fr-unhidden-md fr-pt-5w fr-pb-4w ${styles.lines}`}>
        <div className={styles.image} />
      </div>

      <section className={`fr-px-5w ${styles['callout-section']}`}>
        <div className={`fr-mx-auto ${styles.sizer}`}>
          <Callouts />
        </div>
      </section>
      <section>
        <SocialMediaPanel />
      </section>
    </main>
  );
}
