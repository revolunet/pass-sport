import { PresentationTileProps } from './components/PresentationTile';

export const presentationTiles: PresentationTileProps[] = [
  {
    id: 1,
    title: <>Découvrir le pass Sport</>,
    badgeLabel: 'le pass sport',
    link: '/v2/tout-savoir-sur-le-pass-sport#découvrir',
  },
  {
    id: 2,
    title: <>Qui peut en bénéficier ?</>,
    badgeLabel: 'le pass sport',
    link: '/v2/tout-savoir-sur-le-pass-sport#pour-qui',
  },
  {
    id: 3,
    title: (
      <>
        <span className="display--block">Besoin d&apos;aide ?</span>
        <span className="display--block">Une question ?</span>
      </>
    ),
    badgeLabel: 'faq',
    link: '/v2/une-question',
  },
];
