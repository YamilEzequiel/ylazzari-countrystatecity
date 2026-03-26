# ylazzari-countrystatecity

A comprehensive list of countries, states and cities with multilanguage support.

[![Downloads](https://img.shields.io/npm/dt/ylazzari-countrystatecity)](https://www.npmjs.com/package/ylazzari-countrystatecity)
[![npm version](https://img.shields.io/npm/v/ylazzari-countrystatecity)](https://www.npmjs.com/package/ylazzari-countrystatecity)

## Installation

```bash
npm install ylazzari-countrystatecity
```

## Quick Start

```typescript
import {
  CountryService,
  StateService,
  CityService,
  CountryEnum,
  Language,
} from "ylazzari-countrystatecity";

const countryService = new CountryService();
const stateService = new StateService();
const cityService = new CityService();

// Get a country
const argentina = countryService.getCountryByKey("AR");
console.log(argentina.en); // "Argentina"
console.log(argentina.money.code); // "ARS"
console.log(argentina.flag); // "🇦🇷"

// Get states for a country
const states = stateService.getStatesByCountry(CountryEnum.AR);

// Get cities for a country and state
const cities = cityService.getCitiesByCountryAndState(CountryEnum.AR, 3430657);
```

## API Reference

### CountryService

```typescript
const countryService = new CountryService();
```

| Method | Returns | Description |
| --- | --- | --- |
| `getCountryByKey(key: string)` | `Country \| undefined` | Get a country by its ISO 3166-1 alpha-2 code |
| `getAllCountries()` | `Country[]` | Get all available countries |
| `getAllCountriesOnlyNames()` | `{ [key: string]: string }` | Get all countries as key-name pairs |
| `getCountriesByLanguage(lang: Language)` | `{ [key: string]: string }` | Get country names in a specific language |

You can also import the country list directly:

```typescript
import { LIST_COUNTRY } from "ylazzari-countrystatecity";

console.log(LIST_COUNTRY.US); // United States data
```

### StateService

```typescript
const stateService = new StateService();
```

| Method | Returns | Description |
| --- | --- | --- |
| `getStatesByCountry(country: CountryEnum)` | `State[]` | Get all states/provinces for a country |
| `getStatesOnlyNamesByCountry(country: CountryEnum)` | `string[]` | Get only state names for a country |

### CityService

```typescript
const cityService = new CityService();
```

| Method | Returns | Description |
| --- | --- | --- |
| `getCitiesByCountryAndState(country: CountryEnum, stateId: number)` | `City[]` | Get cities by country and state ID |

## Interfaces

```typescript
interface Country {
  es: string;          // Spanish name
  en: string;          // English name
  money: CountryMoney; // Currency information
  flag: string;        // Emoji flag
  phone: string;       // International phone code
  key: string;         // ISO 3166-1 alpha-2 code
}

interface CountryMoney {
  symbol: string; // e.g., "$"
  name: string;   // e.g., "Peso argentino"
  code: string;   // ISO 4217 code, e.g., "ARS"
}

interface State {
  id: number;
  parentId: string | null;
  country: string;
  name: string;
  fullName: string | null;
  lat: number;
  lng: number;
  tz: string; // IANA timezone
}

interface City {
  id: number;
  parentId: number;
  country: string;
  name: string;
  fullName: string | null;
  lat: number;
  lng: number;
  tz: string; // IANA timezone
}
```

## Enums

```typescript
enum Language {
  ES = "es",
  EN = "en",
}

enum CountryEnum {
  AR = "AR", BR = "BR", CL = "CL", CO = "CO",
  ES = "ES", MX = "MX", PA = "PA", PE = "PE",
  PY = "PY", US = "US", UY = "UY", VE = "VE",
}
```

## Submodule Imports

You can import each service independently to reduce bundle size:

```typescript
import { CountryService } from "ylazzari-countrystatecity/country";
import { StateService } from "ylazzari-countrystatecity/state";
import { CityService } from "ylazzari-countrystatecity/cities";
```

## Supported Countries

| Key | English | Spanish |
| --- | --- | --- |
| AR | Argentina | Argentina |
| BR | Brazil | Brasil |
| CL | Chile | Chile |
| CO | Colombia | Colombia |
| ES | Spain | España |
| MX | Mexico | México |
| PA | Panama | Panamá |
| PE | Peru | Perú |
| PY | Paraguay | Paraguay |
| US | United States | Estados Unidos |
| UY | Uruguay | Uruguay |
| VE | Venezuela | Venezuela |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC
