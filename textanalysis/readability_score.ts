/**
 * Text Analysis Toolkit — Readability score
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx readability_score.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const TEXT = "The cat sat on the mat. It was a sunny day. The children played outside in the park near the old oak tree.";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.textanalysis.readability_score({ text: TEXT });
console.log(JSON.stringify(result, null, 2));
