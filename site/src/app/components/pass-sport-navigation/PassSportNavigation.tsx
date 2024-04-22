'use client';
import { FOOTER_BRAND_TOP } from '@/app/constants/footer-brand-top';
import Header from '@codegouvfr/react-dsfr/Header';
import { usePathname } from 'next/navigation';

export default function PassSportNavigation() {
  const paths: string | null = usePathname();
  const isActive = (path: string) => {
    return !!(paths && paths.includes(path));
  };

  return (
    <div>
      <Header
        brandTop={FOOTER_BRAND_TOP}
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
            text: 'Accueil',
          },
          {
            isActive: isActive('/v2/tout-savoir-sur-le-pass-sport'),
            text: 'Tout savoir sur le Pass Sport',
            linkProps: {
              href: '/v2/tout-savoir-sur-le-pass-sport',
            },
          },
          {
            linkProps: {
              href: '/v2/une-question',
              target: '_self',
            },
            text: 'Une question ?',
          },
          {
            isActive: isActive('/v2/trouver-un-club'),
            linkProps: {
              href: '/v2/trouver-un-club',
              target: '_self',
            },
            text: 'Trouver un club',
          },
        ]}
      />
    </div>
  );
}
