'use client';
import Header from '@codegouvfr/react-dsfr/Header';
import { usePathname } from 'next/navigation';

export default function PSNavigation() {
  const paths: string | null = usePathname();
  const isActive = (path: string) => {
    return !!(paths && paths.includes(path));
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
          title: "Accueil - Nom de l’entité (ministère, secrétariat d'état, gouvernement)",
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
            text: "Tout savoir sur le Pass'Sport",
            menuLinks: [
              {
                linkProps: {
                  href: '#',
                },
                text: 'Lien de navigation',
              },
              {
                linkProps: {
                  href: '#',
                },
                text: 'Lien de navigation',
              },
            ],
          },
          {
            linkProps: {
              href: '/v2/une-question',
              target: '_self',
            },
            text: 'Une questions ?',
          },
          {
            isActive: isActive('/v2/actualites-ressources'),
            linkProps: {
              href: '/v2/actualites-ressources',
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
