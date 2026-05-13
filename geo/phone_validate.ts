/**
 * Geo Toolkit — Phone number validation
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx phone_validate.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const PHONE = "+14155552671";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.geo.phone_validate({ number: PHONE });
console.log(JSON.stringify(result, null, 2));
