import { CityService } from "./cities";
import { CountryService } from "./country";
import { CountryEnum } from "./shared/enum";
import { StateService } from "./states";

/**
 * @constant country
 * @description Instance of the country service
 */
const countryService = new CountryService();

/**
 * @constant countryService
 * @description Get all the countries
 */
console.log(countryService.getAllCountries());

/**
 * @constant state
 * @description Get all the states by country
 */
const state = new StateService();
console.log(state.getStatesByCountry(CountryEnum.AR));

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
const stateService = new StateService();

/**
 * @constant stateService
 * @description Get all the states by country
 */
console.log(stateService.getStatesByCountry(CountryEnum.AR));

/**
 * @constant stateService
 * @description Get all the states by country only with the name
 */
console.log(stateService.getStatesOnlyNamesByCountry(CountryEnum.AR));

/**
 * @constant cityService
 * @description Instance of the city service
 * @returns The service city
 */
const cityService = new CityService();

/**
 * @constant cityService
 * @description Get all the cities by country and state example AR, 3430657
 */
console.log(cityService.getCitiesByCountryAndState(CountryEnum.AR, 3430657));

