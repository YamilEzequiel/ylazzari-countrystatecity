import { Language } from "../shared/enum/general-enum";
import { Country } from "../shared/interface/country-interface";
import { LIST_COUNTRY } from "./country-list";

export { LIST_COUNTRY } from "./country-list";

/**
 * @class CountryService
 * @description Class for the country service
 * @version 1.0.6
 */
export class CountryService {
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

  /**
   * @method getAllCountries
   * @description Method to get all the countries
   * @returns The countries array
   */
  public getAllCountries = (): Country[] => {
    return Object.values(LIST_COUNTRY);
  };

  /**
   * @method getAllCountriesOnlyNames
   * @description Method to get all the countries only with the name
   * @returns The countries array
   */
  public getAllCountriesOnlyNames = (): { [key: string]: string } => {
    const countries: { [key: string]: string } = {};
    Object.entries(LIST_COUNTRY).forEach(([key, country]) => {
      countries[key] = (country as Country).en;
    });
    return countries;
  };

  /**
   * @method getCountriesByLanguage
   * @description Method to get the countries by language
   * @param lang - The language of the countries
   * @returns The countries array
   */
  public getCountriesByLanguage = (lang: Language): { [key: string]: string } => {
    const countries: { [key: string]: string } = {};
    Object.entries(LIST_COUNTRY).forEach(([key, country]) => {
      countries[key] = (country as Country)[lang];
    });
    return countries;
  };
}
