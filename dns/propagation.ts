/**
 * DNS Toolkit — DNS propagation check
 * =====================================
 * Checks whether a DNS record has propagated across 20+ global resolvers.
 * Useful after making DNS changes to see how widely they've spread.
 *
 * Usage:
 *   export TOOLKITAPI_KEY=tk_live_...
 *   npx tsx propagation.ts
 */

import { ToolkitAPI } from "@toolkitapi/node-sdk";

const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }

const DOMAIN = "github.com";
const RECORD_TYPE = "A"; // Change to MX, TXT, NS, etc.

const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.dns.propagation({ domain: DOMAIN, _type: RECORD_TYPE });
console.log(JSON.stringify(result, null, 2));
