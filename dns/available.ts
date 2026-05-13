/**
 * DNS Toolkit — Domain availability check
 * =========================================
 * Returns whether a domain name is available to register.
 *
 * Usage:
 *   export TOOLKITAPI_KEY=tk_live_...
 *   npx tsx available.ts
 */

import { ToolkitAPI } from "@toolkitapi/node-sdk";

const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }

const DOMAIN = "toolkitapi-test-xyz-99999.com"; // Replace with the domain you want to check

const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.dns.available({ domain: DOMAIN });
console.log(JSON.stringify(result, null, 2));
