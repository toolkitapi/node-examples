/**
 * Geo Toolkit — Timezone conversion
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx timezone_convert.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.geo.timezone_convert({
  timestamp: "2026-06-15T14:30:00",
  from: "America/New_York",
  to: "Asia/Tokyo",
});
console.log(JSON.stringify(result, null, 2));
