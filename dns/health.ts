/**
 * DNS Toolkit — DNS health audit
 * ================================
 * Audits a domain's DNS configuration and returns a score, grade, and
 * a list of specific checks (NS redundancy, SPF, DMARC, DNSSEC, etc.).
 *
 * Usage:
 *   export TOOLKITAPI_KEY=tk_live_...
 *   npx tsx health.ts
 */

import { ToolkitAPI } from "@toolkitapi/node-sdk";

const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }

const DOMAIN = "github.com";

const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.dns.health({ domain: DOMAIN });
console.log(JSON.stringify(result, null, 2));
