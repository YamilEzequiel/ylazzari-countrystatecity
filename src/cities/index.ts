import * as path from "path";
import { CountryEnum } from "../shared/enum";
import { City } from "../shared/interface";

/**
 * @class CityService
 * @description Class for the city service
 * @version 1.0.6
 */
export class CityService {
  private static cache = new Map<string, City[]>();

  constructor() {}

  /**
   * @method getCitiesByCountryAndState
   * @description Method to get the cities by country and state
   * @param country - The country
   * @param stateId - The state id
   * @returns The cities array
   */
  public getCitiesByCountryAndState(country: CountryEnum, stateId: number): City[] {
    const key = `${country}/${stateId}`;

    const cached = CityService.cache.get(key);
    if (cached) return cached;

    try {
      const cities: City[] = require(path.join(__dirname, country, `${stateId}.json`));
      CityService.cache.set(key, cities);
      return cities;
    } catch {
      throw new Error(`No se encontraron ciudades para el país ${country} y estado ${stateId}`);
    }
  }
}

// Exporta también el tipo
export type { City };
