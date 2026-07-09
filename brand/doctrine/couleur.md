# Couleur

Le contraste chaud est le socle de la marque AVQN : encre profonde sur papier écru, ou l'inverse en
nocturne, avec un seul accent vermillon qui porte le sens. International Typographic Style tempéré
d'une chaleur analogique — jamais clinique, jamais froid.

## Les non-négociables

1. **Jamais de blanc pur ni de noir pur.** Le blanc est le papier `#FAF8F3`, le noir est l'encre
   `#211C17`. Ce sont des couleurs chaudes, elles ont un fond de crème et de terre.
2. **Un seul vermillon par composition.** `#E0542B` est réservé au mot actif, au filet, à l'objet
   qui porte le sens. Jamais en aplat décoratif, jamais sur du texte long, jamais deux accents qui
   se disputent l'attention.
3. **Le gris recule.** `#7A726A` (clair) ou `#CBC4BA` (nocturne) porte le secondaire : appuis,
   légendes, mentions. La hiérarchie vient du gris et du placement, pas de la couleur.

## La palette

| Token | Hex | Rôle |
|-------|-----|------|
| `paper` | `#FAF8F3` | fond clair · texte sur nocturne |
| `ink` | `#211C17` | encre : texte/titres sur clair · fond nocturne |
| `vermillon` | `#E0542B` | l'accent unique, porteur de sens |
| `grey` | `#7A726A` | secondaire sur clair |
| `greyNight` | `#CBC4BA` | secondaire sur nocturne |
| `filet` | `#E7E1D8` | filet de séparation (clair) |

## Rôles sémantiques (clair ↔ nocturne)

La marque vit en deux ambiances. On ne code jamais une couleur brute dans une interface : on code un
**rôle**, et le rôle bascule avec le thème.

| Rôle | Clair | Nocturne |
|------|-------|----------|
| `--bg` fond | papier | encre |
| `--fg` texte | encre | papier |
| `--muted` secondaire | gris | gris nocturne |
| `--rule` filet | `filet` | crème 14 % |
| `--accent` accent | vermillon | vermillon |

Le vermillon ne bascule pas : c'est la constante qui unit les deux mondes.

## Les mondes-couleur

Cinq recettes de lumière servent la direction artistique des images (voir `da-image`) : `ardoise`
`#46647A`, `ambre` `#C89B5A`, `sauge` `#71805F`, `argile` `#BC8272`, `prune` `#5F5069`. Ce sont des
dominantes de scène, jamais des couleurs d'interface — elles n'apparaissent pas dans un bouton ou un
titre, seulement dans la colorimétrie d'un visuel.

## Do / Don't

- **Do** : contraste chaud, un vermillon porteur de sens, le gris pour le second plan, beaucoup d'air.
- **Don't** : blanc ou noir purs, plus d'un accent, vermillon décoratif, couleurs hors palette dans
  une interface, mondes-couleur en aplat d'UI.
