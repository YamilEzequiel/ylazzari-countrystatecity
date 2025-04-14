import { CountryEnum } from "../shared/enum";
import { City } from "../shared/interface";
import { LIST_CITIES } from "./cities-index";

/**
 * @class CityService
 * @description Class for the city service
 * @version 1.0.6
 */
export class CityService {
  constructor() {}

  /**
   * @method getCitiesByCountryAndState
   * @description Method to get the cities by country and state
   * @param country - The country
   * @param stateId - The state id
   * @returns The cities array
   */
  public getCitiesByCountryAndState(country: CountryEnum, stateId: number): City[] {
    try {
      return this.loadCitiesData(country, stateId);
    } catch (error) {
      throw new Error(`No se encontraron ciudades para el país ${country} y estado ${stateId}`);
    }
  }

  private loadCitiesData(country: CountryEnum, stateId: number): City[] {
    const key = `${country}/${stateId}`;
    const cities = LIST_CITIES[key];

    if (!cities) {
      console.error(`No se encontró el archivo de ciudades para ${key}`);
      throw new Error(`No se encontró el archivo de ciudades para ${key}`);
    }

    return cities;
  }
}

// Exporta también el tipo
export type { City };
