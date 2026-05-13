/**
 * Text Analysis Toolkit — Text similarity
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx text_similarity.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.textanalysis.text_similarity({
  a: "The quick brown fox jumps over the lazy dog",
  b: "A fast brown fox leaps across a sleepy dog",
});
console.log(JSON.stringify(result, null, 2));
