import SocialMediaPanel from '@/app/components/social-media-panel/SocialMediaPanel';
import PageHeader from '../../../../components/PageHeader/PageHeader';
import styles from './style.module.scss';
import Link from 'next/link';
import cn from 'classnames';

export default function PlanDuSite() {
  return (
    <div>
      <PageHeader
        title="Plan du site"
        subtitle=""
        classes={{
          container: styles['page-header'],
        }}
      />
      <main className={styles.wrapper}>
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
              <Link href="/v2/trouver-un-club">Trouver une structure partenaire</Link>
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
    </div>
  );
}
