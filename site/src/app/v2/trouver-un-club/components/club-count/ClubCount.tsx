import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
  displayedClubCount: number;
  totalClubCount: number;
}
const ClubCount: React.FC<Props> = ({ displayedClubCount, totalClubCount }) => {
  return (
    <p className={cn('fr-text--lead', styles.paragraph)}>
      {displayedClubCount} {displayedClubCount < 2 ? 'club trouvé' : 'clubs trouvés'} sur{' '}
      {totalClubCount} {totalClubCount < 2 ? 'club référencé' : 'clubs référencés'}
    </p>
  );
};

export default ClubCount;
