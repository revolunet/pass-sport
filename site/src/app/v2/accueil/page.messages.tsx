import { PresentationTileProps } from './components/PresentationTile';

export const presentationTiles: PresentationTileProps[] = [
  {
    id: 1,
    title: (
      <>
        Découvrir
        <br />
        le pass Sport
      </>
    ),
    badgeLabel: 'le pass sport',
    link: 'http://localhost:3000/v2/tout-savoir-sur-le-pass-sport#découvrir',
  },
  {
    id: 2,
    title: (
      <>
        Qui peut
        <br />
        en bénéficier ?
      </>
    ),
    badgeLabel: 'le pass sport',
    link: 'http://localhost:3000/v2/tout-savoir-sur-le-pass-sport#pour-qui',
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
    link: '/v2/une-question',
  },
];
