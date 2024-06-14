const cafValidationRegex = /^\d{6,8}$/;
const cafErrorMessage = 'Le numéro CAF doit être composé de 6, 7 ou 8 chiffres';
const isInputValidCaf = (input: string) => cafValidationRegex.test(input);
const cafLabel = `Numéro de l’allocataire CAF*`;
const cafHintText = 'Format attendu : 6, 7 ou 8 chiffres';
const cafSecondHintText =
  'Appelé « numéro de dossier » Le numéro figure en haut à gauche de tous les courriers émis par la CAF ainsi que sur toutes les attestations que vous pouvez télécharger depuis votre espace personnel.';
const cafPlaceholder = 'ex: 0000000';

export {
  cafErrorMessage,
  cafHintText,
  cafLabel,
  cafPlaceholder,
  cafSecondHintText,
  isInputValidCaf,
};
