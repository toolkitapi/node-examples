/**
 * Image Toolkit — Resize image (saves binary result to file)
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx resize.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.image.resize({ url: "https://avatars.githubusercontent.com/u/9919", width: 200, height: 200 });
console.log(JSON.stringify(result, null, 2));
