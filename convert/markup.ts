/**
 * Convert Toolkit — Convert markup formats (Markdown → HTML)
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx markup.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.convert.markup({ content: "# Hello World\n\nThis is a **bold** paragraph with a [link](https://toolkitapi.io).", from_format: "markdown", to_format: "html" });
console.log(JSON.stringify(result, null, 2));
