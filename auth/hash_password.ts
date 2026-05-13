/**
 * Auth Toolkit — Hash a password
 * ================================
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx hash_password.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.auth.hash_password({ password: "my-secret-password", algorithm: "bcrypt" });
console.log(JSON.stringify(result, null, 2));
