/**
 * Webhook Toolkit — Create a mock endpoint
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx create_mock.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.webhook.create_mock({ status_code: 200, headers: { "Content-Type": "application/json" }, body: '{"ok": true, "message": "Mock response"}' });
console.log(JSON.stringify(result, null, 2));
