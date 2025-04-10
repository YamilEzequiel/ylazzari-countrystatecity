import { CountryService } from "./country";
import { StateEnum } from "./shared/enum";
import StateService from "./states";

/**
 * @constant country
 * @description Instance of the country service
 */
const country = new CountryService();

console.log(country.getAllCountries());

/**
 * @constant state
 * @description Instance of the state service
 */
const state = new StateService();

console.log(state.getStatesByCountry(StateEnum.AR));
