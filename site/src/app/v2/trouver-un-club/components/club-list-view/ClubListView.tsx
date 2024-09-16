import { SportGouvJSONRecordsResponse } from 'types/Club';
import styles from './styles.module.scss';
import cn from 'classnames';
import Card from '@codegouvfr/react-dsfr/Card';
import Button from '@codegouvfr/react-dsfr/Button';
import { usePathname } from 'next/navigation';
import ClubTags from '../club-tags/ClubTags';
import rootStyles from '@/app/utilities.module.scss';

interface Props {
  clubs: SportGouvJSONRecordsResponse;
  onSeeMoreClubsClicked: () => void;
}
const ClubListView = ({ clubs, onSeeMoreClubsClicked }: Props) => {
  const pathname = usePathname();
  const isLastPage = clubs.total_count === clubs.results.length;

  return (
    <>
      <div className={cn('fr-mx-auto')}>
        <ul className={cn(styles.container, rootStyles['list--lean'])} id="club-list">
          {clubs.results.map((club) => (
            <li key={club.nom + club.adresse + club.commune} className={styles.item}>
              <Card
                background
                border
                detail={club.adresse ? `${club.adresse}, ${club.com_arm_name}` : club.com_arm_name}
                enlargeLink
                linkProps={{
                  href: `${pathname}/${encodeURIComponent(club.nom)}`,
                }}
                size="medium"
                start={<ClubTags club={club} />}
                title={`${club.nom}`}
                titleAs="h2"
                classes={{ root: styles.card }}
              />
            </li>
          ))}
        </ul>

        {!isLastPage && (
          <div className={cn('fr-mt-9w', styles['more-clubs-wrapper'])}>
            <Button
              priority="primary"
              size="large"
              onClick={onSeeMoreClubsClicked}
              nativeButtonProps={{
                'aria-label':
                  'Voir plus de clubs. La liste des clubs sera augmentée des clubs suivants',
              }}
            >
              Voir plus de clubs
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default ClubListView;
