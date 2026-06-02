const http = require("http");
const fs = require("fs");
const path = require("path");

const distPath = path.join(__dirname, "..", "dist");
if (!fs.existsSync(distPath)) {
  console.error("\n[example] No se encontró /dist. Corré primero: npm run build\n");
  process.exit(1);
}

const { CountryService, StateService, CityService, CountryEnum, Language } = require(distPath);

const countryService = new CountryService();
const stateService = new StateService();
const cityService = new CityService();

const PORT = process.env.PORT || 3000;

function json(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(body));
}

function notFound(res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not found");
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const parts = url.pathname.split("/").filter(Boolean);

  if (req.method !== "GET") return notFound(res);

  if (url.pathname === "/" || url.pathname === "/index.html") {
    const html = fs.readFileSync(path.join(__dirname, "index.html"));
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(html);
  }

  if (parts[0] !== "api") return notFound(res);

  try {
    if (parts[1] === "countries" && parts.length === 2) {
      const lang = url.searchParams.get("lang");
      if (lang && Language && Object.values(Language).includes(lang)) {
        return json(res, 200, countryService.getCountriesByLanguage(lang));
      }
      return json(res, 200, countryService.getAllCountriesOnlyNames());
    }

    if (parts[1] === "states" && parts.length === 3) {
      const country = parts[2].toUpperCase();
      if (!CountryEnum[country]) {
        return json(res, 400, { error: `Country no soportado: ${country}` });
      }
      const states = stateService.getStatesByCountry(country) || [];
      return json(res, 200, states);
    }

    if (parts[1] === "cities" && parts.length === 4) {
      const country = parts[2].toUpperCase();
      const stateId = Number(parts[3]);
      if (!CountryEnum[country]) {
        return json(res, 400, { error: `Country no soportado: ${country}` });
      }
      if (!Number.isFinite(stateId)) {
        return json(res, 400, { error: `stateId inválido: ${parts[3]}` });
      }
      const cities = cityService.getCitiesByCountryAndState(country, stateId);
      return json(res, 200, cities);
    }

    return notFound(res);
  } catch (err) {
    return json(res, 404, { error: err.message });
  }
});

server.listen(PORT, () => {
  console.log(`\n  ylazzari-countrystatecity — example`);
  console.log(`  Abrí: http://localhost:${PORT}\n`);
});
