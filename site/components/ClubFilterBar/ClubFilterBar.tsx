'use client';

import { RadioButtons } from '@codegouvfr/react-dsfr/RadioButtons';
import { Select } from '@codegouvfr/react-dsfr/SelectNext';
import { useState } from 'react';
import ActivitiesFilter from './ActivitiesFilter';

export default function ClubFilterBar() {
  const [value, setValue] = useState<'Oui' | 'Non' | undefined>(undefined);

  const sports: string[] = ['Tennis', 'Golf'];

  return (
    <div>
      <RadioButtons
        legend="Accueil de personnes en situation de handicaps"
        options={[
          {
            label: 'Oui',
            nativeInputProps: {
              checked: value === 'Oui',
              onChange: () => setValue('Oui'),
            },
          },
          {
            label: 'Non',
            nativeInputProps: {
              checked: value === 'Non',
              onChange: () => setValue('Non'),
            },
          },
        ]}
      />

      <ActivitiesFilter></ActivitiesFilter>

      <Select
        label="Département"
        placeholder="Département"
        // nativeSelectProps={{
        //   value,
        //   onChange: (event) => setSelectedSport(event.target.value),
        // }}
        options={sports.map((value) => ({
          value,
          label: `${value}`,
        }))}
      />
    </div>
  );
}
