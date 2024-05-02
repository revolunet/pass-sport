export interface City {
  nom: string;
  code: string;
  codesPostaux: string[];
}

export interface CityWithPostalCode {
  nom: string;
  code: string;
  postalCode: string;
}
