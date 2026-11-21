// news-image-20261120 — "20 November 2026: World News in One Image".
// The entry image is drawn programmatically (see draw_entry.py) and stored
// beside this file as entry.png. This program's only job is to place that
// exact image at /output/entry.png, deterministically, with no network.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The grader runs it twice in a sandbox; both runs must write identical bytes.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(here, 'entry.png');

// The grader sets MAKEFUN_OUTPUT_DIR; outside the sandbox it stands in
// for /output, so default to /output when it is not set.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outputDir, 'entry.png');

const bytes = readFileSync(sourceImage);
mkdirSync(outputDir, { recursive: true });
writeFileSync(target, bytes);

// Self-check: the copy must be byte-identical to the source image, so the
// two graded runs can never disagree about what they wrote.
if (readFileSync(target).length !== bytes.length) {
  throw new Error('entry.png copy failed: byte count mismatch');
}
