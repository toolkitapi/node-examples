/**
 * Text Analysis Toolkit — Profanity filter
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx profanity_filter.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const TEXT = "This is a clean sentence with no bad words in it at all.";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.textanalysis.profanity_filter({ text: TEXT });
console.log(JSON.stringify(result, null, 2));
