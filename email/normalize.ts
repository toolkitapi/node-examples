/**
 * Email Toolkit — Normalize an email address
 * ============================================
 * Normalizes Gmail dot-tricks, plus-aliases, and provider-specific
 * quirks so you can deduplicate addresses reliably.
 *
 * Usage:
 *   export TOOLKITAPI_KEY=tk_live_...
 *   npx tsx normalize.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const EMAIL = "user.name+tag@gmail.com";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.email.normalize({ email: EMAIL });
console.log(JSON.stringify(result, null, 2));
