/**
 * Media Toolkit — YouTube transcript
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx youtube_transcript.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.media.youtube_transcript({ url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" });
console.log(JSON.stringify(result, null, 2));
