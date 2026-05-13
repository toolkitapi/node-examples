/**
 * Image Toolkit — Compress image (saves binary result to file)
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx compress.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.image.compress({ url: "https://httpbin.org/image/png", quality: 75, format: "jpeg" });
console.log(JSON.stringify(result, null, 2));
