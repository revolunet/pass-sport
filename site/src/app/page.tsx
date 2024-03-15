import EmailForm from '../components/homepage/EmailForm';
import passSportImage from '@/images/homepage/pass-sport.png';
import Image from 'next/image';
import { presentationPanels } from './page.messages';
import PresentationTile from '../components/homepage/PresentationTile';
import Video from '../components/homepage/Video';
import Callouts from '../components/homepage/Callouts';
import News from '../components/homepage/News';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.hero_background}>
          <div className={styles.hero_background_blue}></div>
        </div>
        <div className={styles.hero_container}>
          <Image src={passSportImage} alt="" />

          <h1 className={styles.hero_color}>Testez votre éligibilité</h1>
          <p className={styles.hero_color}>
            50€ pour aider les jeunes à faire du sport entre 6 et 30ans
          </p>
          <EmailForm />
        </div>
      </section>

      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--gutters">
          {presentationPanels.map((panel) => (
            <div className="fr-col-12 fr-col-lg-3">
              <PresentationTile {...panel} />
            </div>
          ))}
        </div>
        <h2>Mieux comprendre le Pass'Sport</h2>
        <Video />
        <Callouts />
        <News />
      </div>
    </main>
  );
}
