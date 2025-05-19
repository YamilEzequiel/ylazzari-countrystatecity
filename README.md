# ylazzari-countrystatecity

A comprehensive list of countries, states and cities with multilanguage support.

> ⚠️ **WARNING**: This project is not finished, but you can use it if you want.

[![Downloads](https://img.shields.io/npm/dt/ylazzari-countrystatecity)](https://www.npmjs.com/package/ylazzari-countrystatecity)

## Installation

```bash
npm install ylazzari-countrystatecity
```

## Usage

### Using CountryService

```typescript
import { CountryService, Language } from "ylazzari-countrystatecity";

const countryService = new CountryService();

// Get a specific country
const argentina = countryService.getCountryByKey("AR");
console.log(argentina.en); // "Argentina"
console.log(argentina.money.code); // "ARS"

// Get all countries
const allCountries = countryService.getAllCountries();

// Get countries in English
const englishCountries = countryService.getCountriesByLanguage(Language.EN);
```

### Using the Country List Directly

```typescript
import { LIST_COUNTRY } from "ylazzari-countrystatecity";

// Access a specific country
console.log(LIST_COUNTRY.US); // United States data
```

### TypeScript Interfaces

```typescript
import { Country, CountryList, Language } from "ylazzari-countrystatecity";

// Using interfaces for type safety
const myCountry: Country = {
  es: "Argentina",
  en: "Argentina",
  money: {
    symbol: "AR$",
    name: "Peso argentino",
    code: "ARS",
  },
  flag: "🇦🇷",
  phone: "54",
  key: "AR",
};
```

### Using StateService

```typescript
import { StateService, CountryEnum } from "ylazzari-countrystatecity";

const stateService = new StateService();

// Get states by country
const argentineStates = stateService.getStatesByCountry(CountryEnum.AR);

// Get only state names by country
const stateNames = stateService.getStatesOnlyNamesByCountry(CountryEnum.AR);
```

### Using CityService

```typescript
import { CityService, CountryService, StateService, CountryEnum } from "ylazzari-countrystatecity";

/**
 * @constant countryService
 * @description Instance of the country service
 */
const countryService = new CountryService();

/**
 * Get all countries
 */
console.log(countryService.getAllCountries());

/**
 * Get all countries with names only
 */
console.log(countryService.getAllCountriesOnlyNames());

/**
 * @constant stateService
 * @description Instance of the state service
 */
const stateService = new StateService();

/**
 * Get all states for a specific country (e.g., Argentina)
 */
console.log(stateService.getStatesByCountry(CountryEnum.AR));

/**
 * Get state names only for a specific country
 */
console.log(stateService.getStatesOnlyNamesByCountry(CountryEnum.AR));

/**
 * @constant cityService
 * @description Instance of the city service
 */
const cityService = new CityService();

/**
 * Get all cities for a specific country and state
 * Example: Argentina (AR) and state ID 3430657
 */
console.log(cityService.getCitiesByCountryAndState(CountryEnum.AR, 3430657));
```

## Features

- Complete list of countries with:
  - Names in multiple languages (English, Spanish)
  - Currency information (symbol, name, code)
  - Country flag emoji
  - International phone code
  - Country key (ISO 3166-1 alpha-2)
- TypeScript support with full type definitions
- No external dependencies
- Simple and lightweight

## API Reference

### CountryService Methods

#### `getCountryByKey(key: string): Country | undefined`

Returns a country object by its key (ISO 3166-1 alpha-2 code)

#### `getAllCountries(): Country[]`

Returns an array of all available countries

#### `getCountriesByLanguage(lang: Language): { [key: string]: string }`

Returns an object with country keys and their names in the specified language

### StateService Methods

#### `getStatesByCountry(country: CountryEnum): State[]`

Returns an array of all states for the specified country

#### `getStatesOnlyNamesByCountry(country: CountryEnum): string[]`

Returns an array of state names for the specified country

### CityService Methods

#### `getCitiesByCountryAndState(country: CountryEnum, stateId: number): City[]`

Returns an array of cities for the specified country and state ID

### Interfaces

```typescript
interface Country {
  es: string;
  en: string;
  money: {
    symbol: string;
    name: string;
    code: string;
  };
  flag: string;
  phone: string;
  key: string;
}

enum Language {
  ES = "es",
  EN = "en",
}

interface State {
  id: number;
  name: string;
  country_id: string;
}

interface City {
  id: number;
  name: string;
  state_id: number;
}

enum CountryEnum {
  AR = "AR",
  BR = "BR",
  // ... otros países ...
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License

## Available Countries

Currently, the following countries are supported:

| Key | Country (EN)  | Country (ES)   |
| --- | ------------- | -------------- |
| AR  | Argentina     | Argentina      |
| BR  | Brazil        | Brasil         |
| CL  | Chile         | Chile          |
| CO  | Colombia      | Colombia       |
| ES  | Spain         | España         |
| MX  | Mexico        | México         |
| PA  | Panama        | Panamá         |
| PE  | Peru          | Perú           |
| PY  | Paraguay      | Paraguay       |
| US  | United States | Estados Unidos |
| UY  | Uruguay       | Uruguay        |
| VE  | Venezuela     | Venezuela      |
