// Run with: node scripts/merge-translations.mjs
// Reads .translations.json and merges *Zh fields into the data files.
//
// Strategy: parse the existing TS, find object literal entries by id, and
// inject sibling Zh fields. Done as a one-shot script — not part of build.

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const T = JSON.parse(readFileSync(resolve(ROOT, ".translations.json"), "utf8"));

function tsString(s) {
  // Render a JS string as a TS string literal. Use double quotes; escape
  // double-quote, backslash, newline. Preserve \n as \n in output (since
  // JSON parses \\n into a real newline char and we need it back as the
  // 2-char escape inside the TS file).
  return (
    '"' +
    s
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"')
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "") +
    '"'
  );
}

function tsArray(arr, indent = "      ") {
  if (!arr || arr.length === 0) return "[]";
  return (
    "[\n" +
    arr.map((s) => indent + "  " + tsString(s) + ",").join("\n") +
    "\n" +
    indent +
    "]"
  );
}

// ---- 1. projects.ts ----
{
  const path = resolve(ROOT, "src/data/projects.ts");
  let src = readFileSync(path, "utf8");

  // Add new optional zh fields to interface
  const interfaceAddon = `
  subtitleZh?: string;
  storyZh?: string;
  roleZh?: string;
  highlightsLabelZh?: string;
  highlightsZh?: string[];
  metricsZh?: string[];
  cardShortZh?: string;
  detailLongZh?: string;
  featureHighlightZh?: { label: string; text: string };`;

  src = src.replace(
    /  award\?: string;\n}/,
    `  award?: string;${interfaceAddon}\n}`,
  );

  // For each project id, inject zh fields just after the closing of detailLong (which ends with ", or "...,").
  // Each project block is a top-level entry { id: "X", ..., detailLong: "..." }, ends with "},".
  for (const [pid, fields] of Object.entries(T.projects)) {
    const startIdx = src.indexOf(`id: "${pid}"`);
    if (startIdx === -1) {
      console.error(`[projects] missing id ${pid}`);
      continue;
    }
    // Find the closing "  }," of this project entry.
    let depth = 0;
    let inString = false;
    let stringChar = "";
    let i = src.indexOf("{", startIdx - 50);
    if (i === -1) throw new Error("brace not found");
    let endIdx = -1;
    for (; i < src.length; i++) {
      const c = src[i];
      const prev = src[i - 1];
      if (inString) {
        if (c === stringChar && prev !== "\\") inString = false;
      } else {
        if (c === '"' || c === "'") {
          inString = true;
          stringChar = c;
        } else if (c === "{") depth++;
        else if (c === "}") {
          depth--;
          if (depth === 0) {
            endIdx = i;
            break;
          }
        }
      }
    }
    if (endIdx === -1) throw new Error("end brace not found for " + pid);

    // Build zh fields block — inject before the closing "}".
    const lines = [];
    lines.push(`    subtitleZh: ${tsString(fields.subtitleZh)},`);
    lines.push(`    storyZh:`);
    lines.push(`      ${tsString(fields.storyZh)},`);
    lines.push(`    roleZh:`);
    lines.push(`      ${tsString(fields.roleZh)},`);
    lines.push(`    highlightsLabelZh: ${tsString(fields.highlightsLabelZh)},`);
    lines.push(`    highlightsZh: ${tsArray(fields.highlightsZh, "    ")},`);
    lines.push(`    metricsZh: ${tsArray(fields.metricsZh, "    ")},`);
    if (fields.featureHighlightZh) {
      lines.push(`    featureHighlightZh: {`);
      lines.push(
        `      label: ${tsString(fields.featureHighlightZh.label)},`,
      );
      lines.push(
        `      text: ${tsString(fields.featureHighlightZh.text)},`,
      );
      lines.push(`    },`);
    }
    lines.push(`    cardShortZh:`);
    lines.push(`      ${tsString(fields.cardShortZh)},`);
    lines.push(`    detailLongZh:`);
    lines.push(`      ${tsString(fields.detailLongZh)},`);

    const insertion = "\n" + lines.join("\n") + "\n  ";
    src = src.slice(0, endIdx) + insertion + src.slice(endIdx);
  }
  writeFileSync(path, src);
  console.log("[projects] done");
}

// ---- 2. brandWorks.ts ----
{
  const path = resolve(ROOT, "src/data/brandWorks.ts");
  let src = readFileSync(path, "utf8");

  src = src.replace(
    /  award\?: string;\n}/,
    `  award?: string;\n  roleZh?: string;\n  highlightZh?: string;\n  cardShortZh?: string;\n}`,
  );

  for (const [bid, fields] of Object.entries(T.brandWorks)) {
    const startIdx = src.indexOf(`id: "${bid}"`);
    if (startIdx === -1) {
      console.error(`[brandWorks] missing id ${bid}`);
      continue;
    }
    let depth = 0;
    let inString = false;
    let stringChar = "";
    let i = src.indexOf("{", startIdx - 50);
    let endIdx = -1;
    for (; i < src.length; i++) {
      const c = src[i];
      const prev = src[i - 1];
      if (inString) {
        if (c === stringChar && prev !== "\\") inString = false;
      } else {
        if (c === '"' || c === "'") {
          inString = true;
          stringChar = c;
        } else if (c === "{") depth++;
        else if (c === "}") {
          depth--;
          if (depth === 0) {
            endIdx = i;
            break;
          }
        }
      }
    }
    if (endIdx === -1) throw new Error("end for " + bid);

    const lines = [];
    lines.push(`    roleZh: ${tsString(fields.roleZh)},`);
    lines.push(`    highlightZh:`);
    lines.push(`      ${tsString(fields.highlightZh)},`);
    lines.push(`    cardShortZh:`);
    lines.push(`      ${tsString(fields.cardShortZh)},`);
    const insertion = "\n" + lines.join("\n") + "\n  ";
    src = src.slice(0, endIdx) + insertion + src.slice(endIdx);
  }
  writeFileSync(path, src);
  console.log("[brandWorks] done");
}

// ---- 3. notes.ts ----
{
  const path = resolve(ROOT, "src/data/notes.ts");
  let src = readFileSync(path, "utf8");

  src = src.replace(
    /  reflection: string;\n}/,
    `  reflection: string;\n  titleZh?: string;\n  summaryZh?: string;\n  reflectionZh?: string;\n}`,
  );

  for (const [nid, fields] of Object.entries(T.notes)) {
    const startIdx = src.indexOf(`id: "${nid}"`);
    if (startIdx === -1) {
      console.error(`[notes] missing id ${nid}`);
      continue;
    }
    let depth = 0;
    let inString = false;
    let stringChar = "";
    let i = src.indexOf("{", startIdx - 50);
    let endIdx = -1;
    for (; i < src.length; i++) {
      const c = src[i];
      const prev = src[i - 1];
      if (inString) {
        if (c === stringChar && prev !== "\\") inString = false;
      } else {
        if (c === '"' || c === "'") {
          inString = true;
          stringChar = c;
        } else if (c === "{") depth++;
        else if (c === "}") {
          depth--;
          if (depth === 0) {
            endIdx = i;
            break;
          }
        }
      }
    }

    const lines = [];
    lines.push(`    titleZh: ${tsString(fields.titleZh)},`);
    lines.push(`    summaryZh:`);
    lines.push(`      ${tsString(fields.summaryZh)},`);
    lines.push(`    reflectionZh:`);
    lines.push(`      ${tsString(fields.reflectionZh)},`);
    const insertion = "\n" + lines.join("\n") + "\n  ";
    src = src.slice(0, endIdx) + insertion + src.slice(endIdx);
  }
  writeFileSync(path, src);
  console.log("[notes] done");
}

// ---- 4. path.ts ----
{
  const path = resolve(ROOT, "src/data/path.ts");
  let src = readFileSync(path, "utf8");

  // path interface already has descriptionZh; add titleZh + shortVersionZh
  src = src.replace(
    /export interface PathStage \{([\s\S]*?)\}/,
    (m, body) => {
      if (body.includes("titleZh")) return m;
      return (
        "export interface PathStage {" +
        body.replace(
          /  title: string;/,
          "  title: string;\n  titleZh?: string;",
        ).replace(
          /  shortVersion: string;/,
          "  shortVersion: string;\n  shortVersionZh?: string;",
        ) +
        "}"
      );
    },
  );

  for (const [stage, fields] of Object.entries(T.path)) {
    const stageNum = parseInt(stage, 10);
    const re = new RegExp(`stage:\\s*${stageNum}\\b`);
    const m = re.exec(src);
    if (!m) {
      console.error("[path] missing stage", stage);
      continue;
    }
    const startIdx = m.index;
    let depth = 0;
    let inString = false;
    let stringChar = "";
    let i = src.indexOf("{", startIdx - 50);
    let endIdx = -1;
    for (; i < src.length; i++) {
      const c = src[i];
      const prev = src[i - 1];
      if (inString) {
        if (c === stringChar && prev !== "\\") inString = false;
      } else {
        if (c === '"' || c === "'") {
          inString = true;
          stringChar = c;
        } else if (c === "{") depth++;
        else if (c === "}") {
          depth--;
          if (depth === 0) {
            endIdx = i;
            break;
          }
        }
      }
    }
    const lines = [];
    lines.push(`    titleZh: ${tsString(fields.titleZh)},`);
    lines.push(`    shortVersionZh:`);
    lines.push(`      ${tsString(fields.shortVersionZh)},`);
    const insertion = "\n" + lines.join("\n") + "\n  ";
    src = src.slice(0, endIdx) + insertion + src.slice(endIdx);
  }
  writeFileSync(path, src);
  console.log("[path] done");
}

// ---- 5. toolkit.ts ----
{
  const path = resolve(ROOT, "src/data/toolkit.ts");
  let src = readFileSync(path, "utf8");

  // Method already has descriptionZh; ensure interface; Tool needs descriptionZh
  src = src.replace(
    /export interface Method \{([\s\S]*?)\}/,
    (m, body) => {
      let out = body;
      if (!body.includes("nameZh"))
        out = out.replace(/  name: string;/, "  name: string;\n  nameZh?: string;");
      if (!body.includes("usedInZh"))
        out = out.replace(/  usedIn: string\[\];.*$/m, (line) => line + "\n  usedInZh?: string[];");
      return "export interface Method {" + out + "}";
    },
  );

  src = src.replace(
    /export interface Tool \{([\s\S]*?)\}/,
    (m, body) => {
      if (body.includes("descriptionZh")) return m;
      return (
        "export interface Tool {" +
        body.replace(
          /  description: string;/,
          "  description: string;\n  descriptionZh?: string;",
        ) +
        "}"
      );
    },
  );

  // Map id helpers — slugify name to match toolkit JSON keys.
  function slug(s) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  // Inject for each Method
  const methodMatches = [...src.matchAll(/\{\s*name: "([^"]+)",[\s\S]*?\n  \}/g)];
  for (const m of methodMatches) {
    const name = m[1];
    const id = slug(name);
    const fields = T.toolkit[id];
    if (!fields) continue;
    const blockStart = m.index;
    const blockEnd = m.index + m[0].length - 1; // position of "}"
    const before = src.slice(0, blockEnd);
    const after = src.slice(blockEnd);
    const lines = [];
    lines.push(`    nameZh: ${tsString(fields.nameZh)},`);
    if (fields.usedInZh) {
      lines.push(`    usedInZh: ${tsArray(fields.usedInZh, "    ")},`);
    }
    const insertion = "\n" + lines.join("\n") + "\n  ";
    src = before + insertion + after;
  }

  // Inject descriptionZh for each Tool — reuse toolkit JSON for tools too.
  // Tools start with "name:" inside the tools array; we re-parse with simpler approach:
  // find each "    name: \"X\"," and the following description: line; insert descriptionZh after description line.
  for (const [id, fields] of Object.entries(T.toolkit)) {
    if (!fields.descriptionZh) continue;
    // Match: name: "Tool Name", \n    description: "..."   then close paren
    const candidates = [
      // Match by computed slug; we don't know exact name spelling, so just look up by id list
    ];
    // Look for any block where slug(name) === id, then add descriptionZh
    const re = /\{\s*name: "([^"]+)",\s*description:\s*("(?:[^"\\]|\\.)*")[,\s]*\}/g;
    src = src.replace(re, (full, name, descLit) => {
      if (slug(name) !== id) return full;
      return `{\n    name: "${name}",\n    description: ${descLit},\n    descriptionZh: ${tsString(fields.descriptionZh)},\n  }`;
    });
  }

  writeFileSync(path, src);
  console.log("[toolkit] done");
}

console.log("All translations merged.");
