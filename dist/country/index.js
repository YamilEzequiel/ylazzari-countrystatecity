"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryService = exports.LIST_COUNTRY = void 0;
const country_list_1 = require("./country-list");
var country_list_2 = require("./country-list");
Object.defineProperty(exports, "LIST_COUNTRY", { enumerable: true, get: function () { return country_list_2.LIST_COUNTRY; } });
/**
 * @class CountryService
 * @description Class for the country service
 */
class CountryService {
    constructor() {
        /**
         * @method getCountryByKey
         * @description Method to get the country by key
         * @param key - The key of the country
         * @returns The country object
         */
        this.getCountryByKey = (key) => {
            return country_list_1.LIST_COUNTRY[key.toUpperCase()];
        };
        this.getAllCountries = () => {
            return Object.values(country_list_1.LIST_COUNTRY);
        };
        this.getCountriesByLanguage = (lang) => {
            const countries = {};
            Object.entries(country_list_1.LIST_COUNTRY).forEach(([key, country]) => {
                countries[key] = country[lang];
            });
            return countries;
        };
    }
}
exports.CountryService = CountryService;
