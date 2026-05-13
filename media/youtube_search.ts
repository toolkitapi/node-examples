/**
 * Media Toolkit — YouTube search
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx youtube_search.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.media.youtube_search({ query: "python REST API tutorial" });
console.log(JSON.stringify(result, null, 2));
