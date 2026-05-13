/**
 * DevTools Toolkit — Parse cron expression
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx cron_parse.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.devtools.cron_parse({ expression: "0 9 * * 1-5", count: 5, tz: "America/New_York" });
console.log(JSON.stringify(result, null, 2));
