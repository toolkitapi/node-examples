/**
 * Barcode Toolkit — Bulk QR code generation
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx qr_bulk.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.barcode.qr_bulk({
  items: [
    { data: "https://toolkitapi.io/", size: 200 },
    { data: "https://github.com", size: 200 },
    { data: "Contact: Jane Doe | jane@example.com", size: 300 },
  ],
});
console.log(JSON.stringify(result, null, 2));
