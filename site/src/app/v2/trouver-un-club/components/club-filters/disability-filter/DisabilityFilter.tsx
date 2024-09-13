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
            checked: isChecked,
            onChange: disabilityChangeHandler,
          },
        },
      ]}
    />
  );
};

export default DisabilityFilter;
