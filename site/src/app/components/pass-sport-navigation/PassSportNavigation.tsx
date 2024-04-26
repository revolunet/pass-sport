'use client';
import { FOOTER_BRAND_TOP } from '@/app/constants/footer-brand-top';
import Header from '@codegouvfr/react-dsfr/Header';
import { usePathname } from 'next/navigation';
import { navigationItem } from './navigation';

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
        navigation={navigationItem.map((i) => ({
          isActive: isActive(i.link),
          linkProps: {
            href: i.link,
            target: '_self',
          },
          text: i.text,
        }))}
      />
    </div>
  );
}
