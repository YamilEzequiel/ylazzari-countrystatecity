import { State } from "@/shared/interface/state-interface";
import { CountryEnum } from "@/shared";
/**
 * @class StateService
 * @description Class for the state service
 * @version 1.0.6
 */
export declare class StateService {
    constructor();
    /**
     * @method getStatesByCountry
     * @description Method to get the states by country
     * @param country - The country
     * @returns The states array
     */
    getStatesByCountry: (country: CountryEnum) => State[];
    /**
     * @method getStatesOnlyNamesByCountry
     * @description Method to get an array of state names
     * @param country - The country
     * @returns Array of state names
     */
    getStatesOnlyNamesByCountry: (country: CountryEnum) => string[];
}
