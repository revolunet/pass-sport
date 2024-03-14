import Button from '@codegouvfr/react-dsfr/Button';
import { Input } from '@codegouvfr/react-dsfr/Input';
import EmailForm from './components/homepage/EmailForm';
import passSportImage from '@/images/homepage/pass-sport.png';
import Image from 'next/image';
import { presentationPanels } from './page.messages';
import PresentationTile from './components/homepage/PresentationTile';
import Video from './components/homepage/Video';

export default function Home() {
  return (
    <main>
      <Image src={passSportImage} alt="" />

      <h1>Testez votre éligibilité</h1>
      <p>50€ pour aider les jeunes à faire du sport entre 6 et 30ans</p>
      <EmailForm />

      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--gutters">
          {presentationPanels.map((panel) => (
            <div className="fr-col-12 fr-col-lg-3">
              <PresentationTile {...panel} />
            </div>
          ))}
        </div>
        <Video />
      </div>

      <h2>Mieux comprendre le Pass'Sport</h2>
    </main>
  );
}
