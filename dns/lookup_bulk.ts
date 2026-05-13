/**
 * DNS Toolkit — Bulk DNS lookup
 * ==============================
 * Look up DNS records for multiple domains in a single request.
 *
 * Usage:
 *   export TOOLKITAPI_KEY=tk_live_...
 *   npx tsx lookup_bulk.ts
 */

import { ToolkitAPI } from "@toolkitapi/node-sdk";

const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }

const DOMAINS = ["github.com", "python.org", "nodejs.org"];
const RECORD_TYPE = "MX"; // Change to A, TXT, NS, etc.

const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.dns.lookup_bulk(
  { _type: RECORD_TYPE },
  DOMAINS as unknown as Record<string, unknown>
);
console.log(JSON.stringify(result, null, 2));
