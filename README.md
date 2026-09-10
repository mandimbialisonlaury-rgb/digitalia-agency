# Digitalia Agency — Projet universitaire (L1 Marketing Digital)

## 1. Présentation du projet
Site vitrine fictif pour **Digitalia Agency**, une agence de marketing digital, réalisé dans le cadre d'un projet universitaire combinant **développement web** et **Web Analytics**. Le site présente les 6 services de l'agence et a pour objectif principal de générer des demandes de devis via un formulaire de contact.

## 2. Objectif
Générer des demandes de devis (`form_submit`) en mesurant le parcours des visiteurs avec **Google Analytics 4** : de l'arrivée sur le site jusqu'à l'envoi du formulaire.

## 3. Technologies utilisées
- HTML5 / CSS3 / JavaScript (vanilla, sans framework)
- Google Fonts (Space Grotesk + Inter)
- Google Analytics 4 (gtag.js)
- Looker Studio (dashboard)
- Hébergement gratuit recommandé : GitHub Pages ou Netlify

## 4. Installation / utilisation en local
1. Télécharger ou cloner le dossier `digitalia-agency/`.
2. Ouvrir `index.html` directement dans un navigateur (double-clic) — aucun serveur n'est requis.
3. Pour un rendu plus fidèle à la mise en ligne, utiliser l'extension VS Code **Live Server**.

## 5. Configuration Google Analytics 4
1. Remplacer `G-XXXXXXXXXX` par le Measurement ID réel dans les 4 fichiers HTML (`index.html`, `services.html`, `about.html`, `contact.html`), dans les deux emplacements du `<head>`.
2. Voir la **PARTIE I** du guide complet (`presentation/guide-complet.md`) pour la procédure détaillée de création du compte GA4.

## 6. Événements suivis
| Événement | Déclencheur |
|---|---|
| `page_view` | Automatique (GA4) à chaque changement de page |
| `cta_click` | Clic sur un bouton « Demander un devis » |
| `service_click` | Clic sur un service (accueil ou page Services) |
| `contact_click` | Clic sur email / téléphone / adresse |
| `form_start` | Premier champ du formulaire renseigné |
| `form_submit` | Envoi réussi du formulaire (**conversion**) |

## 7. KPI suivis
Utilisateurs, sessions, vues, temps d'engagement, clics CTA, formulaires commencés/envoyés, taux de conversion, sources de trafic, pages les plus consultées. Détail complet dans le guide (PARTIE L).

## 8. Dashboard
Dashboard Looker Studio connecté à la propriété GA4 — voir PARTIE N du guide pour la configuration pas-à-pas.

## 9. Membres du groupe et répartition des tâches
| Étudiant | Rôle | Responsabilités |
|---|---|---|
| Étudiant 1 | Développement | HTML, CSS, JavaScript, responsive |
| Étudiant 2 | Design / UX | Identité visuelle, maquette, contenu |
| Étudiant 3 | Analytics / Marketing | GA4, événements, KPI, dashboard, analyse |

## 10. Documentation complète
Le guide complet du projet (cahier des charges, architecture, configuration GA4 détaillée, simulation temps réel, dashboard, analyse, recommandations, script oral, Q/R professeur, tutoriel pas-à-pas) se trouve dans :
`presentation/guide-complet.md`

## 11. Avertissement
Ce projet est une **simulation universitaire**. Aucune donnée personnelle réelle n'est collectée : le formulaire de contact ne transmet aucune donnée à un serveur externe (démonstration uniquement).
