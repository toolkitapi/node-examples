/**
 * Scrape Toolkit — Keyword density
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx seo_keyword_density.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.scrape.seo_keyword_density({ url: "https://toolkitapi.io/" });
console.log(JSON.stringify(result, null, 2));
