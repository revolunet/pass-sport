'use client';

import { FOOTER_BRAND_TOP } from '@/app/constants/footer-brand-top';
import Header from '@codegouvfr/react-dsfr/Header';
import { usePathname } from 'next/navigation';
import { navigationItemPro } from './navigation';
import styles from './styles.module.scss';

export default function PassSportNavigationPro() {
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
        quickAccessItems={[
          {
            iconId: 'fr-icon-external-link-line',
            text: 'Le Compte Asso',
            linkProps: {
              className: 'fr-btn--icon-right',
              href: 'https://lecompteasso.associations.gouv.fr/',
              'aria-label':
                'Lien externe vers Le Compte Asso https://lecompteasso.associations.gouv.fr/',
            },
          },
          {
            text: 'Je suis un particulier',
            iconId: 'fr-icon-arrow-right-line',
            linkProps: {
              href: '/v2/accueil',
              'aria-label': `Visiter la page d'accueil dédiée aux particuliers`,
              className: 'fr-btn--tertiary fr-btn--icon-right',
            },
          },
        ]}
        homeLinkProps={{
          href: '/v2/pro/accueil',
          title: ``,
          'aria-label': `Visiter la page d'accueil du pass Sport`,
        }}
        navigation={navigationItemPro.map((item) => ({
          isActive: isActive(item.link),
          linkProps: {
            href: item.link,
            target: !!item.isExternal ? '_blank' : '_self',
            ariaLabel: item.ariaLabel,
            ...(item.title && { title: item.title }),
          },
          text: item.text,
        }))}
      />
    </div>
  );
}
