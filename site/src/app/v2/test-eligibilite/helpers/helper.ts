import {
  StepOneFormInputsState,
  YoungCafInputsState,
  YoungMsaInputsState,
} from 'types/EligibilityTest';

export const mapper: Record<
  keyof StepOneFormInputsState | keyof YoungCafInputsState | keyof YoungMsaInputsState,
  string
> = {
  beneficiaryLastname: 'Le nom est requis',
  beneficiaryFirstname: 'Le prénom est requis',
  beneficiaryBirthDate: 'La date de naissance est requise',
  recipientResidencePlace: 'La commune de résidence est requise',
  recipientLastname: 'Le nom est requis',
  recipientFirstname: 'Le prénom est requis',
  recipientBirthDate: 'La date de naissance est requise',
  recipientBirthPlace: 'La commune de naissance est requise',
  recipientBirthCountry: 'Le pays de naissance est requis',
  recipientCafNumber: 'Le matricule CAF est requis',
};

export const convertDate = (date: string): string | null => {
  const [year, month, day] = date.split('-');

  if (!year || !month || !day) {
    return null;
  }

  return `${day}/${month}/${year}`;
};
