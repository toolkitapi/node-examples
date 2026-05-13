/**
 * Auth Toolkit — Generate a TOTP secret and QR code
 * ====================================================
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx totp_generate.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.auth.totp_generate({ issuer: "MyApp", account_name: "user@example.com", digits: 6, period: 30 });
console.log(JSON.stringify(result, null, 2));
