# styleguide

Le livre de marque **AVQN** — source unique de la charte graphique, pensée pour que les agents IA
la répliquent fidèlement (web, visuels, et plus tard motion/son), avec une vitrine publique sur
[styleguide.avqn.ch](https://styleguide.avqn.ch).

## Deux faces

- **`brand/`** — la source canonique : `tokens/` (valeurs exactes), `doctrine/` (le pourquoi/comment),
  `assets/` (logo). C'est ce qu'on réplique.
- **La vitrine** (Astro, `src/`) — une vue qui consomme `brand/` et le **dogfoode** : le site est
  stylé par ses propres tokens.

## Consommer la charte

Une fois en ligne :

| URL | Usage |
|-----|-------|
| `/llms.txt` | point d'entrée pour un agent — toute la charte en un fichier |
| `/tokens.json` | valeurs exactes, parseable |
| `/tokens.css` | variables CSS à `@import` dans un projet web |
| `/doctrine/<domaine>.md` | la doctrine brute d'un domaine |

## Développer

```bash
npm install
npm run dev     # http://localhost:4321
npm run gate    # check + format + build + smoke
```

La charte se modifie dans `brand/` ; le site et les exports se régénèrent (`npm run exports`).
