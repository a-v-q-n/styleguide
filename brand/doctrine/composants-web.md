# Composants web

La charte AVQN portée à l'interface. Les composants héritent des non-négociables (contraste chaud, un
seul vermillon, beaucoup d'air) et des rôles sémantiques (`--bg`, `--fg`, `--muted`, `--rule`,
`--accent`) : ils fonctionnent à l'identique en clair et en nocturne sans code dédié.

## Boutons

Trois variantes, une seule forme : radius `md` (6 px), padding généreux, label en Geist
demi-gras. Le vermillon est réservé à **l'action principale** — un seul bouton primaire par vue.

| Variante | Fond | Texte | Bordure | Usage |
|----------|------|-------|---------|-------|
| **Primaire** | `--accent` (vermillon) | papier | — | l'action qui compte, une par vue |
| **Secondaire** | transparent | `--fg` | 1 px `--fg` | actions de second rang |
| **Fantôme** | transparent | `--muted` | — | actions tertiaires, discrètes |

États (les trois variantes) :

- **hover** — primaire : le vermillon fonce légèrement (~8 %) ; secondaire/fantôme : le fond prend un
  voile `--fg` à ~6 %.
- **active** — l'élément s'enfonce d'1 px, pas d'ombre.
- **focus** — un anneau vermillon net (`outline: 2px solid var(--accent)`, offset 2 px). Jamais
  supprimé : l'accessibilité clavier est un non-négociable.
- **disabled** — opacité 45 %, curseur interdit, aucun hover.

Pas d'ombre portée sur un bouton, pas de dégradé, pas de coin très arrondi.

## Cartes

Une carte est une surface `--bg` légèrement détachée : bordure 1 px `--rule`, radius `md`, padding
`lg`. Élévation `flat` par défaut ; `raised` seulement si elle doit flotter au-dessus du fond. Le
quadrillage de fond reste visible à travers si la carte est translucide. À l'intérieur : un eyebrow,
un titre serif, un corps — la même hiérarchie que partout.

## Gestes-signature (en UI)

- **Eyebrow** — label Geist Mono UPPERCASE vermillon à interlettrage large, précédé d'un **carré
  vermillon plein**. Une catégorie réelle, jamais un ornement.
- **Filet vermillon** — trait plein vermillon (~6 px × ~120 px) sous un eyebrow ou en séparateur qui
  porte. Compte comme l'accent unique.
- **Titre à accent italique** — Instrument Serif `--fg`, le fragment qui porte en italique vermillon.
- **Filet de séparation** — 1 px `--rule` entre les items, sous une conclusion.

## Champs & liens

- **Liens** — `--accent`, soulignés à l'épaisseur du texte ; au survol, l'accent fonce.
- **Champs de formulaire** — fond `--bg`, bordure 1 px `--rule`, focus = anneau vermillon. Label en
  Geist, placeholder en `--muted`.

## Do / Don't

- **Do** : un seul primaire vermillon par vue, un focus visible, des cartes sobres à bord fin,
  la même hiérarchie qu'ailleurs.
- **Don't** : plusieurs boutons vermillon, un focus supprimé, des ombres lourdes, des dégradés, des
  coins très arrondis, du vermillon décoratif.
