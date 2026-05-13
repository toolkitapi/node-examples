/**
 * Auth Toolkit — Password strength analysis
 * ===========================================
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx password_strength.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const PASSWORD = "P@ssw0rd"; // Try changing this
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.auth.password_strength({ password: PASSWORD });
console.log(JSON.stringify(result, null, 2));
