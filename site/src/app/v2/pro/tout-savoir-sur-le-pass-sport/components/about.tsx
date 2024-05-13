import Highlight from '@codegouvfr/react-dsfr/Highlight';
import styles from '../styles.module.scss';
import Image from 'next/image';
import aboutImage from '@/images/pro/tout-savoir-sur-le-pass-sport/about.png';

export default function About() {
  return (
    <section className={styles['about-container']}>
      <div className={styles['about-container__highlight']}>
        <div>
          <Image src={aboutImage} alt="" className={styles['about-container__highlight-image']} />
        </div>

        <div id="découvrir">
          <h3 className={styles['about-container__highlight-title']}>
            le Pass Sport en pratique au sein de votre structure d&apos;accueil
          </h3>

          <Highlight className={styles['about-container__highlight-text']}>
            Grâce au dispositif pass Port contribuez à accueillir encore plus de jeunes dans vos
            clubs et offrez leur la possibilité de bénéficier d&apos;une aide à la pratique par une
            déduction de 50 € à l&apos;inscription qui vous sera intégralement remboursée par
            l&apos;Etat.
          </Highlight>
        </div>
      </div>
    </section>
  );
}
