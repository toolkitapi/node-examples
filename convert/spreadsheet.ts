/**
 * Convert Toolkit — Convert spreadsheet formats
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx spreadsheet.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.convert.spreadsheet({ url: "https://raw.githubusercontent.com/datasets/s-and-p-500-companies/main/data/constituents.csv", from_format: "csv", to_format: "xlsx" });
console.log(JSON.stringify(result, null, 2));
