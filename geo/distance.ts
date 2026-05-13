/**
 * Geo Toolkit — Distance between two coordinates
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx distance.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.geo.distance({
  points: [
    { lat: 51.5074, lon: -0.1278 }, // London
    { lat: 48.8566, lon:  2.3522 }, // Paris
  ],
  unit: "km",
});
console.log(JSON.stringify(result, null, 2));
