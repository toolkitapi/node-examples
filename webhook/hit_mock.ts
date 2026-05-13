/**
 * Webhook Toolkit — Hit a mock endpoint
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx hit_mock.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const MOCK_ID = "your-mock-id-here"; // Replace with a real mock ID from create_mock.ts
const result = await tk.webhook.hit_mock_1(MOCK_ID);
console.log(JSON.stringify(result, null, 2));
