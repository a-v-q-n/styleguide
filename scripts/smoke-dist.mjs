// Garde-fou du build : si un livrable clé manque de dist/, l'image ne sort pas.
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");

const required = [
  "index.html",
  "fondations/index.html",
  "composants/index.html",
  "logo/index.html",
  "da-image/index.html", // page de renvoi générée par la redirection
  "media/index.html",
  "media/photo/index.html",
  "media/formats-sociaux/index.html",
  "doctrine/formats-sociaux.md",
  "tokens.json",
  "tokens.css",
  "llms.txt",
  "doctrine/couleur.md",
  "doctrine/da-image.md",
  "assets/logo/logo-noir.svg",
  "assets/exemples/photo/admin-deborde.jpg",
  "favicon.svg",
];

const missing = required.filter((f) => !existsSync(join(dist, f)));
if (missing.length) {
  console.error("✗ smoke-dist : fichiers manquants dans dist/ —\n  " + missing.join("\n  "));
  process.exit(1);
}
console.log(`✓ smoke-dist — ${required.length} livrables présents`);
