/**
 * Text Analysis Toolkit — Word frequency
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx word_frequency.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const TEXT = "The quick brown fox jumps over the lazy dog. The dog barked at the fox. The fox ran away quickly.";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.textanalysis.word_frequency({ text: TEXT, top_n: 10 });
console.log(JSON.stringify(result, null, 2));
