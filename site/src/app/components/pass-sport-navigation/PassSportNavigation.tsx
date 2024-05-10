'use client';

import { FOOTER_BRAND_TOP } from '@/app/constants/footer-brand-top';
import Header from '@codegouvfr/react-dsfr/Header';
import { usePathname } from 'next/navigation';
import { navigationItem } from './navigation';
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
        serviceTitle="pass Sport"
        serviceTagline="50 euros pour aider les 6-30 ans à faire du sport"
        homeLinkProps={{
          href: '/v2/accueil',
          title: "Accueil - Nom de l'entité (ministère, secrétariat d'état, gouvernement)",
        }}
        navigation={navigationItem.map((item) => ({
          isActive: isActive(item.link),
          linkProps: {
            href: item.link,
            target: '_self',
          },
          text: item.text,
        }))}
      />
    </div>
  );
}
