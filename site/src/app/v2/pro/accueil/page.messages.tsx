import { PresentationTileProps } from './components/PresentationTile';

export const presentationTiles: PresentationTileProps[] = [
  {
    id: 1,
    title: (
      <>
        Tout savoir sur le
        <br />
        pass Sport
      </>
    ),
    badgeLabel: 'le pass sport',
    link: '/v2/pro/tout-savoir-sur-le-pass-sport',
  },
  {
    id: 2,
    title: (
      <>
        Carte des structures
        <br />
        partenaires
      </>
    ),
    badgeLabel: 'le pass sport',
    link: '/v2/pro/trouver-un-club',
  },
  {
    id: 3,
    title: (
      <>
        Besoin d&apos;aide ?<br />
        Une question ?
      </>
    ),
    badgeLabel: 'faq',
    link: '/v2/pro/une-question',
  },
];
