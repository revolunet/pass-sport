'use client';

import { FOOTER_BRAND_TOP } from '@/app/constants/footer-brand-top';
import Header from '@codegouvfr/react-dsfr/Header';
import { usePathname, useRouter } from 'next/navigation';
import { navigationItemStandard } from './navigation';
import styles from './styles.module.scss';

export default function PassSportNavigation() {
  const paths: string | null = usePathname();
  const router = useRouter();

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
            text: 'Je suis une structure partenaire',
            iconId: 'fr-icon-arrow-right-line',
            buttonProps: {
              onClick: () => {
                router.push('/v2/pro/accueil');
              },
              className: 'fr-btn--tertiary fr-btn--icon-right',
            },
          },
        ]}
        homeLinkProps={{
          href: '/v2/accueil',
          title: "Accueil - Nom de l'entité (ministère, secrétariat d'état, gouvernement)",
        }}
        navigation={navigationItemStandard.map((item) => ({
          isActive: isActive(item.link),
          linkProps: {
            href: item.link,
            target: !!item.isExternal ? '_blank' : '_self',
          },
          text: item.text,
        }))}
      />
    </div>
  );
}
