import Tag from '@codegouvfr/react-dsfr/Tag';
import { Club } from 'types/Club';
import styles from './styles.module.scss';

interface Props {
  club: Club;
}
export const DisabilityTag = ({ club }: Props) => {
  const { a_accueil_handicap_mental, a_accueil_handicap_moteur } = club;

  if (a_accueil_handicap_mental && a_accueil_handicap_moteur) {
    return <Tag>Handicap moteur/mental</Tag>;
  }

  if (a_accueil_handicap_mental) {
    return <Tag className={styles['mental-disability']}>Handicap mental</Tag>;
  }

  if (a_accueil_handicap_moteur) {
    return <Tag className={styles['motor-disability']}>Handicap moteur</Tag>;
  }
};
