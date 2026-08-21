// ============================================================
// Football Academy — Centralised mock data
// Structured for easy swap to a future backend/API
// ============================================================

// ---------- Stats ----------
export const stats = [
  { label: "Jeunes accompagnés", value: 500, suffix: "+" },
  { label: "Talents détectés", value: 50, suffix: "+" },
  { label: "Éducateurs qualifiés", value: 20, suffix: "+" },
  { label: "Partenaires actifs", value: 10, suffix: "+" },
  { label: "Compétitions disputées", value: 35, suffix: "" },
  { label: "Joueurs orientés vers clubs pro", value: 12, suffix: "" },
];

// ---------- Impact numbers ----------
export const impactStats = [
  { label: "Jeunes accompagnés", value: 500, suffix: "+" },
  { label: "Jeunes scolarisés", value: 320, suffix: "" },
  { label: "Talents détectés", value: 50, suffix: "+" },
  { label: "Joueurs vers clubs pro", value: 12, suffix: "" },
  { label: "Emplois créés", value: 35, suffix: "" },
  { label: "Équipements distribués", value: 1200, suffix: "+" },
  { label: "Projets réalisés", value: 8, suffix: "" },
  { label: "Communautés bénéficiaires", value: 15, suffix: "" },
];

// ---------- Talents ----------
export interface Talent {
  id: string;
  name: string;
  age: number;
  nationality: string;
  position: "Gardien" | "Défenseur" | "Milieu" | "Attaquant";
  dominantFoot: "Droit" | "Gauche" | "Les deux";
  height: string;
  category: string;
  photo: string;
  goals: number;
  assists: number;
  matches: number;
  videoUrl?: string;
  bio: string;
}

export const talents: Talent[] = [
  {
    id: "amadou-diallo",
    name: "Amadou Diallo",
    age: 17,
    nationality: "Sénégal",
    position: "Attaquant",
    dominantFoot: "Droit",
    height: "1m78",
    category: "U18",
    photo: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=400&fit=crop",
    goals: 14,
    assists: 6,
    matches: 22,
    bio: "Attaquant vif et technique, Amadou impressionne par sa capacité à créer des occasions et à marquer dans les moments décisifs.",
  },
  {
    id: "karim-ouedraogo",
    name: "Karim Ouédraogo",
    age: 16,
    nationality: "Burkina Faso",
    position: "Milieu",
    dominantFoot: "Gauche",
    height: "1m72",
    category: "U17",
    photo: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=400&fit=crop",
    goals: 5,
    assists: 12,
    matches: 25,
    bio: "Meneur de jeu créatif avec une excellente vision du jeu et un passing range impressionnant.",
  },
  {
    id: "moussa-kone",
    name: "Moussa Koné",
    age: 15,
    nationality: "Mali",
    position: "Défenseur",
    dominantFoot: "Droit",
    height: "1m82",
    category: "U16",
    photo: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=400&fit=crop",
    goals: 2,
    assists: 3,
    matches: 20,
    bio: "Défenseur solide et tactiquement intelligent, redoutable dans les duels aériens.",
  },
  {
    id: "ibrahim-traore",
    name: "Ibrahim Traoré",
    age: 18,
    nationality: "Côte d'Ivoire",
    position: "Gardien",
    dominantFoot: "Droit",
    height: "1m88",
    category: "U19",
    photo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop",
    goals: 0,
    assists: 0,
    matches: 18,
    bio: "Gardien prometteur aux réflexes extraordinaires et au commandement exemplaire de sa défense.",
  },
  {
    id: "seydou-bamba",
    name: "Seydou Bamba",
    age: 16,
    nationality: "Guinée",
    position: "Attaquant",
    dominantFoot: "Les deux",
    height: "1m75",
    category: "U17",
    photo: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop",
    goals: 11,
    assists: 4,
    matches: 19,
    bio: "Polyvalent offensif capable de jouer sur tout le front, Seydou impressionne par son sang-froid devant le but.",
  },
  {
    id: "oumar-sissoko",
    name: "Oumar Sissoko",
    age: 17,
    nationality: "Niger",
    position: "Milieu",
    dominantFoot: "Droit",
    height: "1m80",
    category: "U18",
    photo: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=400&fit=crop",
    goals: 3,
    assists: 8,
    matches: 24,
    bio: "Milieu de terrain complet, excellent récupérateur avec une grande capacité de distribution.",
  },
];

// ---------- Projects ----------
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  goal: number;
  raised: number;
  contributors: number;
  startDate: string;
  endDate: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "terrain-synthetique",
    title: "Terrain synthétique professionnel",
    description: "Construction d'un terrain synthétique de qualité FIFA pour permettre aux joueurs de s'entraîner toute l'année dans des conditions optimales.",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&h=500&fit=crop",
    goal: 50000,
    raised: 32500,
    contributors: 128,
    startDate: "2025-01-15",
    endDate: "2025-06-30",
    category: "Infrastructure",
  },
  {
    id: "centre-medical",
    title: "Centre médical sportif",
    description: "Équipement d'un centre médical dédié aux joueurs de l'académie avec du matériel de pointe pour la prévention et le traitement des blessures.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop",
    goal: 30000,
    raised: 18000,
    contributors: 85,
    startDate: "2025-02-01",
    endDate: "2025-08-15",
    category: "Santé",
  },
  {
    id: "internat-jeunes",
    title: "Internat pour jeunes talents",
    description: "Création d'un espace d'hébergement moderne pour les joueurs venant de régions éloignées, avec espaces d'étude et de repos.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=500&fit=crop",
    goal: 40000,
    raised: 12000,
    contributors: 52,
    startDate: "2025-03-01",
    endDate: "2025-12-31",
    category: "Hébergement",
  },
  {
    id: "salle-musculation",
    title: "Salle de musculation & fitness",
    description: "Équipement complet d'une salle de musculation moderne avec matériel de conditionnement physique de haut niveau.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
    goal: 15000,
    raised: 9750,
    contributors: 64,
    startDate: "2025-01-20",
    endDate: "2025-05-30",
    category: "Équipement",
  },
  {
    id: "programme-educatif",
    title: "Programme éducatif intégré",
    description: "Mise en place d'un programme scolaire accompagné avec soutien scolaire, tutorat et préparation à l'orientation professionnelle.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
    goal: 20000,
    raised: 14000,
    contributors: 92,
    startDate: "2025-02-15",
    endDate: "2025-09-01",
    category: "Éducation",
  },
];

// ---------- News ----------
export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

export const news: NewsArticle[] = [
  {
    id: "tournoi-international-2025",
    title: "L'Académie brille au Tournoi International U17",
    excerpt: "Nos jeunes joueurs ont démontré un niveau exceptionnel face à des équipes de tout le continent, terminant à la 2ème place.",
    content: "Le tournoi réunissait 16 équipes de 10 pays africains. Nos joueurs ont impressionné par leur technique et leur esprit d'équipe.",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=500&fit=crop",
    category: "Matchs",
    date: "2025-07-12",
    author: "Coach Mensah",
  },
  {
    id: "nouveau-partenaire-stellaire",
    title: "Un partenaire d'envergure rejoint l'Académie",
    excerpt: "Cette collaboration stratégique permettra d'étendre nos programmes de formation et d'ouvrir de nouvelles opportunités pour nos talents.",
    content: "Ce partenariat marque une étape importante dans le développement de l'académie et l'ouverture de nouvelles perspectives pour les jeunes.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop",
    category: "Partenariats",
    date: "2025-06-28",
    author: "Direction",
  },
  {
    id: "session-detection-dakar",
    title: "Grande session de détection à Dakar",
    excerpt: "Plus de 200 jeunes se sont présentés pour notre session de détection. 15 ont été retenus pour la phase suivante.",
    content: "La session de détection à Dakar a rassemblé des jeunes de tout le Sénégal. L'équipe technique a identifié de vrais talents prometteurs.",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=500&fit=crop",
    category: "Détection",
    date: "2025-06-15",
    author: "Scout Team",
  },
  {
    id: "3-jeunes-club-pro",
    title: "Trois jeunes intègrent des clubs professionnels",
    excerpt: "Amadou, Karim et Moussa signent leur première année avec des clubs de première division. Un résultat historique pour l'Académie.",
    content: "C'est un tournant majeur pour notre académie. Ces trois joueurs représentent la concrétisation de notre mission.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop",
    category: "Talents",
    date: "2025-05-20",
    author: "Direction",
  },
  {
    id: "terrain-synthetique-lancement",
    title: "Lancement des travaux du terrain synthétique",
    excerpt: "Les travaux de construction du nouveau terrain synthétique ont officiellement commencé. Livraison prévue pour décembre.",
    content: "Ce terrain sera le premier de sa catégorie dans la région et permettra des entraînements de qualité professionnelle.",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&h=500&fit=crop",
    category: "Projets",
    date: "2025-05-10",
    author: "Admin",
  },
  {
    id: "programme-education-2025",
    title: "Lancement du programme éducatif 2025",
    excerpt: "Un programme éducatif complet pour accompagner les jeunes joueurs dans leur scolarité et leur développement personnel.",
    content: "Ce programme inclut du soutien scolaire, du mentorat et des ateliers de développement personnel.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
    category: "Académie",
    date: "2025-04-18",
    author: "Équipe Pédagogique",
  },
];

// ---------- Testimonials ----------
export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  photo: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Amadou Diallo",
    role: "Joueur — Attaquant U18",
    quote: "L'académie m'a donné une chance que je n'aurais jamais eue. Aujourd'hui, je peux rêver d'un avenir professionnel dans le football.",
    photo: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=100&h=100&fit=crop",
    stars: 5,
  },
  {
    name: "Fatoumata Diallo",
    role: "Parent de joueur",
    quote: "Grâce à l'académie, mon fils a non seulement progressé en football mais aussi à l'école. L'encadrement est exceptionnel.",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    stars: 5,
  },
  {
    name: "Coach Jean Mensah",
    role: "Entraîneur principal",
    quote: "Travailler avec ces jeunes talents est un privilège. Leur détermination et leur talent nous poussent à toujours donner le meilleur.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    stars: 5,
  },
  {
    name: "David Laurent",
    role: "Partenaire — Directeur CSR",
    quote: "Soutenir cette académie, c'est investir dans l'avenir de la jeunesse africaine. Un projet à fort impact social et humain.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    stars: 5,
  },
  {
    name: "Oumar Sissoko",
    role: "Ancien joueur — Aujourd'hui en club pro",
    quote: "L'académie m'a transformé. Sans elle, je serais encore dans mon village. Aujourd'hui, je joue en première division.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    stars: 5,
  },
];

// ---------- Partners ----------
export interface Partner {
  name: string;
  logo: string;
  tier: "Bronze" | "Silver" | "Gold" | "Premium";
}

export const partners: Partner[] = [
  { name: "SportAfrica Corp", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.png", tier: "Premium" },
  { name: "Africa Development Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.png", tier: "Gold" },
  { name: "Jeunesse & Sport Foundation", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.png", tier: "Gold" },
  { name: "TechFuture Inc", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.png", tier: "Silver" },
  { name: "UNICEF West Africa", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.png", tier: "Premium" },
  { name: "TotalEnergies Foundation", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.png", tier: "Gold" },
  { name: "Nike Football", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.png", tier: "Silver" },
  { name: "Orange Foundation", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.png", tier: "Silver" },
];

// ---------- Sponsor tiers ----------
export const sponsorTiers = [
  {
    name: "Bronze",
    price: "1 000 €",
    color: "from-amber-700 to-amber-900",
    borderColor: "border-amber-700",
    benefits: [
      "Logo sur le site web",
      "Mention dans les réseaux sociaux",
      "Accès aux événements de l'académie",
      "Certificat de partenariat",
    ],
  },
  {
    name: "Silver",
    price: "5 000 €",
    color: "from-gray-400 to-gray-600",
    borderColor: "border-gray-400",
    benefits: [
      "Tout le pack Bronze",
      "Logo sur les maillots d'entraînement",
      "Visibilité dans les communications presse",
      "Invitation aux matchs VIP",
      "Rapport d'impact semestriel",
    ],
  },
  {
    name: "Gold",
    price: "15 000 €",
    color: "from-yellow-500 to-yellow-700",
    borderColor: "border-yellow-500",
    benefits: [
      "Tout le pack Silver",
      "Logo sur les maillots de match",
      "Espace publicitaire dans l'académie",
      "Branding sur les infrastructures",
      "Événement de remerciement annuel",
      "Accès privilégié aux talents",
    ],
  },
  {
    name: "Premium",
    price: "50 000 €+",
    color: "from-emerald-600 to-emerald-800",
    borderColor: "border-emerald-600",
    benefits: [
      "Tout le pack Gold",
      "Partenariat exclusif par catégorie",
      "Co-branding sur toutes les communications",
      "Présence dans tous les événements internationaux",
      "Nomination d'un talent parrainé",
      "Accès au comité stratégique",
      "Couverture médiatique dédiée",
    ],
  },
];

// ---------- Detection timeline ----------
export const detectionSteps = [
  { step: "01", title: "Inscription", description: "Remplir le formulaire de candidature avec les informations personnelles et sportives." },
  { step: "02", title: "Évaluation", description: "Analyse du profil, de l'expérience et du potentiel du candidat par notre équipe technique." },
  { step: "03", title: "Détection", description: "Session de détection sur le terrain avec tests physiques, techniques et tactiques." },
  { step: "04", title: "Sélection", description: "Les meilleurs candidats sont retenus pour intégrer le programme de formation." },
  { step: "05", title: "Formation", description: "Intégration dans le programme de formation complet : sportif, éducatif et humain." },
  { step: "06", title: "Suivi individuel", description: "Chaque joueur bénéficie d'un plan de développement personnalisé avec un suivi régulier." },
  { step: "07", title: "Orientation", description: "Accompagnement vers des clubs professionnels, académies ou parcours universitaires." },
];

// ---------- Events ----------
export interface AcademyEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  description: string;
}

export const events: AcademyEvent[] = [
  {
    id: "tournoi-ouvert",
    title: "Tournoi ouvert U17",
    date: "2025-09-15",
    time: "09:00",
    location: "Terrain principal — Académie",
    type: "Compétition",
    description: "Tournoi international réunissant des académies de toute l'Afrique de l'Ouest.",
  },
  {
    id: "journee-detection",
    title: "Journée de détection",
    date: "2025-09-22",
    time: "08:00",
    location: "Complexe sportif — Dakar",
    type: "Détection",
    description: "Session ouverte à tous les jeunes de 12 à 18 ans. Inscription gratuite.",
  },
  {
    id: "galabenevolat",
    title: "Gala de bienfaisance",
    date: "2025-10-05",
    time: "19:00",
    location: "Grand Hôtel — Dakar",
    type: "Événement",
    description: "Soirée de collecte de fonds avec dîner, auction et spectacle.",
  },
  {
    id: "match-amical",
    title: "Match amical — Académie vs Équipe Nationale U16",
    date: "2025-10-18",
    time: "16:00",
    location: "Stade national — Dakar",
    type: "Match",
    description: "Match amical préparatoire pour la saison upcoming.",
  },
  {
    id: "conference-partenaires",
    title: "Conférence partenaires Q4",
    date: "2025-11-10",
    time: "10:00",
    location: "Salle de conférence — Académie",
    type: "Partenariat",
    description: "Présentation des résultats annuels et des projets pour l'année suivante.",
  },
];

// ---------- Gallery categories ----------
export const galleryCategories = ["Tous", "Entraînements", "Matchs", "Talents", "Événements", "Infrastructures"];

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  type: "photo" | "video";
}

export const galleryItems: GalleryItem[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop", alt: "Entraînement collectif", category: "Entraînements", type: "photo" },
  { id: "g2", src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop", alt: "Match de championnat", category: "Matchs", type: "photo" },
  { id: "g3", src: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&h=400&fit=crop", alt: "Portrait joueur", category: "Talents", type: "photo" },
  { id: "g4", src: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&h=400&fit=crop", alt: "Terrain d'entraînement", category: "Infrastructures", type: "photo" },
  { id: "g5", src: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&h=400&fit=crop", alt: "Session de détection", category: "Événements", type: "photo" },
  { id: "g6", src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop", alt: "Exercice technique", category: "Entraînements", type: "photo" },
  { id: "g7", src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=400&fit=crop", alt: "Célébration but", category: "Matchs", type: "photo" },
  { id: "g8", src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&h=400&fit=crop", alt: "Portrait staff", category: "Talents", type: "photo" },
  { id: "g9", src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop", alt: "Centre médical", category: "Infrastructures", type: "photo" },
  { id: "g10", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop", alt: "Atelier éducatif", category: "Événements", type: "photo" },
  { id: "g11", src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop", alt: "Salle de musculation", category: "Infrastructures", type: "photo" },
  { id: "g12", src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop", alt: "Internat", category: "Infrastructures", type: "photo" },
];

// ---------- Navigation ----------
export const mainNav = [
  { label: "Accueil", href: "/" },
  { label: "L'Académie", href: "/academie" },
  { label: "Nos Talents", href: "/talents" },
  { label: "Formation", href: "/formation" },
  { label: "Détection", href: "/detection" },
  { label: "Projets", href: "/projets" },
  { label: "Soutenir", href: "/soutenir" },
  { label: "Partenaires", href: "/partenaires" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];
