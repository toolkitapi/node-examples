/**
 * Email Toolkit — Role account detection
 * ========================================
 * Detects whether an email belongs to a role account (info@, support@,
 * noreply@, etc.) rather than a real person.
 *
 * Usage:
 *   export TOOLKITAPI_KEY=tk_live_...
 *   npx tsx role_check.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const EMAIL = "noreply@github.com";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.email.role_check({ email: EMAIL });
console.log(JSON.stringify(result, null, 2));
