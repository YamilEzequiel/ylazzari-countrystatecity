// generate-cities-index.ts
import * as fs from "fs";
import * as path from "path";

const baseDir = path.resolve(process.cwd(), "./src/cities");
const outputFile = path.resolve(process.cwd(), "./src/cities/cities-index.ts");

const imports: string[] = [];
const mapEntries: string[] = [];

fs.readdirSync(baseDir).forEach((countryCode) => {
  const countryPath = path.join(baseDir, countryCode);
  if (!fs.statSync(countryPath).isDirectory()) return;

  fs.readdirSync(countryPath).forEach((file) => {
    const stateId = path.basename(file, ".json");
    const importName = `${countryCode}_${stateId}`;
    const importPath = `./${countryCode}/${stateId}.json`;

    imports.push(`import ${importName} from '${importPath}';`);
    mapEntries.push(`["${countryCode}/${stateId}"]: ${importName},`);
  });
});

const result = `${imports.join("\n")}

export const LIST_CITIES:  { [key in string]: any[] } = {
${mapEntries.join("\n")}
};
`;

fs.writeFileSync(outputFile, result);
console.log("cities-index.ts generado ✅");
