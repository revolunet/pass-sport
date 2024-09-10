import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
  totalClubCount: number;
}

const ClubCount: React.FC<Props> = ({ totalClubCount }) => {
  const buildContent = () => {
    if (totalClubCount > 80000) {
      return 'Parmi plus de 80 000 clubs référencés';
    }

    return (
      <>
        <span>
          {totalClubCount} {totalClubCount === 1 ? 'club' : 'clubs'} près de chez vous
        </span>{' '}
        sur 80 000 clubs référencés
      </>
    );
  };

  return (
    <p role="status" aria-live="polite" aria-atomic={true} className={cn(styles.text)}>
      {buildContent()}
    </p>
  );
};

export default ClubCount;
