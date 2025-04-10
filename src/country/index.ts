import { Language } from "../shared/enum/index-enum";
import { Country } from "../shared/interface/country-interface";
import { LIST_COUNTRY } from "./country-list";

export { LIST_COUNTRY } from "./country-list";

/**
 * @class CountryService
 * @description Class for the country service
 */
export default class CountryService {
  constructor() {}

  /**
   * @method getCountryByKey
   * @description Method to get the country by key
   * @param key - The key of the country
   * @returns The country object
   */
  public getCountryByKey = (key: string): Country | undefined => {
    return LIST_COUNTRY[key.toUpperCase()];
  };
  
  public getAllCountries = (): Country[] => {
    return Object.values(LIST_COUNTRY);
  };

  public getCountriesByLanguage = (lang: Language): { [key: string]: string } => {
    const countries: { [key: string]: string } = {};
    Object.entries(LIST_COUNTRY).forEach(([key, country]) => {
      countries[key] = (country as Country)[lang];
    });
    return countries;
  };
}


export { CountryService };