// news-image-20261119 entry program.
// Copies the committed front-page image (entry.png) into the output
// directory, byte for byte. No network, no randomness, no other input,
// so two runs always produce identical bytes.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(repoRoot, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const destination = join(outputDir, "entry.png");
copyFileSync(sourceImage, destination);
const written = statSync(destination).size;
const original = statSync(sourceImage).size;
console.log(`entry.png -> ${destination} (${written} bytes, source ${original} bytes)`);
if (written !== original) throw new Error("copy size mismatch");
