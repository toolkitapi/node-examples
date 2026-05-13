/**
 * DevTools Toolkit — Text diff
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx diff_text.ts
 */
import { ToolkitAPI } from "@toolkitapi/node-sdk";
const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }
const tk = new ToolkitAPI("https://toolkitapi.io/", API_KEY);
const result = await tk.devtools.diff_text({
  a: "Hello World\nThis is line two\nThis is line three",
  b: "Hello World\nThis is line 2 (changed)\nThis is line three\nNew fourth line",
});
console.log(JSON.stringify(result, null, 2));
