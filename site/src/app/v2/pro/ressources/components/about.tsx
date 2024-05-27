import styles from '../styles.module.scss';
import Image from 'next/image';
import mainLogo from '@/images/pro/ressources/main-logo.svg';

export default function About() {
  return (
    <section className={styles['about-container']}>
      <div className={styles['about-container__highlight']}>
        <div>
          <Image
            src={mainLogo}
            alt="Coup d'envoi pour le pass Sport"
            className={styles['about-container__highlight-image']}
          />
        </div>

        <div id="découvrir">
          <h3 className={styles['about-container__highlight-title']}>
            Faire la promotion du pass Sport
          </h3>

          <div className="fr-highlight fr-ml-0">
            <p>Fédération, collectivité locale, établissement scolaire, journaliste...</p>
            <ul className="fr-pl-3w">
              <li>Parce que vous êtes en proximité de potentiels bénéficiaires,</li>
              <li>Parce que vous êtes au contact d&apos;associations sur votre territoire,</li>
              <li>
                Parce que vous êtes une tête de réseau du secteur social, sanitaire, éducatif ou du
                handicap,
              </li>
              <li>Parce que vous voulez faire la promotion de ce dispositif,</li>
            </ul>

            <p>
              Vous êtes alors pleinement un des relais d&apos;informations potentiels du dispositif
              et vous trouverez ici de nombreuses ressources pour animer vos réseaux ou promouvoir
              le dispositif.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
