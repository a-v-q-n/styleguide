# DA schéma — la figure technique

Le style d'image qui **explique** : une idée, un flux, une relation, un système. Là où la photo
(« l'anticipation douce », voir `da-image`) montre un monde, le schéma montre une structure. La
référence : le dessin technique à l'ancienne — trait d'encre fin, hachures légères, annotations,
lettres de renvoi — de beaux objets de documentation. Le rétro vit dans le trait ; les sujets sont
d'aujourd'hui : agents, workflows, boucles d'orchestration.

## La métaphore mécanique

Les concepts numériques deviennent des **mécanismes simples** : l'agent est un boîtier
d'engrenages, les skills des plaques gravées interchangeables, les tools des outils pendus à un
rail, la boucle une courroie circulaire. La mécanique rend l'abstrait tangible — jamais de
personnages, jamais de robots, jamais d'écrans : des pièces.

## Les règles

- **Un seul vermillon porteur** : l'élément vermillon `#E0542B` désigne ce dont la figure parle —
  l'agent, le déclencheur, la boucle. Tout le reste est encre `#211C17` sur papier crème `#FAF8F3`.
- **Labels courts autorisés** : quelques mots dans l'image, en français, en minuscules, avec de
  fines lignes d'attache — seulement là où le sens l'exige. C'est l'exception propre à ce style ;
  pour le style photo, la règle « jamais de texte » reste absolue.
- **Ni cadre ni cartouche** : la figure vit nue sur son papier, marges généreuses, beaucoup d'air.
  Le rendu est un scan à plat — jamais la photo d'un document posé.
- **Hachures légères** : le modelé vient d'un trait fin et de hachures discrètes, pas d'aplats
  lourds, pas de dégradés, pas de 3D.

## Le grade commun (chaque prompt finit par)

```
Precise fine ink lineart on warm cream paper (#FAF8F3), warm dark ink (#211C17). Simple mechanical
objects drawn with thin lines and light hatching — the charm of an old technical drawing, without
any characters, figures or robots. Small lowercase French technical annotations with thin leader
lines, only labels that carry meaning. Generous margins and negative space. No border, no frame,
no cartouche, no ornaments, flat scan look, not a photograph of a document, no 3D render, no
gradients.
```

## Gabarit de prompt

`Technical documentation figure explaining` + **ce qu'on montre** (les unités mécaniques, leur
disposition, les labels exacts en français entre guillemets) + **l'élément vermillon et son sens**
(« the only vermilion element ») + le grade commun. Format carré par défaut. Fixer l'intention —
la phrase que la figure porte toute seule — avant de générer ; une figure sans intention n'entre
pas dans la banque. La banque est organisée par **sujet réel** ; chaque figure y entre avec sa
phrase et son prompt.

## Do / Don't

- **Do** : une intention par figure, un vermillon porteur, des mécanismes simples, des hachures
  légères, des labels utiles seulement, des lettres de renvoi, de l'air.
- **Don't** : cadre, cartouche ou ornement, personnages ou robots, photo d'un document posé,
  aplats lourds, 3D, dégradés, labels décoratifs ou redondants, texte long.
