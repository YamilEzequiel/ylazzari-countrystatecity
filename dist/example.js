"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cities_1 = require("./cities");
const country_1 = require("./country");
const enum_1 = require("./shared/enum");
const states_1 = require("./states");
/**
 * @constant country
 * @description Instance of the country service
 */
const countryService = new country_1.CountryService();
/**
 * @constant countryService
 * @description Get all the countries
 */
console.log(countryService.getAllCountries());
/**
 * @constant state
 * @description Get all the states by country
 */
const state = new states_1.StateService();
console.log(state.getStatesByCountry(enum_1.CountryEnum.AR));
/**
 * @constant countryService
 * @description Get all the countries only with the name
 * @returns The countries array only with the name
 */
console.log(countryService.getAllCountriesOnlyNames());
/**
 * @constant stateService
 * @description Instance of the state service
 * @returns The states array all the states are in the same array
 */
const stateService = new states_1.StateService();
/**
 * @constant stateService
 * @description Get all the states by country
 */
console.log(stateService.getStatesByCountry(enum_1.CountryEnum.AR));
/**
 * @constant stateService
 * @description Get all the states by country only with the name
 */
console.log(stateService.getStatesOnlyNamesByCountry(enum_1.CountryEnum.AR));
/**
 * @constant cityService
 * @description Instance of the city service
 * @returns The service city
 */
const cityService = new cities_1.CityService();
/**
 * @constant cityService
 * @description Get all the cities by country and state example AR, 3430657
 */
console.log(cityService.getCitiesByCountryAndState(enum_1.CountryEnum.AR, 3430657));
