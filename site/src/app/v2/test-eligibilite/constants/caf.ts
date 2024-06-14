const cafErrorMessage = 'Le numéro CAF doit être composé de 6, 7 ou 8 chiffres';
const cafValidationRegex = /^\d{6,8}$/;
const isInputValidCaf = (input: string) => cafValidationRegex.test(input);

export { cafErrorMessage, isInputValidCaf };
