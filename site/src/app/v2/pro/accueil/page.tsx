import PresentationTile from './components/PresentationTile';
import { presentationTiles } from './page.messages';
import styles from './styles.module.scss';
import SocialMediaPanel from '../../../components/social-media-panel/SocialMediaPanel';
import cn from 'classnames';
import PageHeader from '@/components/PageHeader/PageHeader';
import mainImage from '@/images/pro/homepage/main.png';
import secondaryImage from '@/images/pro/homepage/secondary.png';
import { Card } from '@codegouvfr/react-dsfr/Card';
import Button from '@codegouvfr/react-dsfr/Button';

export default function Accueil() {
  return (
    <div className={styles['root']}>
      <PageHeader
        title={
          <>
            L&apos;État et le mouvement sportif se mobilisent
            <span className={styles['page-header__title-block']}>pour vous accompagner</span>
          </>
        }
        classes={{
          container: styles['page-header'],
        }}
      />

      <main className={styles['main-wrapper']}>
        <Card
          className={styles['main-card__highlight']}
          classes={{
            desc: styles['main-card__desc'],
            title: styles['main-card__title'],
            header: styles['main-card__header'],
            content: styles['main-card__content'],
            end: styles['main-card__end'],
          }}
          title="Clubs et structures sportives"
          imageUrl={mainImage.src}
          imageAlt="Image principale pour la promotion du pass Sport aux clubs et structures sportives"
          horizontal
          border={false}
          desc={
            <>
              <span>
                Grâce au pass Sport contribuez à accueillir encore plus de jeunes dans vos clubs et
                offrez leur la possibilité de bénéficier d&apos;une aide à la pratique sportive par
                une déduction de 50 € à l&apos;inscription qui vous sera intégralement remboursée
                par l&apos;Etat.
              </span>

              <Button
                priority="primary"
                className="fr-mt-4w"
                size="large"
                linkProps={{
                  href: 'https://vimeo.com/949861035?share=copy',
                  title: "Lien vers une vidéo expliquant comment s'inscrire au Compte Asso",
                  target: '_blank',
                }}
              >
                S&apos;inscrire au Compte Asso
              </Button>
            </>
          }
        />

        <section className={cn('fr-container', 'fr-px-0')}>
          <div className="fr-grid-row fr-grid-row--gutters">
            {presentationTiles.map((tile) => (
              <div key={tile.id} className="fr-col-12 fr-col-lg-4">
                <PresentationTile {...tile} />
              </div>
            ))}
          </div>
        </section>

        <Card
          className={styles['secondary-card']}
          classes={{
            desc: styles['secondary-card__desc'],
            title: styles['secondary-card__title'],
            header: styles['secondary-card__header'],
            content: styles['secondary-card__content'],
            end: styles['secondary-card__end'],
          }}
          title="Faire la promotion du pass Sport"
          titleAs="h4"
          imageUrl={secondaryImage.src}
          imageAlt="Image secondaire pour faire la promotion du pass Sport"
          border={false}
          horizontal
          desc={
            <>
              <span className="fr-text--md">
                Grâce au pass Sport contribuez à accueillir encore plus de jeunes dans vos clubs et
                offrez leur la possibilité de bénéficier d&apos;une aide à la pratique sportive par
                une déduction de 50 € à l&apos;inscription qui vous sera intégralement remboursée
                par l&apos;Etat.
              </span>

              <Button
                priority="secondary"
                size="large"
                className="fr-btn"
                iconId="fr-icon-arrow-right-line"
                iconPosition="right"
                linkProps={{
                  href: '/v2/pro/ressources',
                  title: 'Lien vers la page des ressources',
                }}
              >
                Ressources
              </Button>
            </>
          }
        />
      </main>

      <section>
        <SocialMediaPanel isHomePage isProVersion />
      </section>
    </div>
  );
}
