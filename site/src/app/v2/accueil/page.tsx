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

export default function Accueil() {
  const router = useRouter();
  const pathname = usePathname();

  const eligibilityTestOnClick = () => router.push('/v2/test-eligibilite');
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.hero_background}>
          <div className={styles.hero_background_blue}></div>
        </div>
        <div className={styles.hero_container}>
          <Image
            src="/images/homepage/pass-sport.png"
            width={229}
            height={97}
            alt="logo Pass'sport"
          />

          <h1 className={styles.hero_color}>Testez votre éligibilité</h1>
          <p className={styles.hero_color}>
            50€ pour aider les jeunes à faire du sport entre 6 et 30ans
          </p>
          {/* <EmailForm /> */}
          <div className={styles.hero_container_panel}>
            <Button
              priority="primary"
              size="large"
              iconId="fr-icon-arrow-right-line"
              iconPosition="right"
              onClick={eligibilityTestOnClick}
            >
              Je fais le test
            </Button>
          </div>
        </div>
      </section>

      <section className={`fr-container fr-px-0 ${styles.tiles}`}>
        <div className="fr-grid-row fr-grid-row--gutters">
          {presentationTiles.map((tile) => (
            <div key={tile.id} className="fr-col-12 fr-col-lg-4">
              <PresentationTile {...tile} />
            </div>
          ))}
        </div>
      </section>

      <section className="fr-container">
        <h2>Mieux comprendre le Pass&apos;Sport</h2>
        <div className={`${styles.sizer}`}>
          <Video />
        </div>

        <div className={` ${styles.sizer}`}>
          <Callouts />
        </div>
      </section>

      <NewsletterAndSocialMedia />
    </main>
  );
}
