import { City } from 'types/City';

const parseDistrict = (inutValue: string) => {
  const result = inutValue.toLowerCase().match(/(marseille|paris|lyon)\s(\d+)/);
  if (!result) {
    return null;
  }

  return { city: result[1], district: result[2] };
};

const sortCitiesAlphabetically = (cities: City[]): City[] =>
  cities.sort((a: City, b: City) => {
    if (a.nom < b.nom) {
      return -1;
    }
    if (a.nom > b.nom) {
      return 1;
    }
    return 0;
  });

export const sortCities = (cities: City[], inputValue: string): City[] => {
  const matchingDistrict = parseDistrict(inputValue);
  console.log('matchingDistrict', matchingDistrict);

  if (!matchingDistrict) {
    return sortCitiesAlphabetically(cities);
  }

  let firstCity = cities.find((city) => city.nom.match(' ' + matchingDistrict.district + 'e'));
  if (!firstCity) {
    return sortCitiesAlphabetically(cities);
  }

  let remainingCities = cities.filter((city) => city.code !== firstCity!.code);
  return [firstCity].concat(sortCitiesAlphabetically(remainingCities));
};
