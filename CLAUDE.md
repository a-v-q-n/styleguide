# styleguide — contrat agent

Le **livre de marque AVQN** : la source unique de la charte graphique, à visée des agents IA (pour
qu'ils la répliquent fidèlement sur tout support) doublée d'une vitrine publique navigable sur
**styleguide.avqn.ch**. Méthode de dev : plugin `avqn-dev`. Ce fichier = le contrat.

## Le principe : source vs vitrine

- **`brand/` = la source canonique.** C'est ELLE qu'on réplique. Trois couches :
  - `brand/tokens/*.json` — les valeurs EXACTES (couleur, typo, espacement, radius, lueurs, grilles).
  - `brand/doctrine/*.md` — le pourquoi/comment (ce qui ne se met pas en variable : DA image, ton,
    gestes-signature).
  - `brand/assets/` — le logo et ses variantes.
- **La vitrine (`src/`, Astro) n'est qu'une VUE** qui consomme `brand/`. Elle la **dogfoode** : le
  site est stylé par ses propres tokens (Tailwind v4 `@theme` ← `src/styles/tokens.css` généré).
  Changer un token fait bouger tout le site.

**Règle d'or : jamais dupliquer une valeur de marque dans le site.** Le site lit `brand/`. Si une
couleur ou une taille est en dur dans une page, c'est un bug.

## Les exports IA

`scripts/build-exports.mjs` génère depuis `brand/`, à URLs stables une fois en ligne :

- `/llms.txt` — index dense de toute la charte (point d'entrée « charte AVQN, lis ça d'abord »).
- `/tokens.json` — toutes les valeurs, parseable.
- `/tokens.css` — variables CSS prêtes à `@import` par un projet web.
- `/doctrine/<domaine>.md` — la doctrine brute d'un domaine, lisible telle quelle.

Ces fichiers sont **générés** (gitignorés) : on n'édite jamais les copies, on édite `brand/`.

## Dev local

Aucun service, aucune base, aucun secret : le repo tourne seul.

```bash
npm install
npm run dev       # exports + serveur Astro sur http://localhost:4321
npm run exports   # régénère src/styles/tokens.css + public/{tokens.*,llms.txt,doctrine/*} depuis brand/
npm run build     # exports + astro build + smoke (dist/ prêt à servir)
npm run gate      # check + format:check + test + build — vert avant tout commit
```

## Déploiement

**Mono-palier** : `push main` → CI construit l'image (`ghcr.io/a-v-q-n/styleguide:sha-<12>`) →
Coolify (mode service) la pull et sert `styleguide.avqn.ch`. Coolify ne build jamais. `/healthz.json`
porte le `GIT_SHA` : le deploy n'est vert que quand la prod répond avec ce sha. La grammaire Coolify est
déléguée aux workflows partagés d'`a-v-q-n/ci`
(`uses: a-v-q-n/ci/.github/workflows/deploy.yml@main`).

## Style

- 2 espaces, commentaires et commits en français, préfixe 🤖, descriptifs.
- Jamais de secret commité (`.env` gitignoré ; aucun secret requis en v1).
- Astro à la racine, `brand/` séparé : la frontière source/vitrine est le cœur du repo.
