import Link from 'next/link';
import { ReactElement } from 'react';

export interface PresentationTileProps {
  id: number;
  title: ReactElement;
  badgeLabel: string;
  link: string;
}

const PresentationTile = ({ title, badgeLabel, link }: PresentationTileProps) => {
  return (
    <div>
      <div className="fr-tile fr-enlarge-link ">
        <div className="fr-tile__body">
          <div className="fr-tile__content fr-pb-3w">
            <h3 className="fr-tile__title">
              <Link href={link}>{title}</Link>
            </h3>
          </div>
        </div>
        <div className="fr-tile__header">
          <p className="fr-badge fr-badge--purple-glycine">{badgeLabel}</p>
        </div>
      </div>
    </div>
  );
};

export default PresentationTile;
