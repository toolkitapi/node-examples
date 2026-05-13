/**
 * Webhook Toolkit — Create a request bin
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx create_bin.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.webhook.create_bin();
console.log(JSON.stringify(result, null, 2));
