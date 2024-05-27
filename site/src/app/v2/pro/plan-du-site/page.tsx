import SocialMediaPanel from '@/app/components/social-media-panel/SocialMediaPanel';
import PageHeader from '../../../../../components/PageHeader/PageHeader';
import styles from './style.module.scss';
import Link from 'next/link';

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
      <main className={styles.wrapper}>
        <section className={styles.container}>
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
              <Link href="/v2/pro/trouver-un-club">Trouver une structure partenaire</Link>
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
            <li>
              <Link href="/v2/gestion-des-cookies">Gestion des cookies</Link>
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
