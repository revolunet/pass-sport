import PresentationTile from './components/PresentationTile';
import { presentationTiles } from './page.messages';
import styles from './styles.module.scss';
import Callouts from './components/callout/Callout';
import SocialMediaPanel from '../../components/social-media-panel/SocialMediaPanel';
import Video from './components/video/Video';
import FindClubCard from './components/find-club-card/FindClubCard';
import Hero from './components/hero/Hero';
import cn from 'classnames';

export default function Accueil() {
  return (
    <main>
      <section>
        <Hero />
      </section>

      <div className={cn('fr-px-2w', 'fr-pt-8w', styles['blue-background'])}>
        <section className={cn('fr-container', 'fr-px-0', styles['tiles-section'])}>
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
        <section className={cn('fr-mx-auto', 'fr-pb-2w', styles['video-section'])}>
          <h4 className={cn(styles.title)}>Mieux comprendre le Pass Sport</h4>
          <Video />
        </section>
      </div>

      <section className={cn('fr-px-5w', styles['callout-section'])}>
        <div className={cn('fr-mx-auto', styles.sizer)}>
          <Callouts />
        </div>
      </section>
      <section>
        <SocialMediaPanel isHomePage />
      </section>
    </main>
  );
}
