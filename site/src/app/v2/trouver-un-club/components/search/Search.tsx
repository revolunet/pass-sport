import { SearchBar } from '@codegouvfr/react-dsfr/SearchBar';
import styles from './styles.module.scss';
import { useState } from 'react';

interface IProps {
  onTextSearch: (text: string) => void;
}

export default function Search({ onTextSearch }: IProps) {
  const [search, onSearchChange] = useState('');

  return (
    <div className={styles.container}>
      <SearchBar
        big
        onButtonClick={onTextSearch}
        label="Rechercher un nom de club"
        allowEmptySearch
        renderInput={({ className, id, placeholder, type }) => (
          <input
            className={className}
            id={id}
            placeholder={placeholder}
            type={type}
            value={search}
            // Note: The default behavior for an input of type 'text' is to clear the input value when the escape key is pressed.
            // However, due to a bug in @gouvfr/dsfr the escape key event is not propagated to the input element.
            // As a result this onChange is not called when the escape key is pressed.
            onChange={(event) => onSearchChange(event.currentTarget.value)}
            // Same goes for the keydown event so this is useless but we hope the bug will be fixed soon.
          />
        )}
      />
    </div>
  );
}
