# DA image — « l'anticipation douce »

La direction artistique des images générées (IA ou photo) de la marque. L'univers : le monde d'un
indépendant, décalé de deux degrés vers le futur, photographié comme un film 35 mm des années 70.
Crédible d'abord, futur ensuite, rétro dans le rendu. Références : _Her_ (le futur chaleureux),
_Severance_ (cadres tenus, rétro-bureau), _Foundation_ (colorimétrie en paires désaturées),
pellicule Cinestill 800T (la halation).

## Le grade commun (obligatoire, chaque image)

Tout visuel se termine par le même grade, la signature qui unit la banque :

`shot on 35mm film, fine film grain, subtle halation on highlights, muted desaturated Kodak color
palette, warm blacks (#211C17), cream highlights (#FAF8F3), soft directional light, shallow depth of
field, carefully composed editorial frame, no readable text anywhere, no frame line, no border`

Noirs chauds jamais bleus ni purs, hautes lumières crème jamais cliniques, saturation contenue. La
halation (halo chaud autour des sources) tire naturellement les lumières vers le vermillon.

## Les recettes de lumière (une palette, pas des règles)

Cinq ambiances colorées, à choisir selon le propos du visuel. Ce sont des **directions
artistiques** — des couleurs possibles qui situent l'image dans la banque, pas des contraintes.
Une dominante suffit ; un contrepoint (une zone qui répond à la dominante) enrichit souvent le
plan, quand il sert la scène.

| Recette   | Lumière                | Dominante                 | Contrepoint possible            |
| --------- | ---------------------- | ------------------------- | ------------------------------- |
| `ardoise` | nuit, heure bleue      | bleus d'ombre `#46647A`   | tungstène ambré                 |
| `ambre`   | matin, soleil rasant   | ors chauds `#C89B5A`      | une ombre ardoise froide        |
| `sauge`   | plein jour, végétal    | verts doux `#71805F`      | bois et terre argile            |
| `argile`  | intérieur doré, humain | terracotta/peau `#BC8272` | crème et blancs cassés          |
| `prune`   | crépuscule, focus      | violets sourds `#5F5069`  | une lueur chaude (lampe, écran) |

## Les lieux sont contemporains

Le rétro vit dans le **rendu** (grain, halation, colorimétrie), jamais dans le **décor**. Les
scènes se passent aujourd'hui : intérieurs modernes, lignes nettes, mobilier actuel — pas de
vieilles fermes, de poutres rustiques ni de mobilier d'époque. Le dire explicitement dans le
prompt (`contemporary interior, modern furniture, no vintage furniture, no rustic beams; the
retro lives only in the film rendering`).

## Le vermillon sémantique (la signature)

**Un seul objet vermillon `#E0542B` par image, et il désigne ce dont le propos parle** : le carnet
qu'on ouvre, la diode du système qui veille, le post-it qui déborde. Jamais décoratif, toujours
porteur de sens. C'est la règle qui unifie tous les visuels, quelle que soit la famille.

## La touche futur (obligatoire, discrète)

Chaque image porte **un détail impossible aujourd'hui**, discret et crédible, au design analogique :
terminal à écran bombé et texte ambré, e-paper souple, molette physique pilotant quelque chose
d'intelligent, diode d'un système qui veille. Le futur est dans le coin de l'image, jamais au
centre — Black Mirror doux, pas de SF spectaculaire : **jamais** d'hologrammes bleus, de robots, de
HUD flottants. La techno de cet univers est chaude, tactile, en bois / métal brossé / tissu
technique. Exception : les images « vie retrouvée » (le bénéfice, le temps rendu) peuvent ne porter
aucune techno — l'absence de machine EST leur propos.

## Personnes, écrans, texte

- **Personnes** — encouragées : un regard humain retient mieux qu'un objet. Des gens crédibles saisis
  dans un moment (jamais posés face caméra, jamais de sourire stock), émotions lisibles, diversité
  naturelle. Une pièce vide ou un objet peut aussi dire l'intention — l'absence raconte souvent mieux.
- **Écrans** — autorisés (ils portent souvent la touche futur), mais **tout texte est illisible** :
  flou, hors focus, glyphes abstraits. Ajouter `any on-screen text unreadable and out of focus`.
- **Texte** — aucun texte lisible nulle part dans l'image. Les mots vivent dans la mise en page
  (composants `type-*`), jamais dans le visuel.

## Une intention, pas du décor

Chaque image dit **une phrase qu'elle doit porter toute seule**, fixée avant de générer. Une image
sans intention claire n'entre pas dans la banque. Le gabarit de prompt :

`Cinematic editorial photograph, vertical composition` + **la scène contemporaine** (sujet, action,
moment — dire aussi ce qui est absent) + **la direction de couleur** (si elle sert le propos) +
**l'objet vermillon et son sens** + **la touche futur** + le grade commun. Peu d'éléments, de
l'air, un premier plan travaillé.

## Do / Don't

- **Do** : une intention par image, un vermillon porteur de sens, des lieux contemporains, une
  touche futur discrète, visages vivants ou absences éloquentes, grain film et halation, beaucoup
  d'air.
- **Don't** : texte lisible, cadre/liseré/bordure, néons cyan-magenta, SF spectaculaire, sourires
  stock posés, décors vieillots ou rustiques, blancs cliniques, noirs bleus.
