/**
 * DevTools Toolkit — Validate YAML
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx yaml_validate.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.devtools.yaml_validate({ data: "name: Alice\nage: 30\nactive: true\n" });
console.log(JSON.stringify(result, null, 2));
