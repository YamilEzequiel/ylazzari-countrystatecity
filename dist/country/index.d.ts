import { Language } from "../shared/enum/index-enum";
import { Country } from "../shared/interface/country-interface";
export { LIST_COUNTRY } from "./country-list";
/**
 * @class CountryService
 * @description Class for the country service
 */
export default class CountryService {
    constructor();
    /**
     * @method getCountryByKey
     * @description Method to get the country by key
     * @param key - The key of the country
     * @returns The country object
     */
    getCountryByKey: (key: string) => Country | undefined;
    /**
     * @method getAllCountries
     * @description Method to get all countries
     * @returns The list of countries
     */
    getAllCountries: () => Country[];
    /**
     * @method getCountriesByLanguage
     * @description Method to get the countries by language
     * @param lang - The language of the countries
     * @returns The list of countries by language
     */
    getCountriesByLanguage: (lang: Language) => {
        [key: string]: string;
    };
}
