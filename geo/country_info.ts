/**
 * Geo Toolkit — Country information
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx country_info.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const COUNTRY_CODE = "DE";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.geo.country_info({ code: COUNTRY_CODE });
console.log(JSON.stringify(result, null, 2));
