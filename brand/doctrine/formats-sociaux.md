# Formats sociaux

Le support « réseaux sociaux » de la marque : les formats des visuels de posts (LinkedIn en tête,
Instagram, Threads) et les règles d'affichage qui s'y appliquent. L'esthétique vient du socle
(couleur, typographie, ambiances, gestes-signature) ; les styles d'image (photo, schéma) s'y posent
tels quels. Ici ne vivent que le cadre et les règles du canal.

## Les formats

Les valeurs exactes vivent dans les tokens (`formats.social`).

| Format       | Dimensions  | Ratio | Usage                                            |
| ------------ | ----------- | ----- | ------------------------------------------------ |
| **portrait** | 1080 × 1350 | 4:5   | le défaut — portée maximale sur les trois canaux |
| **carré**    | 1080 × 1080 | 1:1   | feed universel                                   |
| **story**    | 1080 × 1920 | 9:16  | stories, couverture verticale                    |
| **lien**     | 1200 × 627  | 16:9  | aperçu de lien                                   |

Un visuel n'a pas de format figé : la composition est pilotée par ses dimensions cibles. Une
composition en flux suit un changement de ratio proprement ; une composition à positionnement tenu
demande d'ajuster ses offsets — puis de revérifier le rendu à l'œil.

## Les règles d'affichage

- **Plancher 32 px** (base 1080) : tout texte à l'écran fait au moins 32 px. La discrétion vient du
  gris et du placement, jamais d'une taille minuscule.
- **Retours à la ligne à la main** : unités de sens gardées ensemble, jamais un mot seul en
  dernière ligne.
- **Un seul vermillon porteur par visuel** — le mot actif, le filet, l'objet qui porte le sens.
- **Une ambiance par visuel** : papier quadrillé (clair, défaut) ou nocturne (encre + lueur).
- **En carrousel, alterner clair / nocturne** d'une slide à l'autre — c'est ce qui donne le rythme.
  La slide 1 est une couverture qui annonce et invite à faire défiler.
- **Coins libres** : ni logo ni signature en coin. La DA suffit.

## Les familles de composition

Huit familles couvrent les formes de contenu des posts. On choisit d'après la **forme du contenu**,
jamais d'après l'esthétique (elle est commune à toutes).

| Famille             | Cas d'usage                                        | Ambiance | Format natif |
| ------------------- | -------------------------------------------------- | -------- | ------------ |
| **statement**       | une prise de position, une idée en une phrase      | clair    | portrait     |
| **manifeste**       | la même idée, en emphase maximale sur l'encre      | nocturne | story        |
| **chiffre**         | un résultat chiffré brut — le chiffre fait le hook | clair    | carré        |
| **liste**           | N étapes, N erreurs, N principes                   | clair    | portrait     |
| **citation**        | la parole de quelqu'un d'autre                     | nocturne | portrait     |
| **terminal**        | un post technique (commande, recette n8n, Claude)  | nocturne | lien         |
| **carrousel-cover** | la slide 1 d'un carrousel                          | clair    | portrait     |
| **image-éditorial** | une image générée en grand, titre serif dessous    | clair    | portrait     |

Les gabarits HTML qui implémentent ces familles vivent dans le skill `creer-un-visuel-social`
(repo `skills`), qui consomme cette doctrine.
