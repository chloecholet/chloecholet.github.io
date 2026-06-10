/* ============================================================
   PORTFOLIO — FICHIER DE CONTENU
   C'est le SEUL fichier à modifier pour mettre à jour ton site.
   Remplace les textes d'exemple par les tiens, ajoute tes images
   dans le dossier /assets et indique leur nom ici.
   ============================================================ */

const PROFILE = {
  name: "Chloé Cholet",
  title: "M.S. student in Mechanical Engineering",
  school: "Stanford University",
  school: "ENSAM ParisTech",
  photo: "assets/portrait.jpg", // ta photo (format portrait conseillé)
  bio: "Graduate student in Mechanical Engineering at Stanford. I am looking for research, course or teaching assistant opportunities where I can combine rigorous engineering with curiosity and creativity.",
  email: "cholet04@stanford.edu",
  linkedin: "www.linkedin.com/in/chloé-cholet",
  github: "https://github.com/chloecholet",
  cv: "assets/cv.pdf", // ton CV en PDF dans /assets
};

/* ------------------------------------------------------------
   PROJETS & RECHERCHE
   Chaque projet = une case cliquable sur la page d'accueil.
   Le clic ouvre project.html?id=... dans un nouvel onglet, avec
   description longue, galerie d'images et un PDF intégré.
   ------------------------------------------------------------ */
const PROJECTS = [
  {
    id: "RESCE",          // identifiant unique, sans espaces ni accents
    title: "Manufacturing project with Institute Humaine Georges Charpak : Glenoid Prosthesis",
    subtitle: "Precision machining & dynamics study",
    year: "2025",
    tags: ["CAD", "Machining", "Dynamics"],
    cover: "assets/resce-cover.jpg",   // image de la case
    description: `
      <p>Aiming at determining the optimal material and prosthesis geometry to minimize the risk of glenoid component loosening.</p>
    `,
    gallery: [
      { src: "assets/petanque-1.jpg", caption: "Prototype final" },
      { src: "assets/petanque-2.jpg", caption: "Modèle CAO" },
      { src: "assets/petanque-3.jpg", caption: "Banc d'essai" },
    ],
    pdf: "assets/petanque-rapport.pdf", // rapport / poster — mets null s'il n'y en a pas
  },
  {
    id: "fonderie",
    title: "Foundry Design and Optimization Project",
    subtitle: "manufacture a non-permanent sand mold to cast an aluminum drilling jig",
    year: "2024",
    tags: ["Robotics", "Control"],
    cover: "assets/projet2-cover.jpg",
    description: `<p>esign and manufacture a non-permanent sand mold to cast an aluminum drilling jig (Al-Si7Mg alloy).
I led the complete workflow: thermal analysis, gating system design, riser calculations, mold fabrication, casting, and quality control.</p>`,
    gallery: [],
    pdf: null,
  },
];

/* ------------------------------------------------------------
   EXPÉRIENCES PROFESSIONNELLES
   ------------------------------------------------------------ */
const EXPERIENCE = [
  {
    role: "Continuous improvement Engineering Intern",
    org: "Safran Aircraft Engines",
    place: "Genevilliers, France",
    dates: "Jun 2025 — Sep 2025",
    points: [
      "Worked on macroscopy and microscopy, analyzing grain size and detecting defects such as freckles or white spots.",
      "Contributed to process improvement studies and analyzed part flow between units.",
    ],
    logo: "assets/logo-entreprise.png", // optionnel — mets null sinon
  },
  {
    role: "Research Assistant",
    org: "Nom du laboratoire",
    place: "Ville, Pays",
    dates: "Jan 2024 — May 2024",
    points: ["Description de la mission de recherche."],
    logo: null,
  },
];

/* ------------------------------------------------------------
   FORMATION
   ------------------------------------------------------------ */
const EDUCATION = [
  {
    degree: "M.S. in Mechanical Engineering",
    school: "Stanford University",
    place: "Stanford, CA",
    dates: "2025 — 2027",
    details: "Focus: design, robotics, mechatronics. GPA: x.x/4.0",
    logo: "assets/logo-stanford.png",
  },
  {
    degree: "Diplôme d'ingénieur / B.S.",
    school: "Nom de ton école",
    place: "Ville, Pays",
    dates: "2021 — 2025",
    details: "Mention, classement, spécialité…",
    logo: null,
  },
];

/* ------------------------------------------------------------
   PRIX & DISTINCTIONS
   ------------------------------------------------------------ */
const AWARDS = [
  {
    title: "Nom du prix",
    org: "Organisme",
    year: "2025",
    detail: "Une ligne de contexte : pour quoi, parmi combien de candidats…",
  },
  {
    title: "Bourse d'excellence",
    org: "Organisme",
    year: "2024",
    detail: "Contexte du prix.",
  },
];

/* ------------------------------------------------------------
   LEADERSHIP & BÉNÉVOLAT
   ------------------------------------------------------------ */
const LEADERSHIP = [
  {
    role: "Présidente — Association XYZ",
    dates: "2023 — 2024",
    detail: "Équipe de N personnes, budget, événements organisés, impact.",
  },
  {
    role: "Bénévole — Organisation ABC",
    dates: "2022",
    detail: "Ce que tu as fait et pour qui.",
  },
];

/* ------------------------------------------------------------
   COMPÉTENCES (section bonus, recommandée pour les postes de
   RA/TA — supprime les lignes inutiles)
   ------------------------------------------------------------ */
const SKILLS = [
  { group: "CAD & Simulation", items: ["SolidWorks", "Fusion 360", "ANSYS", "COMSOL"] },
  { group: "Fabrication", items: ["CNC machining", "3D printing", "Laser cutting", "Composites"] },
  { group: "Programming", items: ["Python", "MATLAB", "C++", "Arduino"] },
  { group: "Languages", items: ["French (native)", "English (fluent)"] },
];
