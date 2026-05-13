/**
 * DNS Toolkit — WHOIS lookup
 * ===========================
 * Returns RDAP/WHOIS registration data: registrar, creation date, expiry,
 * nameservers, and registrant details.
 *
 * Usage:
 *   export TOOLKITAPI_KEY=tk_live_...
 *   npx tsx whois.ts
 */

import { ToolkitAPI } from "@toolkitapi/node-sdk";

const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }

const DOMAIN = "github.com";

const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.dns.whois({ domain: DOMAIN });
console.log(JSON.stringify(result, null, 2));
