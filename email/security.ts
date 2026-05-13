/**
 * Email Toolkit — Security posture check
 * ========================================
 * Audits a domain's email security configuration: SPF, DMARC, DKIM,
 * MTA-STS, BIMI, and DNSSEC.
 *
 * Usage:
 *   export TOOLKITAPI_KEY=tk_live_...
 *   npx tsx security.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const DOMAIN = "github.com";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.email.security({ domain: DOMAIN });
console.log(JSON.stringify(result, null, 2));
