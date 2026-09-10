# DIGITALIA AGENCY — Guide complet du projet
### Site web + Web Analytics — Projet universitaire L1 Marketing Digital

---

## PARTIE A — Cahier des charges

**Client fictif :** Digitalia Agency, agence de marketing digital.

**Besoin :** Un site vitrine professionnel présentant 6 services (SEO, Community Management, Création de contenu, Web Design, Publicité digitale, Stratégie digitale), avec un formulaire de demande de devis comme objectif de conversion, et une solution de mesure d'audience (Google Analytics 4) permettant de suivre le comportement des visiteurs.

**Contraintes :**
- 4 pages minimum : Accueil, Services, À propos, Contact.
- Responsive (ordinateur, tablette, mobile).
- HTML5 / CSS3 / JavaScript, sans backend (site statique).
- Aucune donnée personnelle réelle collectée — le formulaire est une simulation.
- Mesure de 6 événements minimum via GA4.
- Livrables : code source, dashboard, analyse, présentation orale.

**Public cible du site :** dirigeants de PME et responsables marketing cherchant à externaliser leur communication digitale.

**Contrainte de délai :** projet à présenter en groupe de 3, semaine du 7 septembre.

---

## PARTIE B — Objectifs

**Objectif principal du site :** présenter les services de Digitalia Agency et générer des demandes de devis.

**Objectif de mesure :** suivre, via GA4, le parcours du visiteur de l'arrivée sur le site jusqu'à l'envoi du formulaire de devis (`form_submit` = conversion clé).

**Objectifs pédagogiques du projet :**
1. Savoir construire un site web fonctionnel et responsive.
2. Savoir configurer et exploiter un outil de Web Analytics (GA4).
3. Savoir définir des KPI pertinents pour un objectif business donné.
4. Savoir interpréter des données et en tirer des recommandations marketing.

---

## PARTIE C — Architecture du site

```
Visiteur
   │
   ▼
Accueil (index.html) ──► Services (services.html) ──► Contact (contact.html) ──► form_submit (conversion)
   │                              │
   ▼                              ▼
À propos (about.html)     Clic sur un service (service_click)
```

- **Navigation** : header sticky commun aux 4 pages, avec bouton CTA « Demander un devis » toujours visible.
- **Parcours de conversion principal** : Accueil → Services → Contact → Envoi du formulaire.
- **Parcours secondaire** : Accueil → À propos → Contact.
- Toutes les pages partagent le même `css/style.css` et `js/script.js`.

---

## PARTIE D — Design

**Palette de couleurs :**
| Nom | Hex | Usage |
|---|---|---|
| Encre (bleu-nuit) | `#14213D` | Fond header/footer, titres |
| Papier | `#F7F7F4` | Fond principal |
| Signal (orange) | `#FF5A36` | Boutons, CTA, accents |
| Sarcelle | `#0FA98A` | Confirmations, succès |
| Gris | `#6B7280` | Texte secondaire |

**Typographies :** Space Grotesk (titres, moderne et géométrique — évoque le digital) + Inter (texte courant, très lisible).

**Principes de design :** cartes de services avec léger effet de survol, statistiques animées dans le hero, sections aérées (96px de marge verticale), boutons à coins légèrement arrondis, aucun élément superflu.

**Responsive :** menu transformé en panneau latéral sur mobile, grilles de services qui passent de 3 → 2 → 1 colonne selon la largeur d'écran.

---

## PARTIE E — Arborescence finale

```
digitalia-agency/
│
├── index.html
├── services.html
├── about.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   └── (emplacement pour visuels réels si besoin)
│
├── README.md
│
└── presentation/
    └── guide-complet.md   ← ce document
```

---

## PARTIE F — Code complet

Le code complet des 6 fichiers (`index.html`, `services.html`, `about.html`, `contact.html`, `css/style.css`, `js/script.js`) se trouve dans le dossier du projet livré avec ce guide. Points clés à savoir expliquer :

- **index.html** : structure sémantique (`header`, `section`, `footer`), snippet GA4 dans le `<head>`, attributs `data-track` sur les boutons pour le suivi analytics.
- **services.html** : détail des 6 services, chaque bouton « Demander un devis » transmet le service choisi à la page Contact via un paramètre d'URL (`?service=SEO`).
- **about.html** : mission, vision, valeurs, équipe fictive.
- **contact.html** : formulaire avec validation JavaScript, messages de succès/erreur, aucun envoi réel de données.
- **css/style.css** : variables CSS (`:root`) centralisant couleurs, typographies et rayons de bordure — facilite l'explication du design system.
- **js/script.js** : 4 blocs commentés (menu mobile, compteurs animés, événements GA4, validation du formulaire).

---

## PARTIE G — Installation et lancement

**ACTION À FAIRE PAR L'ÉTUDIANT :**
1. Récupérer le dossier `digitalia-agency/`.
2. Double-cliquer sur `index.html` : le site s'ouvre dans le navigateur par défaut.
3. Naviguer entre les pages via le menu pour vérifier que tous les liens fonctionnent.
4. Tester le formulaire de contact (remplir tous les champs puis cliquer sur « Envoyer ma demande »).
5. Résultat attendu : un message vert de confirmation s'affiche, aucune erreur dans la console (F12 → Console).

---

## PARTIE H — Mise en ligne (hébergement gratuit)

**Solution recommandée : GitHub Pages**

**ACTION À FAIRE PAR L'ÉTUDIANT :**
1. Créer un compte sur https://github.com (si pas déjà fait).
2. Créer un nouveau dépôt (repository), par exemple nommé `digitalia-agency`.
3. Sur la page du dépôt, cliquer sur « Add file » → « Upload files », puis glisser-déposer tout le contenu du dossier `digitalia-agency/`.
4. Cliquer sur « Commit changes » pour valider l'envoi des fichiers.
5. Aller dans l'onglet **Settings** du dépôt, puis dans la section **Pages** (menu de gauche).
6. Dans « Branch », sélectionner `main` et le dossier `/root`, puis cliquer sur **Save**.
7. Attendre 1 à 2 minutes : GitHub affiche l'URL publique du site (format `https://votre-pseudo.github.io/digitalia-agency/`).
8. Résultat attendu : le site s'affiche publiquement à cette adresse, exactement comme en local.

**Alternative simple : Netlify** — créer un compte sur https://netlify.com, puis glisser-déposer le dossier du projet dans la zone « Deploy » du tableau de bord ; Netlify génère automatiquement une URL publique.

---

## PARTIE I — Configuration Google Analytics 4

**ACTION À FAIRE PAR L'ÉTUDIANT :**

1. **Créer le compte Google Analytics**
   - Aller sur https://analytics.google.com
   - Se connecter avec un compte Google (en créer un si besoin).
   - Cliquer sur « Commencer à mesurer », donner un nom de compte (ex. « Digitalia Agency »).

2. **Créer la propriété**
   - Nommer la propriété (ex. « Site Digitalia Agency »).
   - Choisir le fuseau horaire et la devise (France / Euro).
   - Renseigner les informations sur l'activité (secteur : Marketing/Publicité, taille : petite entreprise).

3. **Créer le flux de données Web**
   - Choisir « Web » comme plateforme.
   - Renseigner l'URL du site (celle obtenue à la PARTIE H, ou `http://localhost` en phase de test).
   - Donner un nom au flux (ex. « Flux principal »).

4. **Récupérer le Measurement ID**
   - Une fois le flux créé, GA4 affiche un identifiant au format `G-XXXXXXXXXX`.
   - Ce Measurement ID doit remplacer `G-XXXXXXXXXX` dans les 4 fichiers HTML du site (2 emplacements par fichier, dans le `<head>`).

5. **Vérifier que Analytics fonctionne**
   - Ouvrir le site (en local ou en ligne).
   - Dans GA4, aller dans **Rapports → Temps réel**.
   - Naviguer sur le site dans un autre onglet : le nombre d'utilisateurs actifs doit passer à 1 en quelques secondes.

6. **Utiliser le rapport Temps réel / DebugView**
   - **Temps réel** (menu Rapports) : affiche les utilisateurs actifs, les pages vues et les événements des 30 dernières minutes.
   - **DebugView** (menu Admin → DebugView, ou via l'extension Chrome « Google Analytics Debugger ») : affiche le détail événement par événement avec tous les paramètres envoyés — très utile pour vérifier `cta_click`, `service_click`, `form_start`, `form_submit`.

---

## PARTIE J — Événements

| Événement | Objectif | Déclenchement | Paramètres envoyés | Vérification GA4 |
|---|---|---|---|---|
| `page_view` | Mesurer les pages consultées | Automatique à chaque chargement de page (GA4 le gère nativement) | `page_location`, `page_title` | Rapports → Temps réel → « Vues par page » |
| `cta_click` | Mesurer l'intérêt commercial | Clic sur un bouton « Demander un devis » (header, hero, CTA final) | `cta_text`, `cta_location` | Temps réel → Événements → `cta_click` |
| `service_click` | Mesurer l'intérêt par service | Clic sur « En savoir plus / Demander un devis » d'un service | `service_name` | Temps réel → Événements → `service_click` |
| `form_start` | Mesurer l'engagement dans le formulaire | Premier `focus` sur un champ du formulaire de contact | `form_name` | Temps réel → Événements → `form_start` |
| `form_submit` | Mesurer les demandes de devis (conversion) | Soumission valide du formulaire | `form_name`, `service_selected`, `budget_range` | Temps réel → Événements → `form_submit` |
| `contact_click` | Mesurer les clics sur les coordonnées | Clic sur email / téléphone / adresse | `contact_type` | Temps réel → Événements → `contact_click` |

Tous ces événements sont déclenchés via `gtag('event', ...)` dans `js/script.js`, en s'appuyant sur des attributs `data-track` placés directement dans le HTML — ce qui rend le suivi facile à étendre à de nouveaux boutons.

---

## PARTIE K — Conversions

**Conversion choisie : `form_submit`**

**Pourquoi ce choix ?** L'objectif principal du site est de générer des demandes de devis. L'envoi réussi du formulaire est l'action qui matérialise le mieux cet objectif business : c'est le moment où un visiteur devient un prospect qualifié.

**ACTION À FAIRE PAR L'ÉTUDIANT — Configurer la conversion dans GA4 :**
1. Aller dans **Admin → Événements** (colonne Propriété).
2. Repérer l'événement `form_submit` dans la liste (il doit être remonté au moins une fois pour apparaître).
3. Activer le bouton bascule « Marquer comme conversion » sur la ligne `form_submit`.
4. Vérifier dans **Admin → Conversions** que `form_submit` apparaît bien dans la liste.

**Mesurer le taux de conversion :**
```
Taux de conversion (%) = (Nombre de form_submit / Nombre de sessions) × 100
```
Ce taux est directement visible dans GA4 : Rapports → Cycle de vie → Engagement → Conversions, ou en le calculant manuellement à partir des deux métriques.

---

## PARTIE L — KPI

| KPI | Définition | Formule | Intérêt marketing | Exemple d'interprétation |
|---|---|---|---|---|
| Utilisateurs | Nombre de visiteurs uniques | — | Mesure l'audience globale | 500 utilisateurs sur 30 jours = notoriété naissante |
| Sessions | Nombre de visites (un utilisateur peut revenir) | — | Mesure la fréquence de visite | 650 sessions / 500 utilisateurs = certains reviennent |
| Vues | Nombre total de pages consultées | — | Mesure l'engagement avec le contenu | 1800 vues = ~2,8 pages par session en moyenne |
| Temps d'engagement moyen | Temps pendant lequel le site est actif à l'écran | Temps total engagé / sessions | Indique l'intérêt réel pour le contenu | 1min40 sur la page Services = contenu qui retient l'attention |
| Clics sur les CTA | Nombre de clics sur « Demander un devis » | — | Mesure l'intention d'achat | 80 clics CTA pour 500 utilisateurs = 16 % d'intérêt commercial |
| Formulaires commencés | Nombre de `form_start` | — | Mesure l'entrée dans le tunnel de conversion | 60 formulaires commencés sur 80 clics CTA |
| Formulaires envoyés | Nombre de `form_submit` | — | Mesure les prospects générés | 35 formulaires envoyés = 35 prospects qualifiés |
| Taux de conversion | Part des sessions aboutissant à un devis | (form_submit / sessions) × 100 | Mesure l'efficacité globale du site | 35 / 650 = 5,4 % de taux de conversion |
| Sources de trafic | Origine des visiteurs (Google, réseaux sociaux, direct...) | — | Identifie les canaux d'acquisition efficaces | 60 % via Google = le SEO fonctionne bien |
| Pages les plus consultées | Classement des pages par nombre de vues | — | Identifie le contenu qui intéresse le plus | La page Services devance largement À propos |

### Tableau KPI (exemple — données de démonstration / simulation)

| KPI | Objectif | Résultat *(démo)* | Interprétation |
|---|---|---:|---|
| Utilisateurs | Mesurer l'audience | 500 | Audience correcte pour un site récent |
| Sessions | Mesurer les visites | 650 | Quelques visiteurs reviennent (1,3 session/utilisateur) |
| Vues | Mesurer la consultation | 1 800 | Bon niveau de navigation interne |
| Temps d'engagement | Mesurer l'intérêt | 1min 40 | Le contenu retient l'attention |
| Clics CTA | Mesurer l'intérêt commercial | 80 | 16 % des visiteurs manifestent un intérêt commercial |
| Formulaires commencés | Mesurer les prospects potentiels | 60 | Bon taux d'entrée dans le tunnel (75 % des clics CTA) |
| Formulaires envoyés | Mesurer les prospects réels | 35 | Perte entre le début et la fin du formulaire (58 %) |
| Taux de conversion | Mesurer l'efficacité | 5,4 % | Taux correct pour un site de service B2B |

> **Données de démonstration / simulation** — ces chiffres illustrent la lecture du dashboard ; ils ne représentent pas un trafic réel mesuré.

---

## PARTIE M — Simulation quasi temps réel

Scénario de test à réaliser pendant la démonstration (en ouvrant le site dans un onglet et GA4 → Temps réel / DebugView dans un autre) :

| Test | Action du visiteur | Résultat attendu dans GA4 |
|---|---|---|
| 1 | Arrive sur `index.html` | Compteur « utilisateurs actifs » +1, `page_view` |
| 2 | Va sur la page Services | Nouveau `page_view` |
| 3 | Clique sur « En savoir plus » du service SEO | `service_click` avec `service_name = SEO` |
| 4 | Clique sur « Demander un devis » | `cta_click` avec `cta_location` correspondant |
| 5 | Commence à remplir le formulaire (clique dans le champ « Nom ») | `form_start` |
| 6 | Complète et envoie le formulaire | `form_submit` (conversion) |

**Comment le montrer à l'oral :** partager l'écran avec deux fenêtres côte à côte — le site à gauche, le rapport GA4 Temps réel (ou DebugView) à droite — et dérouler les 6 tests en direct devant le jury.

---

## PARTIE N — Dashboard Looker Studio

**ACTION À FAIRE PAR L'ÉTUDIANT :**
1. Aller sur https://lookerstudio.google.com et se connecter avec le même compte Google que GA4.
2. Cliquer sur « Créer » → « Rapport ».
3. Choisir la source de données **Google Analytics**, sélectionner la propriété créée en PARTIE I, puis cliquer sur « Ajouter ».

**Éléments à construire :**
| Élément | Type de graphique | Dimension | Métrique |
|---|---|---|---|
| Utilisateurs dans le temps | Graphique en courbe | Date | Utilisateurs actifs |
| Sessions dans le temps | Graphique en courbe | Date | Sessions |
| Conversions dans le temps | Graphique en courbe | Date | Événements clés (form_submit) |
| Pages populaires | Tableau | Titre de la page | Vues |
| Sources de trafic | Graphique en secteurs | Source/support de la session | Sessions |
| Détail des événements | Tableau | Nom de l'événement | Nombre d'événements |
| Indicateurs clés | Scorecards (chiffres) | — | Utilisateurs, Sessions, Conversions, Taux de conversion |

**Organisation du dashboard (1 page) :**
```
┌───────────────────────────────────────────────┐
│  Utilisateurs | Sessions | Conversions | Taux  │  ← scorecards
├───────────────────────┬─────────────────────────┤
│ Évolution du trafic   │ Évolution des conversions│  ← courbes
├───────────────────────┼─────────────────────────┤
│ Pages les + consultées│ Sources de trafic (secteurs)│
├───────────────────────┴─────────────────────────┤
│  Détail des événements (tableau)                 │
└───────────────────────────────────────────────┘
```

---

## PARTIE O — Analyse des résultats

Exemples d'interprétation à adapter aux résultats réels observés :

- **Si Google est la principale source de trafic :** cela montre que le référencement naturel constitue une source importante d'acquisition ; renforcer la stratégie SEO (mots-clés, contenu de blog) serait pertinent pour amplifier cet effet.
- **Si beaucoup de visiteurs consultent les Services mais peu remplissent le formulaire :** le parcours de conversion présente une perte entre la consultation des services et l'envoi du formulaire ; simplifier le formulaire ou rendre le CTA plus visible pourrait réduire cet abandon.
- **Si le temps d'engagement sur la page Services est élevé mais le taux de clic CTA faible :** le contenu intéresse mais ne convainc pas suffisamment de passer à l'action ; retravailler la formulation ou la position du bouton « Demander un devis » pourrait aider.
- **Si le trafic direct domine (visiteurs tapant l'URL directement) :** cela peut indiquer une notoriété déjà existante, mais une faible acquisition via de nouveaux canaux (SEO, réseaux sociaux, publicité) qu'il faudrait développer.
- **Si le taux d'abandon entre `form_start` et `form_submit` est élevé :** le formulaire est probablement perçu comme trop long ou trop intrusif (trop de champs obligatoires) ; réduire le nombre de champs requis pourrait améliorer la conversion.

---

## PARTIE P — Recommandations marketing

| Axe | Recommandation |
|---|---|
| SEO | Produire du contenu de blog ciblant les requêtes des clients potentiels (ex. « comment améliorer sa visibilité en ligne ») pour renforcer le trafic organique. |
| UX | Réduire la longueur du formulaire de contact ou le découper en 2 étapes pour limiter l'abandon entre `form_start` et `form_submit`. |
| CTA | Tester une formulation alternative du bouton (« Obtenir mon devis gratuit ») pour augmenter le taux de clic. |
| Formulaire | Ajouter une estimation du délai de réponse à proximité du bouton d'envoi, pour rassurer le visiteur. |
| Contenu | Mettre en avant des cas clients concrets avec des résultats chiffrés pour renforcer la crédibilité. |
| Réseaux sociaux | Développer une présence régulière (LinkedIn notamment, pertinent pour une cible B2B) pour diversifier les sources de trafic. |
| Acquisition | Diversifier les canaux si une seule source (ex. Google) concentre l'essentiel du trafic, pour réduire la dépendance. |
| Conversion | Ajouter des éléments de réassurance (témoignages, logos clients) à proximité du formulaire. |
| Performance | Vérifier régulièrement la vitesse de chargement des pages, un facteur qui influence à la fois le SEO et le taux de conversion. |

---

## PARTIE Q — Répartition des tâches entre 3 étudiants

### Étudiant 1 — Développement
**Réalise :** structure HTML des 4 pages, feuille de style CSS responsive, script JavaScript (menu mobile, compteurs, validation du formulaire).
**Doit savoir expliquer :** la structure sémantique HTML, comment le responsive fonctionne (media queries), comment la validation du formulaire est faite en JavaScript.
**Questions possibles du professeur :** « Comment avez-vous rendu le site responsive ? », « Comment fonctionne la validation du formulaire ? », « Pourquoi avoir choisi du JavaScript natif plutôt qu'un framework ? »

### Étudiant 2 — Design / UX
**Réalise :** identité visuelle (palette, typographies), maquette des sections, rédaction des contenus (textes, témoignages, présentation de l'équipe).
**Doit savoir expliquer :** les choix de couleurs et de typographie, la logique du parcours utilisateur (pourquoi le CTA est répété plusieurs fois), l'adaptation du design sur mobile.
**Questions possibles du professeur :** « Pourquoi cette palette de couleurs ? », « Comment avez-vous pensé le parcours utilisateur vers la conversion ? », « Comment le design s'adapte-t-il sur mobile ? »

### Étudiant 3 — Analytics / Marketing
**Réalise :** configuration de GA4, définition des événements et de la conversion, construction du dashboard Looker Studio, analyse des résultats et recommandations.
**Doit savoir expliquer :** le fonctionnement de GA4, la différence entre les KPI, pourquoi `form_submit` est la conversion choisie, comment lire le dashboard.
**Questions possibles du professeur :** « Comment avez-vous configuré Google Analytics ? », « Pourquoi ces KPI et pas d'autres ? », « Comment interprétez-vous ces résultats ? »

*Les trois étudiants doivent être capables de présenter l'ensemble du projet, même en dehors de leur domaine principal.*

---

## PARTIE R — PowerPoint complet (16 slides)

| Slide | Titre | Contenu à mettre | Ce qu'il faut dire à l'oral |
|---|---|---|---|
| 1 | Titre du projet | « Digitalia Agency — Site web & Web Analytics », noms des 3 étudiants, date | Présentation rapide du groupe et du projet |
| 2 | Contexte et problématique | Rappel de la consigne : site + KPI + outil analytics | « Nous devions concevoir un site fonctionnel mesurable » |
| 3 | Présentation de Digitalia Agency | Description de l'agence fictive et ses 6 services | Présenter le thème choisi et son objectif business |
| 4 | Objectifs du site | Objectif principal : générer des demandes de devis | Expliquer pourquoi cet objectif a été retenu |
| 5 | Architecture du site | Schéma des 4 pages et du parcours de conversion | Décrire la navigation et le parcours type d'un visiteur |
| 6 | Présentation du site | Captures d'écran des 4 pages | Montrer rapidement chaque page |
| 7 | Fonctionnalités | Menu mobile, compteurs animés, validation du formulaire | Expliquer les fonctionnalités JS clés |
| 8 | Google Analytics 4 | Schéma compte → propriété → flux → Measurement ID | Expliquer la configuration GA4 |
| 9 | Événements | Tableau des 6 événements suivis | Détailler chaque événement et son objectif |
| 10 | KPI | Tableau des 10 KPI | Expliquer les KPI les plus importants |
| 11 | Dashboard | Capture du dashboard Looker Studio | Présenter l'organisation du dashboard |
| 12 | Résultats | Tableau KPI avec résultats (démo) | Présenter les chiffres obtenus (ou simulés) |
| 13 | Interprétation | 2-3 exemples d'interprétation | Expliquer ce que révèlent les chiffres |
| 14 | Recommandations | Tableau des recommandations par axe | Proposer des actions concrètes |
| 15 | Répartition du travail | Tableau des 3 rôles | Chaque étudiant présente sa contribution |
| 16 | Conclusion | Bilan du projet et perspectives | Synthèse et ouverture (prochaines étapes) |

---

## PARTIE S — Script oral (10 à 15 minutes)

**Introduction (1 min) :** « Bonjour, nous allons vous présenter le projet Digitalia Agency, un site web pour une agence de marketing digital fictive, associé à une solution d'analyse de données avec Google Analytics 4. »

**Présentation du site (3 min) :** parcourir les 4 pages en direct, en insistant sur le bouton « Demander un devis » présent à chaque étape.

**Présentation de l'analytics (4 min) :** montrer la console GA4, dérouler la simulation temps réel (PARTIE M) en live, montrer les événements qui remontent en DebugView.

**Présentation des résultats et du dashboard (4 min) :** montrer le dashboard Looker Studio, commenter 2 à 3 chiffres clés et leur interprétation.

**Recommandations et conclusion (2 min) :** présenter 2 à 3 recommandations prioritaires et conclure sur ce que le projet a permis d'apprendre.

---

## PARTIE T — Questions/réponses du professeur

1. **Pourquoi avez-vous choisi ce thème ?** — Il correspond à un cas d'usage réaliste où la mesure de conversion a un sens business clair (génération de devis).
2. **Quel est l'objectif principal du site ?** — Générer des demandes de devis via le formulaire de contact.
3. **Pourquoi avoir choisi ces KPI ?** — Ils couvrent l'ensemble du parcours : de l'audience (utilisateurs, sessions) jusqu'à la conversion (formulaires envoyés, taux de conversion).
4. **Quelle est la différence entre utilisateur et session ?** — Un utilisateur est une personne unique ; une session est une visite. Un même utilisateur peut générer plusieurs sessions.
5. **Qu'est-ce qu'une conversion ?** — Une action qui a une valeur business pour le site, ici l'envoi du formulaire de devis.
6. **Pourquoi avoir choisi `form_submit` comme conversion ?** — Car c'est l'action qui transforme un visiteur en prospect qualifié, ce qui correspond exactement à l'objectif du site.
7. **Comment fonctionne GA4 ?** — Un code de suivi (gtag.js) envoie des événements à Google Analytics à chaque interaction définie (page vue, clic, soumission de formulaire).
8. **Comment avez-vous collecté les données ?** — Via le code GA4 intégré aux 4 pages du site, qui envoie automatiquement `page_view` et les événements personnalisés définis en JavaScript.
9. **Comment avez-vous vérifié les événements ?** — Avec le rapport Temps réel et le DebugView de GA4, en réalisant les tests décrits dans la simulation.
10. **Quelle est votre principale source de trafic ?** *(à adapter aux données réelles)* — Réponse basée sur le rapport « Acquisition » de GA4.
11. **Quelle est votre page la plus consultée ?** *(à adapter)* — Réponse basée sur le rapport « Pages et écrans ».
12. **Quel est votre taux de conversion ?** *(à adapter)* — Calculé via form_submit / sessions.
13. **Que signifie ce taux ?** — Il indique la proportion de visites qui aboutissent à une demande de devis, donc l'efficacité globale du site.
14. **Comment améliorer le taux de conversion ?** — En simplifiant le formulaire, en renforçant les éléments de réassurance, en clarifiant le CTA.
15. **Pourquoi utiliser un CTA ?** — Pour guider clairement le visiteur vers l'action attendue (demander un devis) plutôt que de le laisser deviner l'étape suivante.
16. **Que feriez-vous si le trafic diminuait ?** — Analyser les sources de trafic pour identifier le canal en baisse, puis renforcer le SEO ou la publicité digitale selon le cas.
17. **Quelle est votre contribution personnelle ?** — Réponse individuelle selon le rôle (développement / design / analytics).
18. **Quelles difficultés avez-vous rencontrées ?** — Par exemple la configuration initiale de GA4, ou l'articulation entre design et responsive.
19. **Quelles améliorations pourriez-vous apporter ?** — Ajouter un blog pour le SEO, un chat en direct, ou des tests A/B sur le CTA.
20. **Quelle serait votre prochaine étape ?** — Mettre le site en ligne durablement, laisser tourner GA4 sur plusieurs semaines pour obtenir des données réelles, puis ajuster la stratégie selon les résultats observés.

---

## PARTIE U — Checklist finale avant soutenance

- [ ] Le Measurement ID GA4 réel a remplacé `G-XXXXXXXXXX` dans les 4 pages.
- [ ] Le site est en ligne (GitHub Pages ou Netlify) et accessible publiquement.
- [ ] Les 6 événements ont été testés et apparaissent dans GA4 (Temps réel / DebugView).
- [ ] `form_submit` est bien marqué comme conversion dans GA4 (Admin → Conversions).
- [ ] Le dashboard Looker Studio est connecté à la propriété GA4 et affiche des données.
- [ ] Le tableau des KPI est rempli (avec la mention « données de démonstration » si nécessaire).
- [ ] Chaque étudiant sait expliquer sa partie ET les grandes lignes des deux autres.
- [ ] Le PowerPoint (16 slides) est prêt et testé (durée 10-15 min).
- [ ] La simulation temps réel (PARTIE M) a été répétée au moins une fois avant la présentation.
- [ ] Le README.md et ce guide sont inclus dans le rendu final.
