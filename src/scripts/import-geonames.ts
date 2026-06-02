/**
 * import-geonames.ts
 *
 * Generate states and cities JSON for one or more country codes from
 * official GeoNames dumps.
 *
 * USAGE:
 *   npm run import-geonames -- BO EC PT
 *
 * REQUIREMENTS:
 *   For every country code XX, download and extract the dump first:
 *     https://download.geonames.org/export/dump/{XX}.zip
 *   Place the resulting {XX}.txt inside ./geonames-data/ at the repo root.
 *
 * OUTPUT:
 *   - src/states/{XX}.json
 *   - src/cities/{XX}/{stateId}.json (one per state)
 *   - Updates src/shared/enum/country-enum.ts
 *   - Updates src/states/state-list.ts
 */

import * as fs from "fs";
import * as path from "path";

const ROOT = path.resolve(__dirname, "..", "..");
const DUMP_DIR = path.join(ROOT, "geonames-data");
const STATES_DIR = path.join(ROOT, "src", "states");
const CITIES_DIR = path.join(ROOT, "src", "cities");
const ENUM_FILE = path.join(ROOT, "src", "shared", "enum", "country-enum.ts");
const STATE_LIST_FILE = path.join(ROOT, "src", "states", "state-list.ts");

const MIN_POPULATION = 500;

type Row = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  featureClass: string;
  featureCode: string;
  countryCode: string;
  admin1Code: string;
  population: number;
  tz: string;
};

function parseRow(line: string): Row | null {
  const cols = line.split("\t");
  if (cols.length < 19) return null;
  const id = Number(cols[0]);
  const lat = Number(cols[4]);
  const lng = Number(cols[5]);
  if (!Number.isFinite(id) || !Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  return {
    id,
    name: cols[1],
    lat,
    lng,
    featureClass: cols[6],
    featureCode: cols[7],
    countryCode: cols[8],
    admin1Code: cols[10],
    population: Number(cols[14]) || 0,
    tz: cols[17] || "",
  };
}

type State = {
  id: number;
  parentId: null;
  country: string;
  name: string;
  fullName: string | null;
  lat: number;
  lng: number;
  tz: string;
};

type City = {
  id: number;
  parentId: number;
  country: string;
  name: string;
  fullName: string | null;
  lat: number;
  lng: number;
  tz: string;
};

function importCountry(countryCode: string): { states: number; cities: number } {
  const dumpPath = path.join(DUMP_DIR, `${countryCode}.txt`);
  if (!fs.existsSync(dumpPath)) {
    console.error(`\n  [${countryCode}] Falta ${dumpPath}`);
    console.error(`  Descargá: https://download.geonames.org/export/dump/${countryCode}.zip`);
    console.error(`  Extraé el .txt en ./geonames-data/\n`);
    return { states: 0, cities: 0 };
  }

  console.log(`\n  [${countryCode}] Leyendo ${dumpPath}…`);
  const raw = fs.readFileSync(dumpPath, "utf-8");
  const lines = raw.split("\n");

  const states: State[] = [];
  const stateAdminCodeById = new Map<number, string>();
  const citiesByAdmin: Map<string, City[]> = new Map();

  for (const line of lines) {
    if (!line) continue;
    const r = parseRow(line);
    if (!r) continue;

    if (r.featureClass === "A" && r.featureCode === "ADM1") {
      states.push({
        id: r.id,
        parentId: null,
        country: countryCode,
        name: r.name,
        fullName: null,
        lat: r.lat,
        lng: r.lng,
        tz: r.tz,
      });
      stateAdminCodeById.set(r.id, r.admin1Code);
    } else if (r.featureClass === "P" && r.population >= MIN_POPULATION) {
      const list = citiesByAdmin.get(r.admin1Code) || [];
      list.push({
        id: r.id,
        parentId: 0,
        country: countryCode,
        name: r.name,
        fullName: null,
        lat: r.lat,
        lng: r.lng,
        tz: r.tz,
      });
      citiesByAdmin.set(r.admin1Code, list);
    }
  }

  states.sort((a, b) => a.name.localeCompare(b.name));

  fs.writeFileSync(
    path.join(STATES_DIR, `${countryCode}.json`),
    JSON.stringify(states, null, 2) + "\n",
  );

  const citiesDir = path.join(CITIES_DIR, countryCode);
  fs.mkdirSync(citiesDir, { recursive: true });

  let totalCities = 0;
  for (const state of states) {
    const adminCode = stateAdminCodeById.get(state.id);
    if (!adminCode) continue;

    const cities = (citiesByAdmin.get(adminCode) || [])
      .map((c) => ({ ...c, parentId: state.id, tz: c.tz || state.tz }))
      .sort((a, b) => a.name.localeCompare(b.name));

    if (cities.length === 0) continue;

    fs.writeFileSync(
      path.join(citiesDir, `${state.id}.json`),
      JSON.stringify(cities, null, 2) + "\n",
    );
    totalCities += cities.length;
  }

  console.log(`  [${countryCode}] ${states.length} estados, ${totalCities} ciudades`);
  return { states: states.length, cities: totalCities };
}

function updateEnum(codes: string[]) {
  const raw = fs.readFileSync(ENUM_FILE, "utf-8");
  const existing = new Set<string>();
  for (const m of raw.matchAll(/^\s*([A-Z]{2})\s*=\s*"[A-Z]{2}"/gm)) existing.add(m[1]);

  const toAdd = codes.filter((c) => !existing.has(c));
  if (toAdd.length === 0) {
    console.log(`\n  CountryEnum ya contiene todos los códigos.`);
    return;
  }

  const all = Array.from(new Set([...existing, ...toAdd])).sort();
  const body = all.map((c) => `  ${c} = "${c}"`).join(",\n");
  const next = `export enum CountryEnum {\n${body}\n}\n`;
  fs.writeFileSync(ENUM_FILE, next);
  console.log(`\n  CountryEnum actualizado (+${toAdd.join(", ")})`);
}

function updateStateList(codes: string[]) {
  const raw = fs.readFileSync(STATE_LIST_FILE, "utf-8");
  const existing = new Set<string>();
  for (const m of raw.matchAll(/import\s+([A-Z]{2})_STATES\s+from/g)) existing.add(m[1]);

  const toAdd = codes.filter((c) => !existing.has(c));
  if (toAdd.length === 0) {
    console.log(`  state-list.ts ya contiene todos los códigos.`);
    return;
  }

  const all = Array.from(new Set([...existing, ...toAdd])).sort();
  const imports = all.map((c) => `import ${c}_STATES from "./${c}.json";`).join("\n");
  const entries = all.map((c) => `  [CountryEnum.${c}]: ${c}_STATES,`).join("\n");

  const next = `${imports}\n\nimport { State } from "../shared/interface/state-interface";\nimport { CountryEnum } from "../shared/enum";\n\nexport const LIST_STATE: { [key in CountryEnum]: State[] } = {\n${entries}\n};\n`;
  fs.writeFileSync(STATE_LIST_FILE, next);
  console.log(`  state-list.ts actualizado (+${toAdd.join(", ")})`);
}

function main() {
  const args = process.argv.slice(2).map((a) => a.toUpperCase()).filter((a) => /^[A-Z]{2}$/.test(a));
  if (args.length === 0) {
    console.error("\n  Uso: npm run import-geonames -- BO EC PT\n");
    process.exit(1);
  }

  if (!fs.existsSync(DUMP_DIR)) fs.mkdirSync(DUMP_DIR, { recursive: true });

  const imported: string[] = [];
  for (const code of args) {
    const result = importCountry(code);
    if (result.states > 0) imported.push(code);
  }

  if (imported.length === 0) {
    console.error("\n  Nada para integrar — descargá los dumps que faltan y volvé a correr.\n");
    process.exit(1);
  }

  updateEnum(imported);
  updateStateList(imported);

  console.log(`\n  Importado: ${imported.join(", ")}`);
  console.log(`  Siguiente paso: npm run build && npm run example:web\n`);
}

main();
