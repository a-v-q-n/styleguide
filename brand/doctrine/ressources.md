# Ressources

Le support « bibliothèque » de la marque : les visuels des ressources (lead magnets, guides,
tutos, cheatsheets). Deux formats — la **cover** qui donne envie d'ouvrir, l'**illustration**
qui enseigne un élément d'interface dans la page. L'esthétique vient du socle ; ici ne vivent
que le cadre et les règles du canal.

## Les formats

Les valeurs exactes vivent dans les tokens (`formats.ressource`).

| Format           | Dimensions | Ratio | Usage                                                                                      |
| ---------------- | ---------- | ----- | ------------------------------------------------------------------------------------------ |
| **cover**        | 1280 × 720 | 16:9  | bannière de couverture — la card recadre, garder les éléments-clés dans des marges de ~8 % |
| **illustration** | 1600 × 900 | 16:9  | figure pédagogique posée dans la page                                                      |

## La cover : une accroche-objectif

Une seule chose porte la cover : une **accroche-objectif** qui dit ce qu'on va apprendre,
lisible sans le titre — la phrase qu'on mettrait sur le programme d'une formation, de
préférence en mode action. Quatre formes, combinables : le verbe d'apprentissage
(« Savoir… », « Comprendre… »), le périmètre chiffré (« Les N … pour … »), la durée réelle
(« X en N minutes »), le libellé descriptif (« Sujet : ce que c'est »).

Deux tests de relecture, obligatoires :

- **Clarté** — si on ne comprend pas de quoi parle la ressource en lisant seulement l'image,
  l'accroche est ratée.
- **Anti-slogan** — si la phrase pourrait vendre autre chose que cette ressource, on jette :
  antithèses, promesses émotionnelles, maximes, formules elliptiques ou génériques.

L'accroche est le **seul texte** : ni sous-titre, ni kicker, ni label, ni logo. L'unique accent
vermillon est un segment de l'accroche en italique, ou un détail de l'objet — jamais les deux
avec force.

### Le climat + l'objet central

- **L'ambiance** suit la nature du sujet : nocturne (encre + lueur) pour le technique — code,
  terminal, n8n ; claire (papier quadrillé) pour les concepts et fondations.
- **L'objet central évoque la nature du contenu** : fenêtre code/terminal (cours, tuto), fiche
  document (le sujet est un fichier), boîte de dialogue (le sujet est une interaction), ligne de
  workflow + node (automatisation n8n), accroche en escalier (conceptuel), type fantôme géant
  (fondations). Deux ressources voisines ne portent pas le même objet si leur nature diffère.

### Le gabarit cheatsheet

Le seul type à porter un badge (l'unique exception aux labels) : pastille **CHEATSHEET** Geist
Mono UPPERCASE sur aplat vermillon en haut-gauche, accroche seule sur une plaque centrale cadrée
d'un filet vermillon (pas de segment vermillon dans l'accroche — l'accent est pris), tapisserie
pleine page atténuée (~0.4) qui évoque le contenu sans vermillon.

## L'illustration : la maquette filaire

L'illustration montre **un élément d'interface pour l'enseigner** — une illustration = un
élément. La fausse UI est dessinée avec le langage de la charte : fond papier quadrillé, fenêtre
d'app posée dessus, structure en traits `filet` et textes gris qui reculent, labels réels en
Geist (le vocabulaire s'apprend avec de vrais mots). **L'élément enseigné est le seul porteur du
vermillon** : mise en évidence au trait + annotation eyebrow (carré vermillon, Geist Mono
UPPERCASE) posée hors de la fenêtre — l'esprit de la figure technique, en interface.

### Invariants exacts

- **Scène** : canvas 1600×900, fond papier `#FAF8F3` + quadrillage encre 3 % au pas de 46 px ;
  la fausse UI est une **fenêtre** de ~1160×620 centrée, fond blanc `#FFFFFF`, trait encre
  `1.5px solid #211C17`, radius 6 px.
- **Ce qui recule** : structure en filets `#E7E1D8` (1 px), textes secondaires gris `#7A726A`
  (19-22 px, Geist), contenus sans importance en « ghosts » (barres `#E7E1D8`, radius 3 px,
  hauteur 16 px). Eyebrows d'UI en Geist Mono 15 px, interlettrage .18em, gris.
- **Ce qui porte sans vermillon** : titres encre Geist 500 (24-34 px) ; état actif / bouton
  primaire en **encre pleine** (`#211C17`, texte papier) — jamais en vermillon.
- **L'élément enseigné (le seul vermillon)** : classe `.focus` = `outline: 3px solid #E0542B`
  (offset −3 px) sur l'élément ; **annotation** `.annot` hors fenêtre = Geist Mono 600, 28 px,
  UPPERCASE, interlettrage .18em, vermillon, précédée d'un carré vermillon 12 px ; reliée par un
  `.tick` vertical vermillon de 2 px (~34 px de haut) qui touche le bord de la fenêtre.
- **Modale** : l'app derrière reste en ghosts sous un voile léger `rgba(33,28,23,.10)` — jamais
  de grisaille lourde ni de `grayscale`.
- **Textes** : labels français réels (le vocabulaire s'apprend avec de vrais mots) ; données
  d'exemple crédibles (Acme, Clients 147…), jamais de lorem.
- **Interdits** : deuxième vermillon, ombres portées, chrome de navigateur, dégradés, palette
  hors charte.

## Do / Don't

- **Do** : une accroche qui nomme son sujet, les deux tests, un objet qui reflète la nature du
  contenu, marges 8 % (cover) · une illustration = un élément, labels français réels, le
  vermillon sur l'élément enseigné seulement, annotation eyebrow.
- **Don't** : slogan, doublon du titre, logo ou label hors badge cheatsheet · palette hors
  charte, deux éléments en vermillon, maquette sans élément enseigné, réalisme de screenshot
  (ombres portées, chrome de navigateur).
