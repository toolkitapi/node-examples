/**
 * Auth Toolkit — Encrypt plaintext data (AES-GCM)
 * ==================================================
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx encrypt.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.auth.encrypt({ plaintext: "Sensitive data: SSN 123-45-6789", key: "0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20" });
console.log(JSON.stringify(result, null, 2));
