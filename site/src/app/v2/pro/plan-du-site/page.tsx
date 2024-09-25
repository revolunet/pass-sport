import SocialMediaPanel from '@/app/components/social-media-panel/SocialMediaPanel';
import PageTitle from '../../../../../components/PageTitle/PageTitle';
import styles from './style.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { SKIP_LINKS_ID } from '@/app/constants/skip-links';

export default function PlanDuSite() {
  return (
    <>
      <main className={styles.wrapper} tabIndex={-1} id={SKIP_LINKS_ID.mainContent} role="main">
        <PageTitle
          title="Plan du site"
          subtitle=""
          isProVersion
          classes={{
            container: styles['page-header'],
          }}
        />
        <section
          className={cn('fr-py-4w', 'fr-px-2w', 'fr-px-md-13w', 'fr-m-auto', styles.container)}
        >
          <ul>
            <li>
              <Link href="/v2/pro/accueil" aria-label={"Retourner à la page d'accueil"}>
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/v2/pro/tout-savoir-sur-le-pass-sport"
                aria-label="Visiter la page pour connaître toutes les informations sur le pass Sport"
              >
                Tout savoir sur le pass Sport
              </Link>
            </li>

            <li>
              <Link
                href="/v2/pro/trouver-un-club"
                aria-label="Visiter la page sur la carte des structures partenaires"
              >
                Carte des structures partenaires
              </Link>
            </li>
            <li>
              <Link href="/v2/pro/une-question" aria-label="Visiter la page de foire aux questions">
                Une question ?
              </Link>
            </li>
            <li>
              <Link
                href="https://lecompteasso.associations.gouv.fr/carto/dashboard"
                target="_blank"
                aria-label="Ouvrir une nouvelle fenêtre vers le tableau de bord de pass Sport"
              >
                Tableau de bord
              </Link>
            </li>
            <li>
              <Link href="/v2/mentions-legales" aria-label="Visiter la page des mentions légales">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                href="/v2/politique-de-confidentialite"
                aria-label="Visiter la page des données personnelles"
              >
                Données personnelles
              </Link>
            </li>
          </ul>

          <p className="fr-mb-1w">
            <Link
              target="_blank"
              href="https://lecompteasso.associations.gouv.fr/"
              aria-label="Ouvrir une nouvelle fenêtre vers Le Compte Asso"
            >
              Le Compte Asso
            </Link>
          </p>

          <p>
            <Link target="_blank" href="/v2/accueil">
              Site je suis un particulier
            </Link>
          </p>
        </section>
      </main>

      <SocialMediaPanel isProVersion />
    </>
  );
}
