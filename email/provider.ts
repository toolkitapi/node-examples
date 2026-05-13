/**
 * Email Toolkit — Identify email provider
 * =========================================
 * Returns the email provider name, type, and MX record details
 * for a given domain or email address.
 *
 * Usage:
 *   export TOOLKITAPI_KEY=tk_live_...
 *   npx tsx provider.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const DOMAIN = "github.com";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.email.provider({ domain: DOMAIN });
console.log(JSON.stringify(result, null, 2));
