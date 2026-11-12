/* ═══════════════════════════════════════════════════════════════
   SITE CONFIGURATION
   Every piece of copy, contact detail and link lives here, so the
   portfolio can be customized without touching the components.
   ═══════════════════════════════════════════════════════════════ */

// Base path for GitHub Pages project sites (e.g. "/nabeel-portfolio").
// Empty during local development; set at build time for deployment.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Prefix for files in /public that are not handled by next/image.
export const asset = (path) => `${basePath}${path}`;

export const siteConfig = {
  name: "Nabeel",
  role: "Frontend Web Developer",
  title: "React.js & Next.js Developer",
  tagline: "Turning Ideas Into Powerful Digital Experiences.",
  description:
    "Nabeel is a frontend web developer specializing in React.js and Next.js. He builds modern, fast, responsive and user-friendly websites with clean code and polished interfaces.",
  // Live deployment: GitHub Pages project site.
  url: "https://aminbaloch984-design.github.io/nabeel-portfolio",
  email: "aminbaloch984@gmail.com",
  emailDisplay: "aminbaloch984@gmail.com",
  // International format, digits only (Pakistan: +92 336 5402213).
  whatsappNumber: "923365402213",
  whatsappDisplay: "+92 336 5402213",
  socials: {
    github: "https://github.com/aminbaloch984-design",
    // Add your LinkedIn profile URL when available.
    linkedin: "https://linkedin.com/in/your-username",
  },
  availability: "Available for new projects",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "7+", label: "Projects Built" },
  { value: "6", label: "Core Services" },
  { value: "100%", label: "Responsive" },
];

export const skills = [
  {
    name: "HTML5",
    icon: "html5",
    level: 95,
    blurb: "Semantic, accessible markup that gives every page a solid foundation.",
    accent: "#ff6b35",
  },
  {
    name: "CSS3",
    icon: "css3",
    level: 92,
    blurb: "Pixel-perfect layouts, fluid grids, animations and modern design systems.",
    accent: "#4d9fff",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    level: 90,
    blurb: "Clean, modern ES6+ logic, DOM interactions and API integration.",
    accent: "#f7df1e",
  },
  {
    name: "React.js",
    icon: "react",
    level: 92,
    blurb: "Reusable component architecture, hooks and smooth client-side experiences.",
    accent: "#61dafb",
  },
  {
    name: "Next.js",
    icon: "nextjs",
    level: 88,
    blurb: "Fast, SEO-friendly applications with the App Router and server rendering.",
    accent: "#a78bfa",
  },
];

// Demo URLs are placeholders. Replace them with your live project links.
// The GitHub buttons currently open the profile above — point them at the
// individual repositories once those projects are published.
export const projects = [
  {
    id: "new-ai",
    title: "NEW AI — Intelligent Workspace",
    category: "AI Product",
    description:
      "A premium, Gemini-powered AI assistant with streaming chat, Markdown and code highlighting, locally saved conversations and polished light and dark themes.",
    tech: ["Next.js", "React.js", "Gemini API"],
    image: "/projects/new-ai.png",
    live: "https://maan-dev-rose.vercel.app",
    github: "https://github.com/aminbaloch984-design/maan-dev",
  },
  {
    id: "autodrive-pk",
    title: "AutoDrive PK — Car Marketplace",
    category: "Marketplace",
    description:
      "A complete car marketplace for Pakistan: searchable inventory with filters, detailed vehicle dossiers with specifications and an inspection checklist, a sell-your-car flow and direct WhatsApp contact.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "/projects/autodrive.png",
    live: "https://aminbaloch984-design.github.io/nabeel-ameen/autodrive/",
    github:
      "https://github.com/aminbaloch984-design/nabeel-ameen/tree/main/autodrive",
  },
  {
    id: "laptop-hub",
    title: "LaptopHub — Laptop Store",
    category: "Online Store",
    description:
      "A premium laptop storefront with PKR pricing, brand and category filters, product detail pages, an accessories section and a persistent cart that survives a refresh.",
    tech: ["Next.js", "React.js", "CSS3"],
    image: "/projects/laptop-hub.png",
    live: "https://aminbaloch984-design.github.io/nabeel-ameen/",
    github: "https://github.com/aminbaloch984-design/laptop-hub",
  },
  {
    id: "school-management",
    title: "School Management Website",
    category: "Web Application",
    description:
      "A complete school dashboard for managing students, teachers, classes and attendance — with a clean data-rich interface.",
    tech: ["Next.js", "React.js", "CSS3"],
    image: "/projects/school-management.svg",
    live: "https://example.com/demo/school-management",
    github: "https://github.com/aminbaloch984-design",
  },
  {
    id: "business-website",
    title: "Business Website",
    category: "Corporate Website",
    description:
      "A conversion-focused company website with a confident hero, service highlights and a clear path to enquiry.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "/projects/business-website.svg",
    live: "https://example.com/demo/business-website",
    github: "https://github.com/aminbaloch984-design",
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    category: "Hospitality",
    description:
      "An appetizing restaurant experience with a bold menu, story-driven sections and a simple reservation flow.",
    tech: ["React.js", "CSS3", "JavaScript"],
    image: "/projects/restaurant-website.svg",
    live: "https://example.com/demo/restaurant-website",
    github: "https://github.com/aminbaloch984-design",
  },
  {
    id: "ecommerce-website",
    title: "E-commerce Website",
    category: "Online Store",
    description:
      "A polished storefront with product discovery, category filters and a friction-free cart experience.",
    tech: ["Next.js", "React.js", "CSS3"],
    image: "/projects/ecommerce-website.svg",
    live: "https://example.com/demo/ecommerce-website",
    github: "https://github.com/aminbaloch984-design",
  },
];

export const services = [
  {
    icon: "code",
    title: "Website Development",
    description:
      "End-to-end development of fast, reliable websites built with modern, maintainable code.",
  },
  {
    icon: "responsive",
    title: "Responsive Website Design",
    description:
      "Layouts that feel intentional on every screen — from small phones to large desktops.",
  },
  {
    icon: "layout",
    title: "Landing Page Development",
    description:
      "High-impact landing pages designed to communicate clearly and turn visitors into customers.",
  },
  {
    icon: "react",
    title: "React.js Development",
    description:
      "Interactive interfaces built with reusable React components, hooks and clean state management.",
  },
  {
    icon: "nextjs",
    title: "Next.js Development",
    description:
      "SEO-friendly, lightning-fast applications powered by the Next.js App Router and modern rendering.",
  },
  {
    icon: "refresh",
    title: "Website Redesign",
    description:
      "A thoughtful refresh of your existing site — sharper visuals, better UX and stronger performance.",
  },
];

export const aboutHighlights = [
  "Clean, readable and maintainable code",
  "Mobile-first, fully responsive layouts",
  "Accessibility and performance minded",
  "Clear communication from start to finish",
];
