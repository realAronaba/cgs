# Guide de développement — Site CGS

Ce fichier est le guide vivant du site. Toute évolution importante du contenu, du design ou du déploiement doit être ajoutée à la section « Journal des évolutions ». Mettre à jour les consignes lorsqu'une décision du cabinet ou une nouvelle version du site les rend obsolètes.

## 1. Projet et état actuel

- Site vitrine en français pour Carbure Global Service (CGS), cabinet de conseil de droit sénégalais basé à Dakar.
- Site statique d'une page. Il n'y a ni framework, ni dépendance à installer, ni étape de compilation.
- L'entrée du site est `index.html`, à la racine du projet.
- Le logo fourni est `assets/cgs-logo.jpg`.
- Les textes de référence sont ceux transmis par le client dans la conversation. Ne pas remplacer le positionnement par une offre différente.
- Dépôt GitHub de destination identifié : `realAronaba/cgs` (public, branche par défaut `main`).
- La publication du site via GitHub Pages n'est pas encore configurée.

## 2. Positionnement à préserver

CGS aide les grandes entreprises et les organisations publiques d'Afrique de l'Ouest à concevoir, conduire et évaluer leurs projets, de la réflexion initiale à la mesure des résultats.

Les quatre grands domaines sont :

1. Stratégie et cadrage.
2. Pilotage, suivi et évaluation.
3. Transformation numérique et conduite du changement.
4. Formation et renforcement des compétences.

Les marqueurs du cabinet sont la continuité sur tout le cycle projet, l'indépendance technologique, la transmission des compétences, la mesure des résultats, l'expérience des environnements exigeants et l'ancrage local.

## 3. Règles de rédaction

- Écrire en français professionnel, simple, direct et humain.
- S'adresser au lecteur avec « vous » et parler de CGS avec « nous ».
- Préférer les phrases courtes, les verbes actifs et les bénéfices concrets.
- Éviter les répétitions entre les rubriques et le jargon lorsqu'un mot courant suffit.
- Dans « Nos expertises », garder uniquement les quatre grands domaines et une courte phrase de présentation par domaine. Ne pas réintroduire de listes de prestations ou de détails en puces sans demande explicite.
- Ne pas inventer de références clients, de chiffres, de certifications, de résultats ou de partenariats.
- La mention `cgs-sarl@outlook.com` vient de la maquette existante. La faire confirmer par le client avant la publication publique.

## 4. Design et expérience

- Prendre le logo fourni comme référence de marque : noir, bronze/doré et fond clair.
- Garder une présentation sobre, lisible et adaptée à une clientèle de grandes entreprises et d'organisations publiques.
- Préserver l'affichage mobile, le menu mobile, les liens de navigation, les états de focus clavier et le lien d'accès direct au contenu.
- Garder les textes lisibles et les boutons explicites. Ne pas ajouter d'animations ou d'éléments décoratifs qui nuisent à la lisibilité.
- Conserver le logo original dans `assets/cgs-logo.jpg`, sauf demande explicite de remplacement.

## 5. Fichiers du site

- `index.html` : contenu, structure, métadonnées et navigation.
- `styles.css` : couleurs, typographie, mise en page et règles responsive.
- `script.js` : ouverture/fermeture du menu mobile et année du pied de page.
- `assets/cgs-logo.jpg` : logo fourni.
- `favicon.svg` : icône de l'onglet.
- `README.md` : présentation et instructions rapides du projet.
- `AGENTS.md` : règles de travail et historique évolutif.

Ne pas ajouter de chaîne de compilation, de bibliothèque ou de service externe si une modification simple des fichiers existants suffit.

## 6. Étapes de développement à suivre

Pour chaque nouvelle évolution :

1. Lire la demande et consulter les fichiers concernés avant de modifier le site.
2. Vérifier les consignes de ce fichier et les informations de référence fournies par le client.
3. Modifier les fichiers existants en gardant la structure statique du projet, sauf demande contraire.
4. Vérifier que les textes restent cohérents entre l'accueil, les expertises, la méthode, le cabinet et le contact.
5. Vérifier que les liens, les noms de fichiers et les chemins des ressources restent cohérents avec `index.html`.
6. Mettre à jour `README.md` si les modalités d'utilisation ou de publication changent.
7. Ajouter une entrée datée au journal ci-dessous pour toute évolution notable, ainsi que les décisions prises et les points restant à confirmer.
8. Dans le compte rendu, indiquer les fichiers modifiés et les vérifications réellement effectuées. Ne pas annoncer une mise en ligne tant qu'une URL publique n'a pas été obtenue et vérifiée.

## 7. Préparation et procédure de déploiement

### État actuel

- Le site peut être publié comme site statique, sans commande de compilation.
- La racine du projet contient `index.html`; le répertoire de publication est donc la racine du projet.
- Le dépôt GitHub choisi est `realAronaba/cgs`, public, avec `main` comme branche par défaut. Le remote local doit être configuré pour le push.
- Le push du code sur GitHub ne publie pas automatiquement le site. L'activation de GitHub Pages ou d'un autre hébergeur reste à faire si le client veut une URL publique.
- Confirmer l'adresse de contact avant publication.

### Étapes générales

1. Pousser le code vers le dépôt `realAronaba/cgs` sur la branche `main`.
2. Pour obtenir une URL publique, activer GitHub Pages sur `main` ou choisir un autre hébergeur statique.
3. Ne définir aucune commande de build. Si la plateforme demande un dossier de sortie, utiliser la racine du projet.
4. Si un domaine est fourni, le relier au site et activer HTTPS selon les instructions de l'hébergeur.
5. Ouvrir l'URL publique et vérifier le chargement de la page, du logo, du favicon, des styles, du menu mobile, des liens internes et du lien de contact.
6. Vérifier le titre et la description affichés dans l'onglet du navigateur, ainsi que le rendu sur mobile et ordinateur.
7. Noter dans le journal la plateforme, le dépôt ou le mode de transfert, le domaine, la date de publication et l'URL publique. Ne jamais inscrire de mot de passe, jeton ou clé secrète dans ce fichier.

## 8. Journal des évolutions

Mettre cette section à jour au fil du travail. Garder une trace brève des changements déjà faits, des décisions et des points en attente.

### 2026-09-24 — Première version du site

- Création d'un site vitrine statique à partir de la présentation institutionnelle de CGS.
- Intégration du logo fourni et création d'une identité visuelle noire, bronze et claire.
- Mise en place des rubriques d'accueil, expertises, méthode, cabinet, clientèles, différenciants et contact.
- Ajout d'une mise en page responsive et d'un menu mobile.

### 2026-09-24 — Ajustements du positionnement et du ton

- Réorientation du contenu d'une présentation centrée sur le numérique vers le cycle complet des projets de CGS.
- Réécriture des textes dans un ton plus humain, direct et professionnel, puis simplification du vocabulaire.
- Réduction de « Nos expertises » aux quatre domaines et à une phrase chacun; suppression des listes détaillées.

### 2026-09-24 — Préparation du push GitHub

- Dépôt public `realAronaba/cgs` identifié dans le compte GitHub connecté; dépôt vide et branche par défaut `main` au moment de la préparation.
- Le site est prêt à être poussé sur `main`. GitHub Pages reste à activer séparément pour obtenir une URL de site.

### À confirmer avant publication

- Hébergeur ou plateforme de déploiement.
- Adresse de contact à afficher publiquement.
- Nom de domaine, si CGS souhaite utiliser un domaine personnalisé.
