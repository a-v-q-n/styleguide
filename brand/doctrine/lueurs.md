# Lueurs & profondeur

L'ambiance nocturne d'AVQN n'est pas un simple fond sombre : c'est de l'encre **habitée** par une
lueur vermillon et fermée par une vignette. C'est la texture qui distingue le nocturne de marque d'un
« dark mode » générique.

## La lueur vermillon

Sur nocturne uniquement, une **lueur vermillon radiale** décentrée réchauffe l'encre depuis un coin.
Cœur `rgba(224, 84, 43, 0.18)` fondu à zéro (`--glow-vermillon`), posée en haut-gauche (~34 %/42 %).
Elle tire l'œil vers l'entrée de l'écran et donne à l'encre sa chaleur. Elle ne vit **que** sur
nocturne — en clair, le papier n'a pas de lueur.

## La vignette

Une **vignette douce** (`--glow-vignette`) ferme les bords en nocturne : un assombrissement radial
léger qui concentre le regard au centre. Posée en surcouche (`::after`), sans interaction. Discrète —
on la sent, on ne la voit pas.

## La profondeur

L'élévation est légère et chaude, jamais dure. Trois niveaux :

- `flat` — pas d'ombre (le défaut ; la marque est plate et nette).
- `raised` — `0 1px 2px rgba(33,28,23,.08)` : une carte qui se détache à peine.
- `float` — `0 8px 24px rgba(33,28,23,.12)` : un élément qui survole (menu, dialogue).

Les ombres sont teintées à l'encre, jamais au noir pur, et restent basses. Pas d'ombre floue lourde,
pas de halo bleu.

## Do / Don't

- **Do** : la lueur vermillon pour habiter le nocturne, la vignette pour fermer, des ombres basses et
  chaudes.
- **Don't** : une lueur en clair, un dark mode plat sans lueur, des ombres dures ou bleues, du néon
  cyan-magenta.
