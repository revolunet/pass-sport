import SocialMediaPanel from '@/app/components/social-media-panel/SocialMediaPanel';
import PageTitle from '../../../../components/PageTitle/PageTitle';
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
          classes={{
            container: styles['page-header'],
          }}
        />
        <section
          className={cn('fr-py-4w', 'fr-px-2w', 'fr-px-md-13w', 'fr-m-auto', styles.container)}
        >
          <ul>
            <li>
              <Link href="/v2/accueil">Accueil</Link>
            </li>
            <li>
              <Link href="/v2/tout-savoir-sur-le-pass-sport">Tout savoir sur le pass Sport</Link>
            </li>

            <li>
              <Link href="/v2/trouver-un-club">Trouver un club partenaire</Link>
            </li>
            <li>
              <Link href="/v2/une-question">Une question ?</Link>
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

          <Link target="_blank" href="/v2/pro/accueil">
            Site structure partenaire
          </Link>
        </section>
      </main>

      <SocialMediaPanel />
    </>
  );
}
