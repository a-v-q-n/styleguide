# Layout & grilles

La mise en page AVQN respire. Peu d'éléments, du vide maîtrisé, des alignements qui portent du sens.
On ne remplit pas un espace : on y pose ce qui compte et on laisse l'air faire le reste.

## Les principes

1. **Beaucoup d'air.** Le vide est un matériau, pas un manque. Un écran dit une idée ; ce qui ne la
   sert pas sort.
2. **Alignements porteurs de sens.** La position raconte : une épine à gauche, un escalier
   d'accumulation, une opposition gauche/droite. On aligne sur une ligne, une grille — jamais au
   hasard.
3. **Une hiérarchie claire.** Un point d'entrée (le hero ou le hook), un corps, un pied. L'œil sait
   toujours où commencer.

## Le quadrillage

Le fond de marque n'est jamais un aplat nu : il porte un **quadrillage** discret, le papier
millimétré d'AVQN. Il change avec l'ambiance.

| Ambiance | Couleur du trait | Pas |
|----------|------------------|-----|
| Clair | encre ~4 % (`--grid-clair-color`) | 46 px (`--grid-clair-step`) |
| Nocturne | crème ~5,5 % (`--grid-nocturne-color`) | 120 px (`--grid-nocturne-step`) |

Le rôle `--grid-color` / `--grid-step` bascule automatiquement avec le thème. Le quadrillage se pose
en `repeating-linear-gradient` sur les deux axes, sous le contenu — présent mais jamais lu.

## L'espacement

Une échelle sobre en puissances de deux : `xs 4` · `sm 8` · `md 16` · `lg 32` · `xl 64` · `2xl 128`.
On compose les marges et gouttières dessus ; on n'invente pas de valeur intermédiaire. Les grands
vides (`xl`, `2xl`) sont la signature de l'air.

## Les filets

Le trait sépare et ferme, il ne décore pas.

- **Filet de séparation** — 1 px `--rule` entre les items d'une liste, sous une conclusion.
- **Filet vermillon** — un trait plein vermillon court (~6 px de haut, ~120 px de long) sous un
  eyebrow ou comme séparateur qui porte. Il compte comme l'accent unique de la composition.

## Do / Don't

- **Do** : du vide maîtrisé, des alignements qui disent quelque chose, le quadrillage en fond, une
  échelle d'espacement tenue.
- **Don't** : remplir pour remplir, des éléments flottants sans grille, un fond nu sans quadrillage,
  des marges au jugé.
