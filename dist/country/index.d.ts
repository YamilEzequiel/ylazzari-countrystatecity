import { Language } from "../shared/enum/index-enum";
import { Country } from "../shared/interface/country-interface";
export { LIST_COUNTRY } from "./country-list";
/**
 * @class CountryService
 * @description Class for the country service
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
    getAllCountries: () => Country[];
    getCountriesByLanguage: (lang: Language) => {
        [key: string]: string;
    };
}
