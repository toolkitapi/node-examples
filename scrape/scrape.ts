/**
 * Scrape Toolkit — Scrape a web page
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx scrape.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.scrape.scrape({ url: "https://toolkitapi.io/", type: "html" });
console.log(JSON.stringify(result, null, 2));
