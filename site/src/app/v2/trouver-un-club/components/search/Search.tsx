import { SearchBar } from '@codegouvfr/react-dsfr/SearchBar';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SEARCH_QUERY_PARAMS } from '@/app/constants/search-query-params';
import { unescapeSingleQuotes } from '../../../../../../utils/string';

interface IProps {
  onTextSearch: (text: string) => void;
}

export default function Search({ onTextSearch }: IProps) {
  const searchParams = useSearchParams();
  const clubName = unescapeSingleQuotes(searchParams?.get(SEARCH_QUERY_PARAMS.clubName) || '');
  const [search, onSearchChange] = useState(clubName);

  return (
    <SearchBar
      big
      onButtonClick={onTextSearch}
      label="Rechercher un club"
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
          onChange={(event) => {
            const search = event.currentTarget.value;

            // Handle the case where search is empty in order to update the query parameter clubName
            if (search.length === 0) {
              onTextSearch('');
            }

            onSearchChange(search);
          }}
          // Same goes for the keydown event so this is useless but we hope the bug will be fixed soon.
        />
      )}
    />
  );
}
