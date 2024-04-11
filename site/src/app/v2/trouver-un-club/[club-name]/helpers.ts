export const formatPhoneNumber = (phoneNumber: string): string => {
  if (phoneNumber.length !== 10) {
    return phoneNumber;
  }

  return phoneNumber.split('').reduce((acc, currentValue, index) => {
    if (index % 2 === 0) {
      return acc + currentValue;
    } else {
      return acc + currentValue + ' ';
    }
  }, '');
};
