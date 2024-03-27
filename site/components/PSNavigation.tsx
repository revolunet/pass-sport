'use client';
import Header from '@codegouvfr/react-dsfr/Header';
import { usePathname } from 'next/navigation';

export default function PSNavigation() {
  const paths: string = usePathname();
  const isActive = (path: string) => {
    return paths.includes(path);
  };
  return (
    <div>
      <Header
        brandTop={
          <>
            Ministère <br /> des sports <br /> et des jeux Olympiques <br /> et Paralympiques
          </>
        }
        homeLinkProps={{
          href: '/v2/accueil',
          title: 'Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)',
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
            isActive: isActive('/v2/questions'),
            linkProps: {
              href: '/v2/questions',
              target: '_self',
            },
            text: 'Une questions ?',
          },
          {
            isActive: isActive('/v2/actualites'),
            linkProps: {
              href: '/v2/actualites',
              target: '_self',
            },
            text: 'Actualités et ressources',
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
