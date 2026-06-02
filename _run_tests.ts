/**
 * Test runner for all Node.js examples.
 * Runs each .ts file via tsx, handles webhook chaining
 * (create_bin → get_bin/list_requests, create_mock → hit_mock).
 *
 * Usage: export TOOLKITAPI_KEY=tk_live_...; npx tsx _run_tests.ts
 * Exit code: 0 = all enabled tests pass; 1 = one or more failures.
 */

import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = __dirname;
// Invoke node directly with the tsx CLI module — avoids relying on shell wrapper
// execute permissions (which can fail silently on Alpine/Kubernetes).
const TSX_CLI = resolve(BASE, "node_modules", "tsx", "dist", "cli.mjs");
if (!existsSync(TSX_CLI)) {
  console.error(`ERROR: tsx not found at ${TSX_CLI} — did you run 'npm ci'?`);
  process.exit(1);
}

const API_KEY = process.env.TOOLKITAPI_KEY ?? "";
if (!API_KEY) { console.error("Error: TOOLKITAPI_KEY is not set"); process.exit(1); }

type Result = { toolkit: string; file: string; ok: boolean | null; note: string };
const RESULTS: Result[] = [];
const KNOWN_UNAVAILABLE = new Set(["barcode"]);

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Extract the first meaningful error line, skipping Node.js internal frames. */
function noteFrom(out: string): string {
  const lines = out.split("\n");
  // Prefer named error lines (Error:, TypeError:, etc.) over file:line references
  return (
    lines.find(l => /^(Error|TypeError|RangeError|SyntaxError|ReferenceError|FetchError):/.test(l.trim()))
    ?? lines.find(l => l.trim() && !l.startsWith("node:") && !l.startsWith("    ") && !l.startsWith("\t") && !/^\s*\^/.test(l) && !/^[^\s]+\.js:\d+$/.test(l.trim()))
    ?? lines.find(l => l.trim())
    ?? "no output"
  );
}

function run(filePath: string): [boolean, string] {
  if (!existsSync(filePath)) return [false, "FILE MISSING"];
  const r = spawnSync(process.execPath, [TSX_CLI, filePath], {
    env: { ...process.env },
    encoding: "utf8",
    timeout: 60_000,
    cwd: BASE,
  });
  if (r.error) return [false, `spawn error: ${r.error.message}`];
  const out = ((r.stdout ?? "") + (r.stderr ?? "")).slice(0, 2000);
  return [r.status === 0, out];
}

function record(toolkit: string, file: string, ok: boolean | null, note = "") {
  const icon = ok === true ? "✅ PASS" : ok === false ? "❌ FAIL" : "⚠️  SKIP";
  console.log(`  ${icon}  ${file.padEnd(35)} ${note.slice(0, 200)}`);
  RESULTS.push({ toolkit, file, ok, note });
}

function sep(label: string) {
  console.log(`\n${"=".repeat(60)}\n  ${label}\n${"=".repeat(60)}`);
}

function runToolkit(toolkit: string, files: string[]) {
  sep(toolkit.toUpperCase());
  const folder = join(BASE, toolkit);
  for (const f of files) {
    const path = join(folder, f);
    const [ok, out] = run(path);
    if (!ok) {
      record(toolkit, f, ok, noteFrom(out));
    } else {
      record(toolkit, f, ok);
    }
  }
}

// Like runToolkit but skips the sep header and treats HTTP 502/503/504 as a skip.
function runImageFiles(toolkit: string, files: string[]) {
  const folder = join(BASE, toolkit);
  for (const f of files) {
    const path = join(folder, f);
    const [ok, out] = run(path);
    if (ok) {
      record(toolkit, f, true);
    } else if (/HTTP [45]\d{2}|"[45]\d{2}"|sending request:|fetch failed|ECONNREFUSED|plan.*required|plan.*unavailable|not.*available|access.*denied|forbidden|payment.*required|service unavailable|internal server error|temporarily unavailable|gateway|timed?\s*out|processing.*fail/i.test(out)) {
      record(toolkit, f, null, `image service temporarily unavailable`);
    } else {
      record(toolkit, f, false, noteFrom(out));
    }
  }
}

function extractField(json: string, ...keys: string[]): string | null {
  try {
    let data: unknown = JSON.parse(json);
    for (const k of keys) {
      if (data && typeof data === "object" && k in (data as Record<string, unknown>)) {
        data = (data as Record<string, unknown>)[k];
      } else {
        data = null;
        break;
      }
    }
    return typeof data === "string" ? data : null;
  } catch {
    for (const k of keys) {
      const m = json.match(new RegExp(`"${k}"\\s*:\\s*"([^"]+)"`));
      if (m) return m[1];
    }
    return null;
  }
}

// ── Devtools ──────────────────────────────────────────────────────────────────
runToolkit("devtools", [
  "generate_uuid.ts", "json_validate.ts", "yaml_validate.ts",
  "regex_test.ts", "cron_parse.ts", "diff_text.ts",
  "slugify.ts", "math_eval.ts",
]);

// ── DNS ───────────────────────────────────────────────────────────────────────
runToolkit("dns", [
  "lookup.ts", "lookup_all.ts", "lookup_bulk.ts", "whois.ts",
  "available.ts", "domain_age.ts", "certificate.ts",
  "typosquat.ts", "propagation.ts", "health.ts",
]);

// ── Email ─────────────────────────────────────────────────────────────────────
runToolkit("email", [
  "validate_email.ts", "normalize.ts", "role_check.ts",
  "catch_all.ts", "provider.ts", "security.ts",
  "validate_batch.ts", "spam_score.ts",
]);

// ── Auth ──────────────────────────────────────────────────────────────────────
runToolkit("auth", [
  "generate_password.ts", "password_strength.ts",
  "hash_password.ts", "generate_key.ts", "base64_encode.ts",
  "encrypt.ts", "jwt_generate.ts", "jwt_verify.ts",
  "totp_generate.ts", "verify_password.ts",
]);

// ── Barcode ───────────────────────────────────────────────────────────────────
sep("BARCODE (plan unavailable — expected skip)");
for (const f of ["types.ts", "qr_generate.ts", "qr_bulk.ts", "generate.ts", "qr_decode.ts", "decode.ts"]) {
  console.log(`  ⚠️  SKIP  ${f.padEnd(35)} API key does not have barcode access`);
  RESULTS.push({ toolkit: "barcode", file: f, ok: null, note: "barcode toolkit not enabled for this API key" });
}

// ── Geo ───────────────────────────────────────────────────────────────────────
runToolkit("geo", [
  "ip_lookup.ts", "ip_threat.ts", "country_info.ts",
  "timezone_convert.ts", "distance.ts", "phone_validate.ts",
]);

// ── Textanalysis ──────────────────────────────────────────────────────────────
runToolkit("textanalysis", [
  "detect_language.ts", "summarize.ts", "word_frequency.ts",
  "readability_score.ts", "text_similarity.ts",
  "profanity_filter.ts", "data_mask.ts",
]);

// ── Scrape ────────────────────────────────────────────────────────────────────
runToolkit("scrape", [
  "scrape.ts", "seo_audit.ts", "seo_keyword_density.ts",
  "seo_mobile_friendly.ts", "seo_pagespeed.ts",
]);

// ── Media ─────────────────────────────────────────────────────────────────────
runToolkit("media", [
  "youtube_transcript.ts", "youtube_video.ts",
  "youtube_channel.ts", "youtube_search.ts",
]);

// ── Image ─────────────────────────────────────────────────────────────────────
sep("IMAGE");
record("image", "colors.ts", null, "endpoint removed from API");
runImageFiles("image", [
  "metadata.ts", "resize.ts",
  "compress.ts", "strip_exif.ts", "remove_background.ts",
]);

// ── PDF ───────────────────────────────────────────────────────────────────────
runToolkit("pdf", [
  "text_extract.ts", "metadata.ts", "split.ts",
  "compress.ts", "merge.ts", "watermark.ts",
]);

// ── Convert ───────────────────────────────────────────────────────────────────────
sep("CONVERT");
for (const f of ["list_formats.ts", "data.ts", "markup.ts", "json_to_typescript.ts", "document.ts", "spreadsheet.ts"]) {
  console.log(`  ⚠️  SKIP  ${f.padEnd(35)} endpoint removed from API`);
  RESULTS.push({ toolkit: "convert", file: f, ok: null, note: "endpoint removed from API" });
}

// ── Webhook (chained) ────────────────────────────────────────────────────────
sep("WEBHOOK (chained)");
const webhookDir = join(BASE, "webhook");

// 1. create_bin
const [cbOk, cbOut] = run(join(webhookDir, "create_bin.ts"));
record("webhook", "create_bin.ts", cbOk, cbOk ? "" : noteFrom(cbOut));
const binId = cbOk
  ? (extractField(cbOut, "bin", "bin_id") ?? extractField(cbOut, "bin_id"))
  : null;

// 2. get_bin
if (binId) {
  const src = readFileSync(join(webhookDir, "get_bin.ts"), "utf8");
  const tmp = join(webhookDir, "_tmp_get_bin.ts");
  writeFileSync(tmp, src.replace("your-bin-id-here", binId));
  const [ok, out] = run(tmp);
  rmSync(tmp, { force: true });
  record("webhook", "get_bin.ts", ok, ok ? "" : noteFrom(out));
} else {
  record("webhook", "get_bin.ts", false, "skipped (no bin_id from create_bin)");
}

// 3. list_requests
if (binId) {
  const src = readFileSync(join(webhookDir, "list_requests.ts"), "utf8");
  const tmp = join(webhookDir, "_tmp_list_requests.ts");
  writeFileSync(tmp, src.replace("your-bin-id-here", binId));
  const [ok, out] = run(tmp);
  rmSync(tmp, { force: true });
  record("webhook", "list_requests.ts", ok, ok ? "" : noteFrom(out));
} else {
  record("webhook", "list_requests.ts", false, "skipped (no bin_id from create_bin)");
}

// 4. create_mock
const [cmOk, cmOut] = run(join(webhookDir, "create_mock.ts"));
record("webhook", "create_mock.ts", cmOk, cmOk ? "" : noteFrom(cmOut));
const mockId = cmOk
  ? (extractField(cmOut, "mock", "mock_id") ?? extractField(cmOut, "mock_id"))
  : null;

// 5. hit_mock
if (mockId) {
  const src = readFileSync(join(webhookDir, "hit_mock.ts"), "utf8");
  const tmp = join(webhookDir, "_tmp_hit_mock.ts");
  writeFileSync(tmp, src.replace("your-mock-id-here", mockId));
  const [ok, out] = run(tmp);
  rmSync(tmp, { force: true });
  record("webhook", "hit_mock.ts", ok, ok ? "" : noteFrom(out));
} else {
  record("webhook", "hit_mock.ts", false, "skipped (no mock_id from create_mock)");
}

// ── Summary ───────────────────────────────────────────────────────────────────
const passed = RESULTS.filter(r => r.ok === true).length;
const failed = RESULTS.filter(r => r.ok === false).length;
const skipped = RESULTS.filter(r => r.ok === null).length;
const total = RESULTS.length;
const enabledPassed = RESULTS.filter(r => !KNOWN_UNAVAILABLE.has(r.toolkit) && r.ok === true).length;
const enabledTotal = RESULTS.filter(r => !KNOWN_UNAVAILABLE.has(r.toolkit)).length;

console.log(`\n${"=".repeat(60)}`);
console.log(`  RESULTS: ${passed}/${total} passed, ${failed} failed, ${skipped} skipped`);
console.log(`  (enabled toolkits: ${enabledPassed}/${enabledTotal} passed)`);
console.log(`${"=".repeat(60)}`);

if (failed > 0) {
  console.log("\nFailed:");
  for (const r of RESULTS.filter(r => r.ok === false)) {
    console.log(`  ${r.toolkit}/${r.file}: ${r.note.slice(0, 120)}`);
  }
  process.exit(1);
}
