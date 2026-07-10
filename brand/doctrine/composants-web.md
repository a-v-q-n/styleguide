# Composants web

La charte AVQN portée à l'interface. Les composants héritent des non-négociables (contraste chaud, un
seul vermillon, beaucoup d'air) et des rôles sémantiques (`--bg`, `--fg`, `--muted`, `--rule`,
`--accent`) : ils fonctionnent à l'identique en clair et en nocturne sans code dédié. L'ambiance par
défaut d'un produit suit la règle de `couleur` : public = clair, interne = nocturne.

## Boutons

Trois variantes, une seule forme : radius `md` (6 px), padding généreux, label en Geist
demi-gras. Le vermillon est réservé à **l'action principale** — un seul bouton primaire par vue.

| Variante       | Fond                   | Texte     | Bordure     | Usage                            |
| -------------- | ---------------------- | --------- | ----------- | -------------------------------- |
| **Primaire**   | `--accent` (vermillon) | papier    | —           | l'action qui compte, une par vue |
| **Secondaire** | transparent            | `--fg`    | 1 px `--fg` | actions de second rang           |
| **Fantôme**    | transparent            | `--muted` | —           | actions tertiaires, discrètes    |

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
  Geist, placeholder en `--muted`. Le champ nu vit ici ; le formulaire complet l'assemble (voir
  « Formulaires »).

## Formulaires

Le formulaire assemble le champ nu en unité de saisie. Il parle en Geist du label au message : le
serif porte le message, il ne saisit pas.

- **Label** — Geist demi-gras, `--fg`, posé **au-dessus** du champ, à `sm` (8 px) du bord. Jamais de
  label flottant, jamais de label-placeholder.
- **Aide & placeholder** — `--muted`. L'aide vit sous le champ ; le placeholder montre un exemple de
  saisie, il ne remplace jamais le label.
- **Champ** — fond `--bg`, bordure 1 px `--rule`, radius `md`, texte `appui`, padding `sm` vertical /
  `md` horizontal. **hover** : la bordure passe à `--muted` ; **focus** : anneau vermillon (la
  bordure ne bouge pas) ; **disabled** : opacité 45 %.
- **Select** — le corps exact du champ, un chevron `--muted` à droite ; le menu déroulant reste
  natif.
- **Textarea** — un champ qui respire : quatre lignes à l'ouverture, redimensionnable verticalement
  seulement.
- **Case à cocher & radio** — carré radius `sm` (2 px) pour la case, cercle pour le radio ; 1 em de
  côté, bordure 1 px `--rule` sur `--bg`. Coché : fond vermillon, coche ou point papier. **Les coches
  sont l'accent de la vue** — dans un formulaire, aucun autre vermillon ne leur dispute l'attention,
  hors erreur.
- **Groupe de champs** — les champs d'un groupe s'espacent de `md` ; les groupes se séparent de
  `lg` ; un groupe se titre en Geist demi-gras, sans encadré.
- **Erreur** — inline, au plus près du champ : la bordure passe au vermillon, le message vermillon
  s'écrit sous le champ, à la taille de l'aide. Dans un formulaire en erreur, **c'est l'erreur qui
  porte le sens** — pas de rôle `--danger` supplémentaire, on reste dans la palette.
- **Validation positive** — discrète, en `--muted` (« enregistré ») ; jamais de vert, il n'existe pas
  dans la palette.
- **Actions** — l'envoi en **secondaire**, l'abandon en fantôme : dans un formulaire, le vermillon
  appartient aux coches — ou à l'erreur —, jamais au bouton.

**Do** : un label au-dessus de chaque champ, l'erreur collée à sa cause, des groupes qui respirent,
l'envoi en secondaire.
**Don't** : label flottant, astérisques criards, message d'erreur groupé en tête, couleur de succès,
bouton d'envoi vermillon.

## Tableaux

La donnée se lit à l'horizontale : le filet porte les lignes, l'air fait le reste.

- **En-tête** — `meta` (Geist Mono UPPERCASE, `--muted`), sans fond, fermé par un filet 1 px
  `--rule`. Il nomme, il ne crie pas.
- **Lignes** — séparées par un filet 1 px `--rule`. **Pas de zébrage** : le rythme vient du trait,
  pas d'un fond alterné.
- **Cellules** — Geist, `--fg`, padding horizontal `md` ; deux densités, jamais mélangées dans une
  même table : **confort** = padding vertical `md`, **compact** = `sm`.
- **Numérique** — colonnes de chiffres alignées à droite (l'en-tête aussi), chiffres tabulaires
  (`font-variant-numeric: tabular-nums`).
- **Survol** — la ligne prend un voile `--fg` à ~4 % ; l'en-tête ne réagit pas.
- **Cellule d'action** — dernière colonne, alignée à droite, un bouton fantôme toujours visible
  (rien n'apparaît « au survol seulement »).
- **Statut** — un badge (voir « Badges de statut ») ; jamais plus d'un badge vermillon par ligne.

**Do** : filets 1 px, densité choisie une fois, chiffres tabulaires à droite.
**Don't** : zébrage, bordures verticales, en-tête à fond plein, actions qui surgissent au survol.

## Filtres

Filtrer est un état, pas un décor : l'actif s'inverse franchement, le vermillon reste disponible pour
l'accent de la vue.

- **Chips** — Geist, radius `md`, bordure 1 px `--rule`, texte `--muted` ; **hover** : bordure et
  texte `--fg` ; **active** : surface inversée — fond `--fg`, texte `--bg`. Plusieurs chips peuvent
  être actives sans se disputer l'accent : l'inversion porte l'état, pas le vermillon.
- **Segmented control** — un conteneur bordure 1 px `--rule`, radius `md`, padding `xs` ; des
  segments fantômes (`--muted`), **un seul actif** : fond `--fg`, texte `--bg`, radius `sm`.
- **Recherche** — un champ standard (voir « Formulaires »), placeholder en verbe (« Filtrer les
  projets… »), largeur contenue (~36 ch), jamais pleine largeur.
- **Compteur de résultats** — `meta` `--muted` (« 12 résultats »), en fin de rangée, aligné à
  droite. Il constate l'effet du filtre.

**Do** : un actif inversé franc, un compteur qui dit l'effet, le focus en anneau comme partout.
**Don't** : chip vermillon, plusieurs segments actifs, filtres qui rechargent la page sans le dire.

## Notifications

Trois véhicules, du plus fugace au plus ancré. Tous parlent en Geist ; aucun ne sort de la palette —
pas de jaune d'alerte ni de vert de succès.

- **Toast** — le fugace. Surface **inversée** : fond `--fg`, texte `--bg`, radius `md`, élévation
  `float`, largeur max ~40 ch. Position : **en bas à droite**, à `lg` des bords. **Un seul à la
  fois** — le nouveau remplace l'ancien. Durée : **5 s**, portée à **8 s** s'il embarque une action
  (un lien `--accent`, lisible sur la surface inversée). Entrée et sortie en fondu `--motion-vif`.
- **Bannière de page** — l'ancrée. Pleine largeur en tête de vue, fond `--surface-tint`, filet 1 px
  `--rule` en tête et en pied, texte `appui`. **Si une action est requise : liseré vermillon de 3 px
  sur le bord gauche** — il compte comme l'accent de la vue. Elle persiste jusqu'à résolution, elle
  ne s'efface jamais seule.
- **Alerte inline** — la locale. Collée au contenu concerné : bordure 1 px `--rule`, radius `md`,
  padding `md`, texte `appui` ; le même liseré vermillon si elle exige un geste. Pas
  d'auto-effacement.

**Do** : un toast à la fois, la bannière qui reste tant que le problème reste, l'alerte près de sa
cause.
**Don't** : pile de toasts, couleurs sémantiques hors palette, notification décorative, toast pour
une erreur bloquante (c'est une bannière ou une modale).

## Badges de statut

Une pastille et un label : le statut se lit, il ne crie pas.

- **Anatomie** — pastille ronde de 0,5 em + label `meta` (Geist Mono UPPERCASE), espacés de `sm`.
  **Le badge est nu** : pas de fond, pas de bordure, pas de capsule colorée.
- **Statuts neutres** — pastille et label `--muted` : brouillon, archivé, en attente, terminé — tout
  ce qui est immobile.
- **Le vivant** — l'état actif, en cours, en ligne : pastille `--accent`, label `--fg`. **Jamais plus
  d'un badge vermillon par ligne** : une ligne ne porte qu'un seul statut vivant.
- Le badge n'est pas interactif ; pour filtrer par statut, une chip (voir « Filtres »).

**Do** : des neutres gris qui reculent, un seul vivant vermillon par ligne.
**Don't** : capsules multicolores, badge cliquable, deux pastilles vermillon côte à côte.

## Navigation applicative

- **Header d'app** — une barre d'environ 64 px : fond `--bg` légèrement translucide (voilé à ~82 %,
  flou léger) quand elle est collante, fermée par un filet 1 px `--rule`. À gauche, le **wordmark**
  (logo + nom du produit en serif) ; au centre ou à droite, les sections en `meta` (Geist Mono
  UPPERCASE) `--muted` ; l'**état actif** passe `--fg`, souligné d'un trait 2 px `--accent` — c'est
  l'accent de la vue. La bascule clair/nocturne vit à droite du header.
- **Un seul niveau** dans le header ; le second niveau vit dans la page (chips, segmented control).
- **Footer d'app** — sobre : un filet `--rule` en tête, mentions et liens en `meta` `--muted`. Pas de
  sitemap-fleuve, pas de re-navigation complète.

**Do** : un actif souligné vermillon, des sections en mono qui reculent, un footer qui ferme.
**Don't** : deux niveaux de menus dans le header, un header opaque qui écrase la page, un footer
catalogue.

## Pagination

- Une rangée en `meta` (Geist Mono) : les numéros en `--muted`, **la page courante en `--fg`**
  demi-grasse — c'est la position, pas un lien. L'ellipse `…` en `--muted`.
- **Flèches** ← → en boutons fantômes ; en butée (première/dernière page), opacité 45 %.
- **Placement** : la pagination ferme la liste — alignée à droite sous un tableau, centrée sous une
  grille de cartes.
- Focus en anneau vermillon, comme partout.

**Do** : la courante qui se lit d'un coup d'œil, des flèches discrètes.
**Don't** : pastilles pleines par page, pagination vermillon, boutons « premier/dernier » verbeux.

## États vides

Un état vide est une invitation, pas une excuse.

- **Anatomie** — un label de catégorie en `meta` (`--muted`), un titre serif court qui dit l'état
  (« Aucun projet encore »), **une** phrase d'appui `--muted` qui dit le geste, **une** action.
  Centré dans la zone vide, largeur max ~44 ch : l'air fait le reste.
- **L'action est le primaire de la vue** — une vue vide n'a pas d'action plus importante que d'en
  sortir. Le vermillon de la vue appartient au bouton : la catégorie reste grise, pas d'eyebrow
  vermillon qui lui disputerait l'attention.
- **Illustration facultative** — un trait fin monochrome `--muted` ; l'absence d'illustration est le
  défaut. Jamais de scène décorative qui crie plus fort que le titre.

**Do** : un titre qui constate, une phrase qui invite, une seule action.
**Don't** : paragraphe d'excuses, illustration criarde, trois boutons concurrents, eyebrow vermillon
au-dessus d'un bouton vermillon.

## Chargement

On attend dans la matière de la page, pas dans un théâtre.

- **Skeleton** — pour une vue ou une liste qui arrive : des blocs au voile `--fg` à ~6 %, radius `sm`
  pour les lignes de texte, `md` pour les surfaces ; la silhouette suit la mise en page réelle.
  Pulsation douce d'opacité (100 → 60 %) sur `--motion-souffle`. **Pas de shimmer** : le balayage
  lumineux est un dégradé, la marque n'en a pas.
- **Spinner** — pour une action en cours, courte et localisée (bouton, cellule) : un anneau d'1 em,
  trait 2 px, piste `--rule`, arc `--muted`, rotation `--motion-rotation` linéaire. Il ne porte pas
  de sens : jamais vermillon.
- **Pas de pourcentages fantaisistes** — une progression ne s'affiche que mesurée ; sinon, skeleton
  ou spinner.

**Do** : une silhouette fidèle, une pulsation qu'on sent à peine, le bon indicateur pour la bonne
attente.
**Don't** : shimmer en dégradé, spinner vermillon plein écran, « 87 % » inventé.

## Modales

- **Voile** — l'encre à 40 % (`ink`), identique dans les deux ambiances : l'encre est la matière de
  l'ombre. Il couvre tout, la page ne défile plus derrière.
- **Surface** — `--bg`, bordure 1 px `--rule`, radius `md`, padding `lg`, élévation `float`. Largeur
  confortable (max ~34 rem), jamais pleine largeur ; centrée dans le viewport.
- **Anatomie** — titre serif, corps en Geist, **actions en pied alignées à droite : un primaire
  max**, l'annulation en fantôme. La croix de fermeture, fantôme, en haut à droite.
- **Fermeture** — Échap et la croix ferment toujours ; le clic sur le voile ferme aussi, **sauf si la
  modale contient une saisie entamée**. Le focus est piégé dans la modale et rendu à l'élément
  ouvreur en sortant.
- **Entrée** — un fondu `--motion-vif`, sans zoom ni glissade.
- **Une modale à la fois** ; si le contenu déborde, c'est une page, pas une modale.

**Do** : un voile d'encre, une surface sobre, Échap qui marche toujours.
**Don't** : modale sur modale, plein écran, animation théâtrale, croix supprimée.

## Mouvement

Le mouvement AVQN confirme, il ne divertit pas. Trois durées, en tokens :

| Token               | Durée   | Usage                                             |
| ------------------- | ------- | ------------------------------------------------- |
| `--motion-vif`      | 150 ms  | transitions d'état (hover, focus, fondu, bascule) |
| `--motion-rotation` | 900 ms  | la rotation du spinner (linéaire)                 |
| `--motion-souffle`  | 2400 ms | la pulsation du skeleton                          |

Les transitions s'assouplissent en `ease`, la rotation reste `linear`. Jamais d'animation
décorative : pas de parallaxe, pas de rebond, pas d'apparitions en cascade. Sous
`prefers-reduced-motion`, la pulsation du skeleton s'arrête (le voile reste, statique) et les fondus
deviennent instantanés ; le spinner, seul à informer, continue de tourner.

## Do / Don't

- **Do** : un seul primaire vermillon par vue, un focus visible, des cartes sobres à bord fin, des
  filets 1 px, des surfaces inversées franches pour l'état actif, des badges nus, la même hiérarchie
  qu'ailleurs.
- **Don't** : plusieurs boutons vermillon, un focus supprimé, des ombres lourdes, des dégradés (fonds
  comme shimmer), du zébrage, des couleurs sémantiques hors palette (vert de succès, jaune d'alerte),
  des coins très arrondis, du vermillon décoratif.
