import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full-Stack Engineer",
    icon: creator,
  },
  {
    title: "UI/UX & Brand Strategist",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Lead Developer",
    company_name: "Zeneva",
    icon: "/planet/bime-portfolio-images/zeneva icon.png",
    iconBg: "#ffffff",
    date: "Jan 2024 - Present",
    points: [
      "Multi-Platform Architecture: Engineered and launched Zeneva’s core ecosystem across three native platforms: Web (Next.js/React), Desktop (Tauri), and Mobile (PWA), standardizing shared state and UI patterns.",
      "Offline-First Sync Engine: Designed a high-performance local synchronization layer utilizing SQLite and secure local caching, allowing seamless commercial transaction recording and inventory tracking with automatic background cloud sync.",
      "Proven Scalability: Successfully rolled out the production release, scaling the platform to reliably process 1,500+ commercial transactions and manage live multi-platform databases with zero data loss.",
      "Performance Optimization: Reduced app load times to sub-second speeds globally by introducing strategic client-side state hydration, direct local memory fallback logic, and optimized asset delivery.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Skincare365ng",
    icon: "/planet/bime-portfolio-images/skincare365ng icon.png",
    iconBg: "#ffffff",
    date: "Jun 2024 - Present",
    points: [
      "Engineered a robust, highly responsive healthcare e-commerce platform integrating custom professional skincare consultation services.",
      "Implemented secure real-time appointment bookings, automated checkout pipelines, and an interactive skin analysis questionnaire.",
      "Optimized catalog search and dynamic product filtering, resulting in a 40% increase in customer conversion rates.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Orelis EMR",
    icon: "/planet/bime-portfolio-images/orelis icon.png",
    iconBg: "#ffffff",
    date: "Aug 2024 - Dec 2024",
    points: [
      "Designed and launched a futuristic Electronic Medical Record (EMR) system to streamline patient diagnosis, tracking, and medical records.",
      "Built ultra-fast clinical data tables, real-time consultation trackers, and high-performance charts for patient metric analysis.",
      "Hardened patient data security by implementing HIPAA-compliant authenticated route protection and encrypted database schemas.",
    ],
  },
  {
    title: "Lead Developer & Full-Stack Engineer",
    company_name: "Tech-Ink",
    icon: "/planet/bime-portfolio-images/tech-ink icon.svg",
    iconBg: "#ffffff",
    date: "Nov 2024 - Present",
    points: [
      "Architected and launched an AI-powered technology news and data-driven analysis platform.",
      "Integrated intelligent news aggregation services and content recommendation engines to boost average user session length.",
      "Optimized page load speeds and SEO structures, driving organic search rankings and ensuring seamless accessibility for tech media consumers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Bello proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Bello does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Bello optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Zeneva",
    description:
      "All-in-one business operating system with POS, inventory, CRM, and Zen AI demand forecasting. Built using Next.js and compiled into premium cross-platform Desktop & Mobile apps using Tauri.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tauri",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: "/planet/bime-portfolio-images/zeneva dashboard ui.png",
    source_code_link: "https://zeneva.space",
  },
  {
    name: "Al-Ansar Orphan Care",
    description:
      "A comprehensive donation and management platform engineered for an NGO to streamline orphan sponsorships, facilitate real-time secure contributions, and manage community outreach programs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: "/planet/bime-portfolio-images/alansororphancare.png",
    source_code_link: "https://alansarorphancare.org",
  },
  {
    name: "Scale with Olaiya",
    description:
      "Full-stack personal branding and e-commerce platform with a custom real-time administrative control dashboard and seamless user management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/planet/bime-portfolio-images/scalewitholaiya hero section.png",
    source_code_link: "https://scalewitholaiya.com",
  },
  {
    name: "Tech Ink",
    description:
      "An AI-powered news platform focused on data-driven analysis and tech media, designed for high-performance content delivery.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: "/planet/bime-portfolio-images/tech ink hero section.png",
    source_code_link: "https://tech-ink.vercel.app",
  },
  {
    name: "Skincare NG",
    description:
      "Comprehensive healthcare e-commerce platform integrating professional services, automated booking, and product recommendations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: "/planet/bime-portfolio-images/skincare365ng hero section.png",
    source_code_link: "https://skincareng.com",
  },
  {
    name: "ORELIS EMR",
    description:
      "Futuristic Electronic Medical Record (EMR) system for doctors, streamlining patient data management and diagnosis tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/planet/bime-portfolio-images/orelis ui.png",
    source_code_link: "https://orelis-med.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
