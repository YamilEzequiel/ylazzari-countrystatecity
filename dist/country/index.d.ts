import { Language } from "../shared/enum/general-enum";
import { Country } from "../shared/interface/country-interface";
export { LIST_COUNTRY } from "./country-list";
/**
 * @class CountryService
 * @description Class for the country service
 * @version 1.0.6
 */
export declare class CountryService {
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
     * @description Method to get all the countries
     * @returns The countries array
     */
    getAllCountries: () => Country[];
    /**
     * @method getAllCountriesOnlyNames
     * @description Method to get all the countries only with the name
     * @returns The countries array
     */
    getAllCountriesOnlyNames: () => {
        [key: string]: string;
    };
    /**
     * @method getCountriesByLanguage
     * @description Method to get the countries by language
     * @param lang - The language of the countries
     * @returns The countries array
     */
    getCountriesByLanguage: (lang: Language) => {
        [key: string]: string;
    };
}
