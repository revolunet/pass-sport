'use client';

import { FOOTER_BRAND_TOP } from '@/app/constants/footer-brand-top';
import Header from '@codegouvfr/react-dsfr/Header';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';
export default function PassSportNavigation() {
  const paths: string | null = usePathname();
  const isActive = (path: string) => {
    return !!(paths && paths.includes(path));
  };

  return (
    <div>
      <Header
        className={styles.header}
        brandTop={FOOTER_BRAND_TOP}
        operatorLogo={{
          alt: '',
          imgUrl: '/images/pass-sport-logo.svg',
          orientation: 'vertical',
        }}
        serviceTitle={'pass Sport'}
        serviceTagline="50 euros pour aider les 6-30 ans à faire du sport"
        homeLinkProps={{
          href: '/v2/accueil',
          title: "Accueil - Nom de l'entité (ministère, secrétariat d'état, gouvernement)",
        }}
        navigation={[
          {
            isActive: isActive('/v2/accueil'),
            linkProps: {
              href: '/v2/accueil',
              target: '_self',
            },
            text: (
              <>
                <span className="fr-pr-1w ri-home-line" aria-hidden="true"></span>
                Accueil
              </>
            ),
          },
          {
            isActive: isActive('/v2/tout-savoir-sur-le-pass-sport'),
            text: (
              <div className={styles['menu-item-spacer']}>
                <span aria-hidden="true"></span>
                Tout savoir sur le pass Sport
              </div>
            ),

            linkProps: {
              href: '/v2/tout-savoir-sur-le-pass-sport',
            },
          },
          {
            isActive: isActive('/v2/trouver-un-club'),
            linkProps: {
              href: '/v2/trouver-un-club',
              target: '_self',
            },
            text: 'Trouver un club sportif',
          },
          {
            linkProps: {
              href: '/v2/une-question',
              target: '_self',
            },
            text: 'Une question ?',
          },
        ]}
      />
    </div>
  );
}
