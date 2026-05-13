/**
 * Text Analysis Toolkit — Detect language
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx detect_language.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const TEXT = "Bonjour, comment allez-vous aujourd'hui?";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.textanalysis.detect_language({ text: TEXT });
console.log(JSON.stringify(result, null, 2));
