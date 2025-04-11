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
import { CountryService, Language } from 'ylazzari-countrystatecity';

const countryService = new CountryService();

// Get a specific country
const argentina = countryService.getCountryByKey('AR');
console.log(argentina.en); // "Argentina"
console.log(argentina.money.code); // "ARS"

// Get all countries
const allCountries = countryService.getAllCountries();

// Get countries in English
const englishCountries = countryService.getCountriesByLanguage(Language.EN);
```

### Using the Country List Directly

```typescript
import { LIST_COUNTRY } from 'ylazzari-countrystatecity';

// Access a specific country
console.log(LIST_COUNTRY.US); // United States data
```

### TypeScript Interfaces

```typescript
import { Country, CountryList, Language } from 'ylazzari-countrystatecity';

// Using interfaces for type safety
const myCountry: Country = {
  es: "Argentina",
  en: "Argentina",
  money: { 
    symbol: "AR$", 
    name: "Peso argentino", 
    code: "ARS" 
  },
  flag: "🇦🇷",
  phone: "54",
  key: "AR"
};
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
  EN = "en"
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License
