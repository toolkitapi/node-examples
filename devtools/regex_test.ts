/**
 * DevTools Toolkit — Regex test
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx regex_test.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.devtools.regex_test({
  pattern: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b",
  text: "Server at 192.168.1.1 and backup at 10.0.0.254 are online.",
});
console.log(JSON.stringify(result, null, 2));
