/**
 * Email Toolkit — Catch-all detection
 * =====================================
 * Returns whether a domain accepts all email addresses regardless of
 * whether the mailbox exists (catch-all / accept-all configuration).
 *
 * Usage:
 *   export TOOLKITAPI_KEY=tk_live_...
 *   npx tsx catch_all.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const DOMAIN = "github.com";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.email.catch_all({ domain: DOMAIN });
console.log(JSON.stringify(result, null, 2));
