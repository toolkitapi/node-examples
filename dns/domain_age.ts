/**
 * DNS Toolkit — Domain age
 * =========================
 * Returns how old a domain is based on its WHOIS creation date.
 *
 * Usage:
 *   export TOOLKITAPI_KEY=tk_live_...
 *   npx tsx domain_age.ts
 */

import { ToolkitAPI } from "@toolkitapi/node-sdk";

const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }

const DOMAIN = "github.com";

const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.dns.domain_age({ domain: DOMAIN });
console.log(JSON.stringify(result, null, 2));
