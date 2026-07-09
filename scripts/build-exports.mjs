// Générateur d'exports du livre de marque.
// Lit brand/tokens (valeurs) + brand/doctrine (prose) et produit :
//   - src/styles/tokens.css   → le site se style avec (dogfood)
//   - public/tokens.css       → même CSS, exportable par un projet web
//   - public/tokens.json      → l'agrégat des tokens, parseable
//   - public/llms.txt         → l'index dense pour un agent IA
//   - public/doctrine/*.md    → la doctrine brute, copiée telle quelle
// Plain Node ESM, aucune dépendance.

import {
  readFileSync,
  writeFileSync,
  readdirSync,
  mkdirSync,
  existsSync,
} from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const SITE_URL = "https://styleguide.avqn.ch";

function ensureDir(dir) {
  mkdirSync(dir, { recursive: true });
}

function readTokens(tokensDir) {
  const out = {};
  for (const f of readdirSync(tokensDir).filter((f) => f.endsWith(".json"))) {
    out[basename(f, ".json")] = JSON.parse(readFileSync(join(tokensDir, f), "utf8"));
  }
  return out;
}

function firstParagraph(md) {
  const buf = [];
  let started = false;
  for (const line of md.split("\n")) {
    const t = line.trim();
    if (!started) {
      if (t.startsWith("#")) started = true;
      continue;
    }
    if (t.startsWith("#") || t.startsWith(">")) {
      if (buf.length) break;
      continue;
    }
    if (t === "") {
      if (buf.length) break;
      continue;
    }
    buf.push(t);
  }
  let s = buf.join(" ").replace(/\*\*/g, "").replace(/[`*_]/g, "");
  if (s.length > 200) s = s.slice(0, 197) + "…";
  return s || "(voir la doctrine)";
}

function readDoctrines(doctrineDir) {
  if (!existsSync(doctrineDir)) return [];
  return readdirSync(doctrineDir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((f) => {
      const raw = readFileSync(join(doctrineDir, f), "utf8");
      const title = (raw.match(/^#\s+(.+)$/m) || [])[1] || f;
      return { file: f, raw, title, summary: firstParagraph(raw) };
    });
}

function renderCss(t) {
  const c = t.color.base;
  const w = t.color.worlds;
  const ty = t.typography;
  const L = [];
  L.push("/* GÉNÉRÉ par scripts/build-exports.mjs depuis brand/tokens — NE PAS ÉDITER. */");
  L.push(":root {");
  L.push(`  --color-paper: ${c.paper};`);
  L.push(`  --color-ink: ${c.ink};`);
  L.push(`  --color-vermillon: ${c.vermillon};`);
  L.push(`  --color-grey: ${c.grey};`);
  L.push(`  --color-grey-night: ${c.greyNight};`);
  L.push(`  --color-filet: ${c.filet};`);
  for (const [k, v] of Object.entries(w)) L.push(`  --world-${k}: ${v};`);
  for (const [k, v] of Object.entries(ty.families)) L.push(`  --font-${k}: ${v};`);
  for (const [role, def] of Object.entries(ty.scale)) L.push(`  --text-${role}: ${def.web};`);
  for (const [k, v] of Object.entries(t.space)) L.push(`  --space-${k}: ${v};`);
  for (const [k, v] of Object.entries(t.radius)) L.push(`  --radius-${k}: ${v};`);
  for (const [k, v] of Object.entries(t.elevation)) L.push(`  --elevation-${k}: ${v};`);
  L.push(`  --glow-vermillon: ${t.glow.vermillon};`);
  L.push(`  --glow-vignette: ${t.glow.vignette};`);
  L.push(`  --grid-clair-color: ${t.grid.clair.color};`);
  L.push(`  --grid-clair-step: ${t.grid.clair.step};`);
  L.push(`  --grid-nocturne-color: ${t.grid.nocturne.color};`);
  L.push(`  --grid-nocturne-step: ${t.grid.nocturne.step};`);
  // Rôles sémantiques — clair par défaut.
  L.push(`  --bg: var(--color-paper);`);
  L.push(`  --fg: var(--color-ink);`);
  L.push(`  --muted: var(--color-grey);`);
  L.push(`  --rule: var(--color-filet);`);
  L.push(`  --accent: var(--color-vermillon);`);
  L.push(`  --grid-color: var(--grid-clair-color);`);
  L.push(`  --grid-step: var(--grid-clair-step);`);
  L.push("}");
  L.push(`[data-theme="night"] {`);
  L.push(`  --bg: var(--color-ink);`);
  L.push(`  --fg: var(--color-paper);`);
  L.push(`  --muted: var(--color-grey-night);`);
  L.push(`  --rule: rgba(250, 248, 243, 0.14);`);
  L.push(`  --accent: var(--color-vermillon);`);
  L.push(`  --grid-color: var(--grid-nocturne-color);`);
  L.push(`  --grid-step: var(--grid-nocturne-step);`);
  L.push("}");
  // Classes de rôle typographique — le dogfood : les pages écrivent .type-hero, etc.
  for (const [role, def] of Object.entries(ty.scale)) {
    const decl = [`font-family: var(--font-${def.family})`, `font-size: var(--text-${role})`];
    if (def.leading) decl.push(`line-height: ${def.leading}`);
    if (def.weight) decl.push(`font-weight: ${def.weight}`);
    if (def.transform) decl.push(`text-transform: ${def.transform}`);
    if (def.tracking) decl.push(`letter-spacing: ${def.tracking}`);
    L.push(`.type-${role} { ${decl.join("; ")}; }`);
  }
  return L.join("\n") + "\n";
}

function renderLlms(t, doctrines, siteUrl) {
  const c = t.color.base;
  const w = t.color.worlds;
  const ty = t.typography;
  const L = [];
  L.push("# Charte AVQN — livre de marque");
  L.push("");
  L.push("Source unique du design AVQN, à répliquer fidèlement. Ce fichier est le point d'entrée pour un agent.");
  L.push(`Valeurs exactes : ${siteUrl}/tokens.json · CSS prêt à importer : ${siteUrl}/tokens.css`);
  L.push("");
  L.push("## Non-négociables");
  L.push("- Contraste chaud : encre sur papier, ou l'inverse en nocturne. Jamais de blanc ni de noir purs.");
  L.push("- Un seul vermillon par composition, réservé au mot/objet qui porte le sens. Jamais décoratif.");
  L.push("- La serif porte le message ; le reste (appuis, labels) recule en gris.");
  L.push(`- Plancher typographique ${ty.floorPx}px : la discrétion vient du gris et du placement, jamais d'une taille minuscule.`);
  L.push("- Beaucoup d'air : peu d'éléments, alignements porteurs de sens.");
  L.push("");
  L.push("## Palette");
  L.push(
    `- papier ${c.paper} · encre ${c.ink} · vermillon ${c.vermillon} · gris ${c.grey} (nocturne ${c.greyNight}) · filet ${c.filet}`,
  );
  L.push(`- Mondes-couleur (DA image, paires de lumière) : ${Object.entries(w).map(([k, v]) => `${k} ${v}`).join(" · ")}`);
  L.push("");
  L.push("## Typographie");
  L.push(`- Familles : ${Object.values(ty.families).join(" · ")}`);
  L.push(`- Rôles : ${Object.keys(ty.scale).join(", ")} (échelle web fluide + référence canvas 1080 dans tokens.json).`);
  L.push("");
  L.push("## Ambiances");
  L.push("- Clair : fond papier + quadrillage encre léger.");
  L.push("- Nocturne : fond encre + lueur vermillon radiale + quadrillage crème + vignette douce.");
  L.push("");
  L.push("## Doctrine (le pourquoi / comment)");
  for (const d of doctrines) {
    L.push(`- ${d.title} — ${d.summary} → ${siteUrl}/doctrine/${d.file}`);
  }
  L.push("");
  return L.join("\n");
}

export function buildExports({ tokensDir, doctrineDir, outSiteCss, outPublicDir, siteUrl = SITE_URL }) {
  const tokens = readTokens(tokensDir);
  const css = renderCss(tokens);
  const files = [];

  ensureDir(dirname(outSiteCss));
  writeFileSync(outSiteCss, css);
  files.push(outSiteCss);

  ensureDir(outPublicDir);
  writeFileSync(join(outPublicDir, "tokens.css"), css);
  files.push(join(outPublicDir, "tokens.css"));
  writeFileSync(join(outPublicDir, "tokens.json"), JSON.stringify(tokens, null, 2) + "\n");
  files.push(join(outPublicDir, "tokens.json"));

  const doctrines = readDoctrines(doctrineDir);
  const outDoctrine = join(outPublicDir, "doctrine");
  ensureDir(outDoctrine);
  for (const d of doctrines) {
    writeFileSync(join(outDoctrine, d.file), d.raw);
    files.push(join(outDoctrine, d.file));
  }

  writeFileSync(join(outPublicDir, "llms.txt"), renderLlms(tokens, doctrines, siteUrl));
  files.push(join(outPublicDir, "llms.txt"));

  return { files };
}

// Invocation directe : chemins réels du repo.
if (process.argv[1] && import.meta.url === `file://${process.argv[1]}`) {
  const root = join(dirname(fileURLToPath(import.meta.url)), "..");
  const res = buildExports({
    tokensDir: join(root, "brand/tokens"),
    doctrineDir: join(root, "brand/doctrine"),
    outSiteCss: join(root, "src/styles/tokens.css"),
    outPublicDir: join(root, "public"),
  });
  console.log(`✓ exports générés — ${res.files.length} fichiers`);
}
