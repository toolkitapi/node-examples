/**
 * Auth Toolkit — Generate a JWT token
 * =====================================
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx jwt_generate.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.auth.jwt_generate({
  payload: { sub: "user-123", role: "admin", email: "user@example.com" },
  secret: "my-signing-secret",
  algorithm: "HS256",
  expires_in: 3600,
});
console.log(JSON.stringify(result, null, 2));
