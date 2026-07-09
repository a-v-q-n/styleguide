# Typographie

Quatre voix, une seule gamme. La serif porte le message ; tout le reste recule pour la servir. La
typographie est le premier geste de marque — avant la couleur, avant la mise en page.

## Les quatre familles

- **Instrument Serif** — ce qui **porte** : hero, titre, corps. L'emphase se dit par un fragment en
  **italique vermillon**, jamais par du gras.
- **Anton** — l'accroche display condensée, UPPERCASE : le hook le plus percutant, le chiffre-choc.
  Réservé aux moments forts, jamais pour du texte courant.
- **Geist** — l'appui : sous-titre, légende, phrase de contexte, corps d'interface. Gris par défaut.
- **Geist Mono** — les labels et mentions, UPPERCASE à interlettrage large : eyebrows, catégories,
  index, crédits, noms de fichiers.

## Les rôles

| Rôle      | Famille    | Usage                                          |
| --------- | ---------- | ---------------------------------------------- |
| `hero`    | serif      | le titre qui ouvre un écran                    |
| `titre`   | serif      | les têtes de section                           |
| `corps`   | serif      | le texte long qui porte                        |
| `display` | Anton      | le hook, le chiffre-choc (UPPERCASE)           |
| `appui`   | Geist      | sous-titres, légendes, corps d'UI              |
| `eyebrow` | Geist Mono | label de catégorie (UPPERCASE, tracking large) |
| `meta`    | Geist Mono | mentions, crédits, index                       |

## Deux expressions d'une même échelle

Chaque rôle porte deux valeurs, pour servir les deux mondes AVQN :

- **web** — une taille fluide (`clamp`) qui respire du mobile au desktop. C'est ce qu'un projet web
  consomme via `--text-<rôle>`.
- **canvas 1080** — une fourchette en pixels (base 1080) pour les visuels composés à cadre fixe
  (posts, slides, miniatures). Repères : hero 140–190 · titre 90–130 · corps 56–80 · display
  300–440 · appui 40–52 · eyebrow 32–40 · meta 32.

Les deux disent la même hiérarchie ; on lit celle qui correspond au support.

## Les règles

1. **Plancher 32.** Aucun texte sous 32 px (base canvas 1080) / sous `--text-meta` en web. La
   discrétion vient du gris et du placement, jamais d'une taille minuscule.
2. **La serif porte, le mono recule.** Un écran a une seule voix qui parle fort (serif ou display) ;
   le reste est gris et petit.
3. **Emphase = italique vermillon.** Sur un titre serif, le fragment qui porte passe en italique
   vermillon. Un seul par titre.
4. **Équilibrer les lignes.** `text-wrap: balance` partout ; jamais un mot seul en dernière ligne.
   Sur un visuel composé, les retours à la ligne se posent à la main, par unité de sens.

## Do / Don't

- **Do** : une voix forte par écran, la serif qui porte, le mono en label, un accent italique vermillon.
- **Don't** : du gras pour insister, plusieurs familles qui crient, un texte sous le plancher, une
  veuve en fin de titre.
