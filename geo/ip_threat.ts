/**
 * Geo Toolkit — IP threat intelligence
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx ip_threat.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const IP = "1.1.1.1";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.geo.ip_threat({ ip: IP });
console.log(JSON.stringify(result, null, 2));
