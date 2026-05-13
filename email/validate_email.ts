/**
 * Email Toolkit — Validate an email address
 * ===========================================
 * Checks deliverability, MX records, and syntax in one call.
 *
 * Usage:
 *   export TOOLKITAPI_KEY=tk_live_...
 *   npx tsx validate_email.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const EMAIL = "user@github.com";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.email.validate_email({ email: EMAIL });
console.log(JSON.stringify(result, null, 2));
