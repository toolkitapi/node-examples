/**
 * Webhook Toolkit — List captured requests
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx list_requests.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const BIN_ID = "your-bin-id-here"; // Replace with a real bin ID from create_bin.ts
const result = await tk.webhook.list_requests(BIN_ID, { limit: 10 });
console.log(JSON.stringify(result, null, 2));
