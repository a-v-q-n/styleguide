import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { buildExports } from "./build-exports.mjs";

function fixture() {
  const dir = mkdtempSync(join(tmpdir(), "sg-"));
  const tokensDir = join(dir, "tokens");
  const doctrineDir = join(dir, "doctrine");
  mkdirSync(tokensDir);
  mkdirSync(doctrineDir);
  const T = (name, obj) => writeFileSync(join(tokensDir, name), JSON.stringify(obj));
  T("color.json", {
    base: { paper: "#FAF8F3", ink: "#211C17", vermillon: "#E0542B", grey: "#7A726A", greyNight: "#CBC4BA", filet: "#E7E1D8" },
    worlds: { ardoise: "#46647A", ambre: "#C89B5A" },
  });
  T("typography.json", {
    families: { serif: '"Instrument Serif", serif', mono: '"Geist Mono", monospace' },
    floorPx: 32,
    scale: {
      hero: { family: "serif", web: "clamp(2.5rem, 6vw, 4.5rem)", leading: 1.02 },
      eyebrow: { family: "mono", web: "0.8125rem", transform: "uppercase", tracking: "0.22em", weight: 600 },
    },
  });
  T("space.json", { md: "16px" });
  T("radius.json", { md: "6px" });
  T("elevation.json", { flat: "none" });
  T("glow.json", { vermillon: "radial-gradient(a)", vignette: "radial-gradient(b)" });
  T("grid.json", { clair: { color: "rgba(33,28,23,.04)", step: "46px" }, nocturne: { color: "rgba(250,248,243,.055)", step: "120px" } });
  writeFileSync(join(doctrineDir, "couleur.md"), "# Couleur\n\nLe contraste chaud est le socle de la marque.\n");
  return { dir, tokensDir, doctrineDir, out: join(dir, "public"), siteCss: join(dir, "src", "styles", "tokens.css") };
}

test("buildExports génère tokens.css avec vars claires et override nocturne", () => {
  const f = fixture();
  buildExports({ tokensDir: f.tokensDir, doctrineDir: f.doctrineDir, outSiteCss: f.siteCss, outPublicDir: f.out });
  const css = readFileSync(join(f.out, "tokens.css"), "utf8");
  assert.match(css, /--color-paper:\s*#FAF8F3/);
  assert.match(css, /--color-vermillon:\s*#E0542B/);
  assert.match(css, /\[data-theme="night"\]/);
  assert.match(css, /--fg:\s*var\(--color-paper\)/); // nocturne inverse le fg
  assert.match(css, /\.type-hero\s*\{/);
  assert.match(css, /\.type-eyebrow\s*\{[^}]*text-transform: uppercase/);
});

test("buildExports génère tokens.json agrégé et parseable", () => {
  const f = fixture();
  buildExports({ tokensDir: f.tokensDir, doctrineDir: f.doctrineDir, outSiteCss: f.siteCss, outPublicDir: f.out });
  const json = JSON.parse(readFileSync(join(f.out, "tokens.json"), "utf8"));
  assert.equal(json.color.base.vermillon, "#E0542B");
  assert.equal(json.typography.floorPx, 32);
});

test("buildExports génère llms.txt avec titre, règles et liens doctrine", () => {
  const f = fixture();
  buildExports({ tokensDir: f.tokensDir, doctrineDir: f.doctrineDir, outSiteCss: f.siteCss, outPublicDir: f.out });
  const llms = readFileSync(join(f.out, "llms.txt"), "utf8");
  assert.match(llms, /# Charte AVQN/);
  assert.match(llms, /Non-négociables/);
  assert.match(llms, /Couleur — Le contraste chaud/);
  assert.match(llms, /styleguide\.avqn\.ch\/doctrine\/couleur\.md/);
});

test("buildExports copie la doctrine brute et écrit le CSS du site", () => {
  const f = fixture();
  const res = buildExports({ tokensDir: f.tokensDir, doctrineDir: f.doctrineDir, outSiteCss: f.siteCss, outPublicDir: f.out });
  assert.ok(existsSync(join(f.out, "doctrine", "couleur.md")));
  assert.ok(existsSync(f.siteCss));
  assert.ok(res.files.length >= 5);
});
