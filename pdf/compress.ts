/**
 * PDF Toolkit — Compress PDF
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx compress.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.pdf.compress({ url: "https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf" });
console.log(JSON.stringify(result, null, 2));
