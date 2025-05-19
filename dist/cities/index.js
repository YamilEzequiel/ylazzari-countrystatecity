"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityService = void 0;
const cities_index_1 = require("./cities-index");
/**
 * @class CityService
 * @description Class for the city service
 * @version 1.0.6
 */
class CityService {
    constructor() { }
    /**
     * @method getCitiesByCountryAndState
     * @description Method to get the cities by country and state
     * @param country - The country
     * @param stateId - The state id
     * @returns The cities array
     */
    getCitiesByCountryAndState(country, stateId) {
        try {
            return this.loadCitiesData(country, stateId);
        }
        catch (error) {
            throw new Error(`No se encontraron ciudades para el país ${country} y estado ${stateId}`);
        }
    }
    loadCitiesData(country, stateId) {
        const key = `${country}/${stateId}`;
        const cities = cities_index_1.LIST_CITIES[key];
        if (!cities) {
            console.error(`No se encontró el archivo de ciudades para ${key}`);
            throw new Error(`No se encontró el archivo de ciudades para ${key}`);
        }
        return cities;
    }
}
exports.CityService = CityService;
