import { State } from "@/shared/interface/state-interface";
import { LIST_STATE } from "./state-list";
import { CountryEnum } from "@/shared";

/**
 * @class StateService
 * @description Class for the state service
 * @version 1.0.6
 */
export class StateService {
  constructor() {}

  /**
   * @method getStatesByCountry
   * @description Method to get the states by country
   * @param country - The country
   * @returns The states array
   */
  public getStatesByCountry = (country: CountryEnum): State[] => {
    return LIST_STATE[country];
  };

  /**
   * @method getStatesOnlyNamesByCountry
   * @description Method to get an array of state names
   * @param country - The country
   * @returns Array of state names
   */
  public getStatesOnlyNamesByCountry = (country: CountryEnum): string[] => {
    const states = this.getStatesByCountry(country);
    return states.map((state: State) => state.name);
  };
}
