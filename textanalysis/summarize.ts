/**
 * Text Analysis Toolkit — Summarize text
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx summarize.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const TEXT = "Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals.";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.textanalysis.summarize({ text: TEXT, max_sentences: 2 });
console.log(JSON.stringify(result, null, 2));
