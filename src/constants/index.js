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
    title: "Full-Stack Engineer",
    icon: backend,
  },
  {
    title: "Graphics Designer",
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
    title: "Independent Full-Stack Developer",
    company_name: "Freelance",
    icon: shopify,
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
      "Architected and deployed multiple high-performance web applications for diverse industries including Healthcare, Education, and E-commerce.",
      "Collaborated with clients to translate business requirements into technical roadmaps and scalable digital products.",
      "Optimized web performance and SEO, resulting in improved user engagement and search rankings for client platforms.",
    ],
  },
  {
    title: "Graphics Designer & Brand Strategist",
    company_name: "Freelance / Startups",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "Crafted visual identities and marketing materials for various startups, ensuring brand consistency across digital and print media.",
      "Leveraged design expertise to enhance UI/UX of developed web applications, focusing on intuitive user journeys.",
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
    image: carrent,
    source_code_link: "https://zeneva.space",
  },
  {
    name: "NexusBiz",
    description:
      "A premium full-stack business intelligence and digital solution platform built for high-performance enterprise management and client engagement.",
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
    image: jobit,
    source_code_link: "https://nexusbiz.vercel.app",
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
    image: tripguide,
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
    image: carrent,
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
    image: jobit,
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
    image: tripguide,
    source_code_link: "https://orelis-med.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
