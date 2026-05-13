/**
 * Convert Toolkit — Convert data formats (JSON → CSV)
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx data.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.convert.data({ data: [{"name":"Alice","age":30},{"name":"Bob","age":25}] as unknown as Record<string,unknown>, from_format: "json", to_format: "csv" });
console.log(JSON.stringify(result, null, 2));
