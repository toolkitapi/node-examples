/**
 * Auth Toolkit — Verify and decode a JWT token
 * ==============================================
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx jwt_verify.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyLTEyMyIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsImV4cCI6NDEwMjQ0NDgwMH0.ZndjhWS50XzbLR3Fg4SFSF8-zSBhFW-gRb3IjsViCY0";
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.auth.jwt_verify({ token: TOKEN, secret: "my-signing-secret" });
console.log(JSON.stringify(result, null, 2));
