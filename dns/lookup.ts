/**
 * DNS Toolkit — Lookup DNS records
 * ==================================
 * Look up A, AAAA, MX, TXT, CNAME, NS, SOA, CAA, or SRV records for a domain.
 *
 * Usage:
 *   export TOOLKITAPI_KEY=tk_live_...
 *   npx tsx lookup.ts
 */

import { ToolkitAPI } from "@toolkitapi/node-sdk";

const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }

const DOMAIN = "github.com";
const RECORD_TYPE = "A"; // Change to MX, TXT, AAAA, NS, etc.

const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.dns.lookup({ domain: DOMAIN, _type: RECORD_TYPE });
console.log(JSON.stringify(result, null, 2));
