/**
 * DNS Toolkit — Lookup all record types at once
 * ===============================================
 * Queries A, AAAA, MX, TXT, CNAME, NS, SOA, CAA, and SRV records in a
 * single request and returns everything found.
 *
 * Usage:
 *   export TOOLKITAPI_KEY=tk_live_...
 *   npx tsx lookup_all.ts
 */

import { ToolkitAPI } from "@toolkitapi/node-sdk";

const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }

const DOMAIN = "github.com";

const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.dns.lookup_all({ domain: DOMAIN });
console.log(JSON.stringify(result, null, 2));
