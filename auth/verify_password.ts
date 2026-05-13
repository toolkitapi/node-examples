/**
 * Auth Toolkit — Verify a password against a stored hash
 * ========================================================
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx verify_password.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const HASH = "$2b$12$0gD/ehYhcSa.RmJucefFRuzIA3ox5EedHrJ86DNweHYIu.eYMF50y";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.auth.verify_password({ password: "my-secret-password", hash: HASH });
console.log(JSON.stringify(result, null, 2));
