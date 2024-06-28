'use client';

import { FOOTER_BRAND_TOP } from '@/app/constants/footer-brand-top';
import Header from '@codegouvfr/react-dsfr/Header';
import { usePathname } from 'next/navigation';
import { navigationItemStandard } from './navigation';
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
        classes={{
          service: styles.service,
        }}
        brandTop={FOOTER_BRAND_TOP}
        operatorLogo={{
          alt: `Logo du pass Sport`,
          imgUrl: '/images/pass-sport-logo.svg',
          orientation: 'vertical',
        }}
        serviceTitle="pass Sport"
        serviceTagline="50 euros pour aider les 6-30 ans à faire du sport"
        quickAccessItems={[
          {
            text: 'Je suis une structure partenaire',
            iconId: 'fr-icon-arrow-right-line',
            linkProps: {
              href: '/v2/pro/accueil',
              'aria-label': 'Visiter le site dédié aux structures partenaires',
              className: 'fr-btn--tertiary fr-btn--icon-right',
            },
          },
        ]}
        homeLinkProps={{
          href: '/v2/accueil',
          title: '',
          'aria-label': `Retourner sur la page d'accueil du pass Sport`,
        }}
        navigation={navigationItemStandard.map((item) => ({
          isActive: isActive(item.link),
          linkProps: {
            href: item.link,
            target: !!item.isExternal ? '_blank' : '_self',
            'aria-label': item.ariaLabel,
            ...(item.title && { title: item.title }),
          },
          text: item.text,
        }))}
      />
    </div>
  );
}
