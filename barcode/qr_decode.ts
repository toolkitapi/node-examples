/**
 * Barcode Toolkit — Decode a QR code from an image URL
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx qr_decode.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const QR_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Qr-code-ver-10.svg/250px-Qr-code-ver-10.svg.png";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.barcode.qr_decode({ url: QR_URL });
console.log(JSON.stringify(result, null, 2));
