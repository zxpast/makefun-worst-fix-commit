// Worst Fix Ever: Funniest Commit Message — entry program.
// Writes one commit message about a fix that made everything worse
// to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a price-unit fix that inverted the error — the shop showed
// prices in cents instead of dollars, and the "fix" multiplied every
// price by 100 the wrong way. The punch lands in the last six words:
// the $9.99 item now costs $999. No trailing newline: the gate counts
// every character, and the entry must stay 1-100 chars.
const LINE =
  "fix: prices showed in cents, not dollars — every $9.99 item now costs $999";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
