/**
 * DevTools Toolkit — Validate JSON
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx json_validate.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.devtools.json_validate({ data: '{"name": "Alice", "age": 30, "active": true}' });
console.log(JSON.stringify(result, null, 2));
