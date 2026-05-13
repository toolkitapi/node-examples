/**
 * Auth Toolkit — Generate a secure random password
 * ==================================================
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx generate_password.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.auth.generate_password({ length: 20, uppercase: true, lowercase: true, numbers: true, symbols: true, count: 5 });
console.log(JSON.stringify(result, null, 2));
