'use client';
import ButtonsGroup from '@codegouvfr/react-dsfr/ButtonsGroup';
import { useRouter } from 'next/navigation';
import React from 'react';

const ButtonChoiceGroup = () => {
  const router = useRouter();
  return (
    <ButtonsGroup
      buttons={[
        {
          children: `Je souhaite savoir si j'ai le droit au pass Sport`,
          onClick: () => router.push('test-eligibilite-base'),
          priority: 'secondary',
          nativeButtonProps: {
            'aria-label': 'Visiter la page pour vérifier votre éligibilité',
          },
        },
        {
          children: 'Je souhaite récupérer mon pass Sport',
          onClick: () => router.push('test-eligibilite'),
          priority: 'secondary',
          nativeButtonProps: {
            'aria-label': 'Visiter la page pour obtenir votre pass Sport',
          },
        },
      ]}
      inlineLayoutWhen="sm and up"
      buttonsSize="large"
    />
  );
};

export default ButtonChoiceGroup;
