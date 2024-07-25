import Highlight from '@codegouvfr/react-dsfr/Highlight';
import styles from '../styles.module.scss';
import Image from 'next/image';
import aboutImage from '@/images/tout-savoir-sur-le-pass-sport/about.png';
import cn from 'classnames';

export default function About() {
  return (
    <>
      <section className={styles['about-container']}>
        <div className={styles['about-container__highlight']}>
          <div>
            <Image src={aboutImage} alt="" className={styles['about-container__highlight-image']} />
          </div>

          <div id="découvrir">
            <h2 className={cn(styles['about-container__highlight-title'], 'fr-h3')}>
              Qu&apos;est-ce que le pass Sport ?
            </h2>

            <Highlight className={styles['about-container__highlight-text']}>
              <span className="fr-mb-3w display--block">
                Le pass Sport est une aide de 50 euros qui permet de financer une partie de
                l&apos;inscription sportive à plus de 6,5 millions de jeunes. Il est valable dans
                plus de 85 000 clubs et salles de sport partenaires.
              </span>

              <span className="fr-mb-3w display--block">
                Le dispositif est porté par l&apos;État et déployé par le ministère des Sports et
                des Jeux Olympiques et Paralympiques et permet de soutenir la pratique sportive de
                jeunes pendant l&apos;année sportive.
              </span>

              <span className="display--block">Il est ouvert du 1er juin au 31 décembre 2024.</span>
            </Highlight>
          </div>
        </div>
      </section>

      <section className={cn(styles['about-sub-container'], 'fr-mx-auto', 'fr-px-2w')}>
        <div
          className={cn(
            styles['about-sub-container__highlight'],
            'fr-mx-auto',
            'fr-grid-row--center',
            'fr-mb-9w',
          )}
        >
          <Highlight
            className={cn(styles['about-sub-container__highlight-text'], 'fr-text--bold')}
            size="lg"
            classes={{
              root: styles['about-sub-container__highlight--override'],
            }}
          >
            <span
              className={cn('fr-icon-quote-line', styles['about-sub-container__icon'])}
              aria-hidden
            />
            <span className="fr-mb-1w display--block">
              Le pass Sport est ouvert du 1er juin au 31 décembre 2024.
            </span>

            <span className="display--block">
              Pensez-bien à présenter votre pass à votre club avant la fin décembre 2024 !
            </span>
          </Highlight>
        </div>
      </section>
    </>
  );
}
