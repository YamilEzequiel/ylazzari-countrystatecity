import { CountryEnum } from "../shared/enum";
import { City } from "../shared/interface";
/**
 * @class CityService
 * @description Class for the city service
 * @version 1.0.6
 */
export declare class CityService {
    constructor();
    /**
     * @method getCitiesByCountryAndState
     * @description Method to get the cities by country and state
     * @param country - The country
     * @param stateId - The state id
     * @returns The cities array
     */
    getCitiesByCountryAndState(country: CountryEnum, stateId: number): City[];
    private loadCitiesData;
}
export type { City };
