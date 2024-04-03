import { SearchBar } from '@codegouvfr/react-dsfr/SearchBar';
import styles from './styles.module.scss';

interface IProps {
  onTextSearch: (text: string) => void;
}

export default function Search({ onTextSearch }: IProps) {
  return (
    <div className={styles.container}>
      <SearchBar big onButtonClick={onTextSearch} label="Rechercher un nom de club" />
    </div>
  );
}
