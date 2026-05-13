/**
 * Auth Toolkit — Generate a cryptographic key / API key / UUID
 * ==============================================================
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx generate_key.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const KEY_TYPE = "api-key"; // api-key | uuid-v4 | nanoid | secret
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.auth.generate_key({ type: KEY_TYPE });
console.log(JSON.stringify(result, null, 2));
