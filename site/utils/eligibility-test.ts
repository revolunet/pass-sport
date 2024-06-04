import validator from 'validator';

export const isUsingJuneEligibilityTest = new Date().valueOf() > 1717027200000; //2024-05-30T00:00:00.000Z

export const sanitize = (rawInputValue: string): string => {
  return validator.blacklist(rawInputValue.trim(), '\'%;="!?<>:&~#{}()|`^\\[\\]$*§,.');
};
