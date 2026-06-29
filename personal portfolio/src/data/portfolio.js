// ─── Portfolio Data ────────────────────────────────────────────────────────────


export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  greeting: "Glad you're here!! I'm",
  name: "R Niranjana",
  roles: ["Software Developer"],
  tagline: "Design. Develop. Deliver seamless user experiences.",
  cta: { label: "Download Resume", href: "/resume.pdf" },
  ctaSecondary: { label: "Let's Talk", href: "#contact" },
};

export const ABOUT = {
  intro: `I'm a Frontend Developer who loves turning complex ideas into clean, 
    responsive, and delightful web interfaces. My toolkit centres on React — 
    and I care deeply about the small things that separate good UI from great UI.`,
  highlights: [
    { emoji: "⚡", title: "Clean Code", desc: "Maintainable, scalable, lint-free." },
    { emoji: "🎨", title: "Modern Design", desc: "Beautiful interfaces, pixel-perfect." },
    { emoji: "🚀", title: "Performance", desc: "Fast load times, smooth interactions." },
    { emoji: "🤝", title: "Collaboration", desc: "Cross-functional team player." },
  ],
  skills: ["React", "JavaScript", "HTML5", "CSS3", "Python", "Django", "SQL", "REST APIs"],
};

export const EXPERIENCE = [
  {
    role: "Frontend Developer Intern",
    company: "VR Della IT Services",
    period: "June 2025 – Dec 2025",
    current: false,
    description: "Built responsive, user-friendly interfaces and modern web components using React within an agile team.",
    responsibilities: [
      "Developed reusable React components",
      "Integrated REST APIs and managed application state with React hooks",
      "Collaborated with designers to translate Figma mockups into pixel-perfect UIs",
      "Styled with SCSS, implemented responsive layouts, and improved cross-browser compat",
    ],
    tech: ["React", "JavaScript", "SCSS", "REST APIs", "Git"],
  },
  {
    role: "IT Associate",
    company: "Vyapi Infotech",
    period: "Feb 2025 – Apr 2025",
    current: false,
    description: "resolved technical tickets, and wrote SQL queries to investigate data issues.",
    responsibilities: [
      "Triaged and resolved 40+ support tickets per week via ConnectWise",
      "Wrote SQL queries to identify and fix data integrity issues in client systems",
      "Escalated critical incidents and documented resolution steps for the knowledge base",
      "Coordinated with development team to report recurring defects",
    ],
    tech: ["SQL", "ConnectWise", "Windows", "Technical Support"],
  },
];

import { IMG_ECOMMERCE, IMG_MUSIC, IMG_POWERBI } from "./images";

export const PROJECTS = [
  {
    id: "ecommerce",
    title: "Traditional Products E-Commerce",
    subtitle: "Full-stack web app for rural artisans",
    description:
      "A complete e-commerce platform connecting rural artisans with global buyers — featuring product listings, cart flow, order tracking, and a responsive storefront built for accessibility.",
    tech: ["React", "JavaScript", "CSS3", "REST APIs"],
    color: "violet",
    icon: "🛍️",
    image: IMG_ECOMMERCE,
  },
  {
    id: "music",
    title: "Emotion-Based Music Recommender",
    subtitle: "ML × Computer Vision × Spotify API",
    description:
      "Real-time facial emotion detection (happy, sad, neutral, angry, fearful) piped into Spotify's recommendation API to auto-curate a mood-matching playlist. OpenCV + deep learning under the hood.",
    tech: ["Python", "OpenCV", "Machine Learning", "Spotify API"],
    color: "fuchsia",
    icon: "🎵",
    image: IMG_MUSIC,
  },
  {
    id: "powerbi",
    title: "Sales Analytics Dashboard",
    subtitle: "Power BI · Interactive BI report",
    description:
      "End-to-end business intelligence dashboard visualising sales KPIs — top SKUs, revenue trends, customer segments — with interactive slicers, DAX measures, and a clean visual hierarchy.",
    tech: ["Power BI", "DAX", "Data Cleaning", "Data Viz"],
    color: "violet",
    icon: "📊",
    image: IMG_POWERBI,
  },
];

export const SKILLS = [
  { name: "React", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 80, category: "Frontend" },
  { name: "HTML5 / CSS3", level: 90, category: "Frontend" },
  { name: "Python", level: 70, category: "Backend" },
  { name: "Django", level: 65, category: "Backend" },
  { name: "SQL", level: 72, category: "Backend" },
  { name: "REST APIs", level: 75, category: "Integration" },
  { name: "Git / GitHub", level: 80, category: "Tools" },
];

export const CONTACT = {
  heading: "Let's Build Something",
  subheading: "Open to frontend / React roles in Trichy or Chennai. Drop me a line.",
  email: "niranjanaraja352@gmail.com",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/niranjana-raja", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/Niranjana03", icon: "github" },
  ],
};
