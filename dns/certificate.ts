/**
 * DNS Toolkit — SSL certificate inspection
 * ==========================================
 * Returns TLS certificate details: issuer, validity dates, SANs,
 * protocol version, cipher suite, and days until expiry.
 *
 * Usage:
 *   export TOOLKITAPI_KEY=tk_live_...
 *   npx tsx certificate.ts
 */

import { ToolkitAPI } from "@toolkitapi/node-sdk";

const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }

const DOMAIN = "github.com";

const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.dns.certificate({ domain: DOMAIN });
console.log(JSON.stringify(result, null, 2));
