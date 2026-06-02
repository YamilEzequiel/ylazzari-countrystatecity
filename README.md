# ylazzari-countrystatecity

A lightweight, lazy-loaded list of countries, states and cities for Node.js — built for forms, selectors and any UI that needs geo data without paying a heavy startup cost.

[![Downloads](https://img.shields.io/npm/dt/ylazzari-countrystatecity)](https://www.npmjs.com/package/ylazzari-countrystatecity)
[![npm version](https://img.shields.io/npm/v/ylazzari-countrystatecity)](https://www.npmjs.com/package/ylazzari-countrystatecity)

- **21 countries** — full Latin America, plus Spain and the United States
- **Lazy city loading** — cities are loaded on demand and cached in memory
- **Zero runtime dependencies**
- **Multi-language country names** (ES / EN) with currency, flag and phone code
- **GeoNames-based data** — IDs, coordinates and timezones from the official dataset

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

// Country metadata
const argentina = countryService.getCountryByKey("AR");
console.log(argentina.en);         // "Argentina"
console.log(argentina.money.code); // "ARS"
console.log(argentina.flag);       // "🇦🇷"

// States / provinces for a country
const states = stateService.getStatesByCountry(CountryEnum.AR);

// Cities for a country + state ID (lazy-loaded, cached after first hit)
const cities = cityService.getCitiesByCountryAndState(CountryEnum.AR, 3435907);
```

## API Reference

### CountryService

```typescript
const countryService = new CountryService();
```

| Method | Returns | Description |
| --- | --- | --- |
| `getCountryByKey(key: string)` | `Country \| undefined` | Get a country by its ISO 3166-1 alpha-2 code |
| `getAllCountries()` | `Country[]` | All countries available in `LIST_COUNTRY` |
| `getAllCountriesOnlyNames()` | `{ [key: string]: string }` | Country code → English name |
| `getCountriesByLanguage(lang: Language)` | `{ [key: string]: string }` | Country code → name in a given language |

You can also access the full country list directly:

```typescript
import { LIST_COUNTRY } from "ylazzari-countrystatecity";

console.log(LIST_COUNTRY.US); // { es, en, money, flag, phone, key }
```

### StateService

```typescript
const stateService = new StateService();
```

| Method | Returns | Description |
| --- | --- | --- |
| `getStatesByCountry(country: CountryEnum)` | `State[]` | All states / provinces for a country |
| `getStatesOnlyNamesByCountry(country: CountryEnum)` | `string[]` | Only the state names |

### CityService

```typescript
const cityService = new CityService();
```

| Method | Returns | Description |
| --- | --- | --- |
| `getCitiesByCountryAndState(country, stateId)` | `City[]` | Cities of a state — lazy-loaded on first call, cached in memory |

Throws if the `country` / `stateId` combination has no city data:

```typescript
try {
  cityService.getCitiesByCountryAndState(CountryEnum.AR, 999999);
} catch (err) {
  // No se encontraron ciudades para el país AR y estado 999999
}
```

## Performance — how lazy loading works

City data is split into one JSON file per state (about 300 files total). On the first call to `getCitiesByCountryAndState(country, stateId)`, only that specific file is loaded from disk via `require`. Subsequent calls for the same pair are served from an in-memory `Map` shared across all `CityService` instances.

That means:

- Importing the library **does not** load city data — just lightweight metadata.
- Each unique `country/state` you ask for adds only its own JSON to memory (typically 10–50 KB).
- A second call to the same state is O(1) — no disk, no parse.

This keeps cold start fast for UIs that only need a few country/state pairs at a time.

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
  id: number;            // GeoNames ID
  parentId: string | null;
  country: string;
  name: string;
  fullName: string | null;
  lat: number;
  lng: number;
  tz: string;            // IANA timezone
}

interface City {
  id: number;            // GeoNames ID
  parentId: number;      // State's GeoNames ID
  country: string;
  name: string;
  fullName: string | null;
  lat: number;
  lng: number;
  tz: string;            // IANA timezone
}
```

## Enums

```typescript
enum Language {
  ES = "es",
  EN = "en",
}

enum CountryEnum {
  AR, BO, BR, CL, CO, CR, CU, DO, EC, ES,
  GT, HN, MX, NI, PA, PE, PY, SV, US, UY, VE,
}
```

## Submodule imports

You can import each service independently to keep bundle size minimal:

```typescript
import { CountryService } from "ylazzari-countrystatecity/country";
import { StateService } from "ylazzari-countrystatecity/state";
import { CityService } from "ylazzari-countrystatecity/cities";
```

## Live demo

The repo ships with a self-contained demo that wires the three services into a chained selector UI (country → state → city), with Tailwind and a small zero-dependency Node server.

```bash
git clone https://github.com/YamilEzequiel/ylazzari-countrystatecity.git
cd ylazzari-countrystatecity
npm install
npm run build
npm run example:web
# open http://localhost:3000
```

The server lives in `example/server.js` and uses the library exactly the way your backend would — `require("ylazzari-countrystatecity")` and expose a tiny HTTP API the browser consumes.

## Supported countries

| Key | English | Spanish |
| --- | --- | --- |
| AR | Argentina | Argentina |
| BO | Bolivia | Bolivia |
| BR | Brazil | Brasil |
| CL | Chile | Chile |
| CO | Colombia | Colombia |
| CR | Costa Rica | Costa Rica |
| CU | Cuba | Cuba |
| DO | Dominican Republic | República Dominicana |
| EC | Ecuador | Ecuador |
| ES | Spain | España |
| GT | Guatemala | Guatemala |
| HN | Honduras | Honduras |
| MX | Mexico | México |
| NI | Nicaragua | Nicaragua |
| PA | Panama | Panamá |
| PE | Peru | Perú |
| PY | Paraguay | Paraguay |
| SV | El Salvador | El Salvador |
| US | United States | Estados Unidos |
| UY | Uruguay | Uruguay |
| VE | Venezuela | Venezuela |

## Adding more countries

There is an importer script that reads the official [GeoNames](https://www.geonames.org/) dumps and generates everything the library needs.

1. Download the dump for the country code you want from `https://download.geonames.org/export/dump/{XX}.zip` (for example `PT.zip` for Portugal).
2. Extract the resulting `{XX}.txt` into a folder called `geonames-data/` at the repo root.
3. Run:

```bash
npm run import-geonames -- PT
# or several at once
npm run import-geonames -- PT IT FR
```

The script will:

- Write `src/states/{XX}.json` with all admin-1 regions (states / provinces / departments).
- Write `src/cities/{XX}/{stateId}.json` per state, including all populated places with at least 500 inhabitants.
- Add `XX` to `CountryEnum`.
- Add the import and entry to `src/states/state-list.ts`.

Then `npm run build` and you are done.

PRs adding new countries via this script are very welcome.

## Data source and licensing

Geo data is derived from the [GeoNames geographical database](https://www.geonames.org/) and is distributed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The library code itself is ISC.

## Contributing

Contributions are welcome — issues and pull requests both. If you are adding a new country, please use the `import-geonames` script so the data stays consistent.

## Changelog

### 1.1.0

- **perf(cities)**: cities are now lazy-loaded on demand and cached in memory. The library no longer loads 3.6 MB of JSON at `require()` time — only the country/state pairs you actually ask for. Cold start drops dramatically.
- **feat(data)**: 9 new Latin American countries — Bolivia (BO), Costa Rica (CR), Cuba (CU), Dominican Republic (DO), Ecuador (EC), Guatemala (GT), Honduras (HN), Nicaragua (NI), El Salvador (SV). Total goes from 12 to 21 countries.
- **feat(scripts)**: new `npm run import-geonames -- XX` script that generates the JSON files for any new country directly from official GeoNames dumps, and auto-updates `CountryEnum` and `state-list.ts`.
- **feat(example)**: new `example/` folder with a self-contained Tailwind + Node demo. Run `npm run example:web` and open `http://localhost:3000` to try the library through three chained selectors.
- **docs**: README expanded with the lazy-loading model, the demo workflow, the importer instructions, and the full updated country list.

No breaking changes — the public API (`CountryService`, `StateService`, `CityService`, `CountryEnum`, `Language`, `LIST_COUNTRY`) is unchanged.

### Previous releases

See the git history for changes prior to 1.1.0.

## License

ISC
