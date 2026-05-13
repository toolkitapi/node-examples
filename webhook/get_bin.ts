/**
 * Webhook Toolkit — Get bin details
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx get_bin.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const BIN_ID = "your-bin-id-here"; // Replace with a real bin ID from create_bin.ts
const result = await tk.webhook.get_bin(BIN_ID);
console.log(JSON.stringify(result, null, 2));
