/**
 * Convert Toolkit — JSON to TypeScript interfaces
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx json_to_typescript.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.convert.json_to_typescript({ data: {"user": {"id": 1, "name": "Alice", "email": "alice@example.com", "active": true, "tags": ["admin", "editor"]}} as unknown as Record<string, unknown> });
console.log(JSON.stringify(result, null, 2));
