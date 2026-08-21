# ⚽ Africa Football Academy — Site Web International

> **Former des talents. Construire des destins. Transformer des vies.**

Un site web moderne, premium et international pour une académie de football, conçu pour détecter et former les jeunes talents, offrir un encadrement sportif/éducatif/humain, et permettre le financement via particuliers, entreprises, sponsors, fondations et ONG.

---

## 🚀 Démarrage rapide

### Prérequis

- [Node.js](https://nodejs.org/) (v18+)
- [Bun](https://bun.sh/) (recommandé) ou npm/yarn

### Installation

```bash
# Cloner ou décompresser le projet
cd football-academy

# Installer les dépendances
bun install
# ou
npm install
```

### Lancer le serveur de développement

```bash
bun dev
# ou
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173) dans le navigateur.

### Build de production

```bash
bun run build
```

Le dossier `dist/` contient les fichiers optimisés pour le déploiement.

---

## 📁 Structure du projet

```
football-academy/
├── index.html                    # Point d'entrée HTML
├── package.json                  # Dépendances et scripts
├── tsconfig.json                 # Configuration TypeScript
├── vite.config.ts                # Configuration Vite
├── components.json               # Configuration shadcn/ui
│
├── public/                       # Fichiers statiques
│   ├── logo.svg
│   └── manifest.webmanifest
│
└── src/
    ├── main.tsx                  # Bootstrap React + Router
    ├── index.css                 # Styles globaux + Tailwind
    ├── vite-env.d.ts
    │
    ├── components/               # Composants réutilisables
    │   ├── Header.tsx            # Navigation sticky
    │   ├── Footer.tsx            # Footer professionnel
    │   ├── HeroCarousel.tsx      # Carrousel hero 3 slides
    │   ├── SectionHeader.tsx     # En-têtes de section
    │   ├── ScrollReveal.tsx      # Animation au scroll
    │   ├── AnimatedCounter.tsx   # Compteurs animés
    │   ├── PageLayout.tsx        # Layout standard pages
    │   └── ui/                   # Composants shadcn/ui
    │
    ├── pages/                    # Toutes les pages
    │   ├── Landing.tsx           # Page d'accueil (15 sections)
    │   ├── Academy.tsx           # L'académie
    │   ├── Talents.tsx           # Nos talents
    │   ├── Formation.tsx         # Formation
    │   ├── Detection.tsx         # Détection des talents
    │   ├── Projects.tsx          # Projets de financement
    │   ├── Donate.tsx            # Soutenir / Faire un don
    │   ├── Partners.tsx          # Partenaires
    │   ├── News.tsx              # Actualités
    │   ├── Events.tsx            # Événements
    │   ├── Calendar.tsx          # Calendrier
    │   ├── Gallery.tsx           # Galerie médiathèque
    │   ├── Impact.tsx            # Impact social
    │   ├── Contact.tsx           # Contact
    │   ├── Legal.tsx             # Pages légales
    │   ├── Auth.tsx              # Authentification
    │   ├── Dashboard.tsx         # Dashboard
    │   └── NotFound.tsx          # 404
    │
    ├── data/
    │   └── academy.ts            # Données mockées (talents, projets, news...)
    │
    ├── convex/                   # Backend Convex (auth, schéma)
    ├── hooks/                    # Hooks React personnalisés
    ├── lib/                      # Utilitaires
    └── types/                    # Types TypeScript
```

---

## 🎨 Thème visuel

| Couleur | Code | Usage |
|---------|------|-------|
| Bleu nuit | `#071A2F` | Couleur principale |
| Vert football | `#0B8F55` | Secondaire |
| Jaune doré | `#F4B942` | Accent |
| Blanc | `#FFFFFF` | Fond |
| Gris clair | `#F5F7FA` | Arrière-plans |
| Foncé | `#17202A` | Texte |

**Typographie :** Poppins (titres) + Inter (texte)

---

## 📄 Pages incluses

| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/` | Hero carousel, stats, mission, talents, projets, témoignages... |
| L'Académie | `/academy` | Mission, valeurs, équipe, infrastructures |
| Nos Talents | `/talents` | Liste filtrable + fiches détaillées |
| Formation | `/formation` | Programmes de formation |
| Détection | `/detection` | Processus + formulaire de candidature |
| Projets | `/projects` | Campagnes de financement crowdfunding |
| Soutenir | `/donate` | Don, parrainage, financement |
| Partenaires | `/partners` | Sponsors, ONG, niveaux |
| Actualités | `/news` | Articles et news |
| Événements | `/events` | Événements passés et à venir |
| Calendrier | `/calendar` | Planning des activités |
| Galerie | `/gallery` | Photos et vidéos avec lightbox |
| Impact | `/impact` | Statistiques et témoignages |
| Contact | `/contact` | Formulaire de contact |
| Légal | `/legal/*` | Mentions légales, confidentialité, CGU |

---

## 🛠️ Technologies

- **React 19** + TypeScript
- **Vite 7** (bundler ultra-rapide)
- **Tailwind CSS 4** (styling utility-first)
- **shadcn/ui** + Radix UI (composants accessibles)
- **Framer Motion** (animations fluides)
- **React Router 7** (routing SPA)
- **Convex** (backend/database — prêt pour intégration)
- **Lucide React** (icônes)

---

## 📱 Responsive

Le site est entièrement responsive et adapté à :
- Desktop (1920px / 1440px / 1200px)
- Laptop (992px)
- Tablette (768px)
- Mobile (576px / 375px / 320px)

---

## 🌍 Internationalisation

Le sélecteur de langue (FR / EN / ES) est intégré dans le header. L'architecture i18n est prête pour être branchée sur des fichiers JSON de traduction.

---

## ⚡ Performance

- Lazy loading des images
- Animations optimisées (`prefers-reduced-motion` respecté)
- CSS/Tailwind purgé
- Code-splitting par routes
- Build optimisé avec esbuild

---

## 📄 Licence

Projet privé — Tous droits réservés.
