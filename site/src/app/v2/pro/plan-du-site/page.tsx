import SocialMediaPanel from '@/app/components/social-media-panel/SocialMediaPanel';
import PageHeader from '../../../../../components/PageHeader/PageHeader';
import styles from './style.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { SKIP_LINKS_ID } from '@/app/constants/skip-links';

export default function PlanDuSite() {
  return (
    <div>
      <PageHeader
        title="Plan du site"
        subtitle=""
        isProVersion
        classes={{
          container: styles['page-header'],
        }}
      />
      <main className={styles.wrapper} tabIndex={-1} id={SKIP_LINKS_ID.mainContent} role="main">
        <section
          className={cn('fr-py-4w', 'fr-px-2w', 'fr-px-md-13w', 'fr-m-auto', styles.container)}
        >
          <ul>
            <li>
              <Link href="/v2/pro/accueil">Accueil</Link>
            </li>
            <li>
              <Link href="/v2/pro/tout-savoir-sur-le-pass-sport">
                Tout savoir sur le pass Sport
              </Link>
            </li>

            <li>
              <Link href="/v2/pro/trouver-un-club">Carte des structures partenaires</Link>
            </li>
            <li>
              <Link href="/v2/pro/une-question">Une question ?</Link>
            </li>
            <li>
              <Link
                href="https://lecompteasso.associations.gouv.fr/carto/dashboard"
                target="_blank"
              >
                Tableau de bord
              </Link>
            </li>
            <li>
              <Link href="/v2/mentions-legales">Mentions légales</Link>
            </li>
            <li>
              <Link href="/v2/politique-de-confidentialite">Données personnelles</Link>
            </li>
          </ul>

          <p className="fr-mb-1w">
            <Link target="_blank" href="https://lecompteasso.associations.gouv.fr/">
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
    </div>
  );
}
