import cn from 'classnames';
import styles from './styles.module.scss';
import { LIMIT } from 'utils/map';

interface Props {
  displayedClubCount: number;
  totalClubCount: number;
  isPaginating: boolean;
}

const ClubCount: React.FC<Props> = ({ displayedClubCount, totalClubCount, isPaginating }) => {
  const buildContent = () => {
    if (isPaginating) {
      return `${displayedClubCount} ${displayedClubCount > 1 ? 'clubs affichés' : 'club affiché'} sur 
    ${totalClubCount} ${totalClubCount > 1 ? 'clubs référencés' : 'club référencé'}`;
    }

    if (displayedClubCount >= LIMIT) {
      return `Les clubs trouvés sont trop nombreux. Seuls les ${LIMIT} premiers sont affichés. Merci
      d&apos;affiner votre recherche.`;
    }

    return `${displayedClubCount} ${displayedClubCount > 1 ? 'clubs référencés' : 'club référencé'}`;
  };

  return (
    <p
      role="status"
      aria-live="polite"
      aria-atomic={true}
      className={cn('fr-text--lead', 'fr-mb-0', styles.paragraph)}
    >
      {buildContent()}
    </p>
  );
};

export default ClubCount;
