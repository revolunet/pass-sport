import { SEARCH_QUERY_PARAMS } from '@/app/constants/search-query-params';
import { useSearchParams } from 'next/navigation';
import Checkbox from '@codegouvfr/react-dsfr/Checkbox';
import { ChangeEvent } from 'react';

interface Props {
  onDisabilityChanged: (isActivated: boolean) => void;
}

const DisabilityFilter = ({ onDisabilityChanged }: Props) => {
  const searchParams = useSearchParams();
  const isChecked = !!searchParams && searchParams.get(SEARCH_QUERY_PARAMS.handicap) === 'Oui';

  const disabilityChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onDisabilityChanged(e.target.checked);
  };

  return (
    <Checkbox
      options={[
        {
          label: 'Accueil des personnes en situation de handicaps',
          nativeInputProps: {
            name: 'disability-checkbox',
            'aria-label':
              'Ce filtre permet de réduire la liste des clubs à ceux accueillant uniquement des personnes en situation de handicap. La liste des clubs est rafraichie dès que ce filtre est modifié.',
            checked: isChecked,
            onChange: disabilityChangeHandler,
          },
        },
      ]}
    />
  );
};

export default DisabilityFilter;
