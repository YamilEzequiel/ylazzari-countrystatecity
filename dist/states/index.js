"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateService = void 0;
const state_list_1 = require("./state-list");
/**
 * @class StateService
 * @description Class for the state service
 * @version 1.0.6
 */
class StateService {
    constructor() {
        /**
         * @method getStatesByCountry
         * @description Method to get the states by country
         * @param country - The country
         * @returns The states array
         */
        this.getStatesByCountry = (country) => {
            return state_list_1.LIST_STATE[country];
        };
        /**
         * @method getStatesOnlyNamesByCountry
         * @description Method to get an array of state names
         * @param country - The country
         * @returns Array of state names
         */
        this.getStatesOnlyNamesByCountry = (country) => {
            const states = this.getStatesByCountry(country);
            return states.map((state) => state.name);
        };
    }
}
exports.StateService = StateService;
