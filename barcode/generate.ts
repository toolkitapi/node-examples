/**
 * Barcode Toolkit — Generate a linear barcode (CODE128, EAN-13, etc.)
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx generate.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.barcode.generate({ data: "1234567890128", barcode_type: "CODE128", width: 300, height: 100 });
console.log(JSON.stringify(result, null, 2));
