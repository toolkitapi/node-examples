/**
 * Barcode Toolkit — Decode a barcode from an image URL
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx decode.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const BARCODE_URL = "https://upload.wikimedia.org/wikipedia/commons/8/84/EAN13.svg";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.barcode.decode({ url: BARCODE_URL });
console.log(JSON.stringify(result, null, 2));
