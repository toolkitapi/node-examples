/**
 * Text Analysis Toolkit — PII / data masking
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx data_mask.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const TEXT = "Please call John Smith at 555-867-5309 or email john.smith@example.com about order #SSN-123-45-6789.";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.textanalysis.data_mask({ text: TEXT });
console.log(JSON.stringify(result, null, 2));
