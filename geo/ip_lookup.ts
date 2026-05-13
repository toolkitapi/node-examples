/**
 * Geo Toolkit — IP geolocation lookup
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx ip_lookup.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const IP = "8.8.8.8";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.geo.ip_lookup({ ip: IP });
console.log(JSON.stringify(result, null, 2));
