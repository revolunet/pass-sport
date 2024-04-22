import Highlight from '@codegouvfr/react-dsfr/Highlight';
import styles from '../styles.module.scss';

export default function About() {
  return (
    <section className={styles['about-container']}>
      <div className={styles['about-container__highlight']}>
        <div>
          <img
            src="/images/tout-savoir-sur-le-pass-sport/about.png"
            alt="Pass'sport"
            className={styles['about-container__highlight-image']}
          />
        </div>

        <div>
          <h3 className={styles['about-container__highlight-title']}>
            Qu&apos;est-ce que le Pass Sport
          </h3>

          <Highlight size="sm">
            <span>
              Le Pass sport est une aide de 50 euros qui permet de financer une partie de la licence
              ou de l&apos;abonnement sportif à plus de 6,5 millions de jeunes. Il est valable dans
              plus de 55 000 clubs et salles de sport partenaires (lien carte).
            </span>
            <br />
            <br />
            <span>
              Le dispositif est porté par l&apos;État et déployé par le ministère des Sports et des
              Jeux Olympiques et Paralympiques et permet de soutenir la pratique sportive de jeunes
              pendant l&apos;année sportive.
            </span>
          </Highlight>
        </div>
      </div>
    </section>
  );
}
