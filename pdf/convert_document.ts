/**
 * PDF Toolkit — Convert document formats
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx convert_document.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.pdf.convert_document({
  url: "https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf",
  from_format: "pdf",
  to_format: "docx",
});
const bytes = result instanceof Buffer ? result.length : JSON.stringify(result).length;
console.log(JSON.stringify({ status: "ok", bytes }));
