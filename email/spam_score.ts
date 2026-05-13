/**
 * Email Toolkit — Spam score
 * ===========================
 * Scores email content against spam filter rules and highlights
 * which signals trigger a flag.
 *
 * Usage:
 *   export TOOLKITAPI_KEY=tk_live_...
 *   npx tsx spam_score.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.email.spam_score({}, {
  subject: "URGENT: You won a prize! Click here NOW!!!",
  body: "Congratulations! You have been selected. Click the link to claim your FREE reward.",
  from: "noreply@promo-offer.biz",
});
console.log(JSON.stringify(result, null, 2));
