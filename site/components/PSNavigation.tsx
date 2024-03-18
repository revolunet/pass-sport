import Header from '@codegouvfr/react-dsfr/Header';

export const NAVIGATION_ITEM_MAP: { [key: string]: string } = {
  '/v2/une-question': 'Une question ? ',
};

export default function PSNavigation() {
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
            linkProps: {
              href: '/v2/accueil',
              target: '_self',
            },
            text: 'Accueil',
          },
          {
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
            isActive: true,
            linkProps: {
              href: '/v2/une-question',
              target: '_self',
            },
            text: 'Une questions ?',
          },
          {
            linkProps: {
              href: '/v2/actualites-ressources',
              target: '_self',
            },
            text: 'Actualités et ressources',
          },
        ]}
      />
    </div>
  );
}
