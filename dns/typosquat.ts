/**
 * DNS Toolkit — Typosquat detection
 * ====================================
 * Returns a list of lookalike domains generated using common typosquatting
 * techniques (insertion, deletion, replacement, homoglyphs, etc.), plus
 * whether each variant resolves to a live IP address.
 *
 * Usage:
 *   export TOOLKITAPI_KEY=tk_live_...
 *   npx tsx typosquat.ts
 */

import { ToolkitAPI } from "@toolkitapi/node-sdk";

const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }

const DOMAIN = "github.com";

const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.dns.typosquat({ domain: DOMAIN });
console.log(JSON.stringify(result, null, 2));
