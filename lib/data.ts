export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
};

export const company = {
  name: "Core Tech Partner",
  email: "info@coretechpartner.com",
  support: "support@coretechpartner.com",
  address: "COCO WorkSpace, Floor #2, Office #10, I-10, Islamabad, Pakistan",
  shortAddress: "I-10, Islamabad, Pakistan",
};

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/share/1HRr38kbYc/" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/coretechpartnerofficial?igsh=ZWJhY3N4cmU3NTdp",
  },
  { label: "X", href: "https://x.com/CoreTechPartnr" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/coretechpartner/posts/?feedView=all",
  },
];

export const projects: Project[] = [
  {
    slug: "c-promoter-catalist",
    title: "C Promoter",
    category: "Web App",
    year: "2025",
    client: "Catalist",
    description:
      "Field marketing and promoter management platform with live dashboards for visits, attendance, and project performance.",
    image: "/httpscpromoter.catalist-me.com.png",
    url: "https://cpromoter.catalist-me.com",
    tags: ["Dashboard", "FMCG", "Field Ops"],
  },
  {
    slug: "c-store-bptech",
    title: "C Store",
    category: "Web App",
    year: "2025",
    client: "BP Tech",
    description:
      "Retail and store operations platform built for teams that need clear visibility across outlets and daily workflows.",
    image: "/httpscstore.bptech-me.com.jpeg",
    url: "https://cstore.bptech-me.com",
    tags: ["Retail", "Operations", "Dashboard"],
  },
  {
    slug: "c-store-catalist",
    title: "C Store",
    category: "Web App",
    year: "2025",
    client: "Catalist",
    description:
      "Store management system tailored for Catalist teams, covering outlet activity, reporting, and day to day operations.",
    image: "/httpscstore.catalist-me.com.png",
    url: "https://cstore.catalist-me.com",
    tags: ["Retail", "Operations", "Reporting"],
  },
];

export const services = [
  {
    num: "01",
    title: "Web Application Development",
    desc: "Fast, scalable SaaS and enterprise web platforms with modern frameworks and clean architecture.",
    points: ["React / Next.js", "Scalable APIs", "Admin dashboards"],
    icon: "web",
  },
  {
    num: "02",
    title: "Mobile App Development",
    desc: "Android and iOS products with smooth UX, reliable performance, and architecture ready to scale.",
    points: ["Flutter / Native", "App Store launch", "Push & analytics"],
    icon: "mobile",
  },
  {
    num: "03",
    title: "FMCG & Retail Systems",
    desc: "Distribution, outlet, and sales systems with live visibility for consumer businesses.",
    points: ["Outlet management", "Sales tracking", "Inventory insights"],
    icon: "retail",
  },
  {
    num: "04",
    title: "Cloud & Custom Software",
    desc: "Tailored software, hosting, and cloud setups that match your workflows and security needs.",
    points: ["AWS / Docker", "Custom CRM", "Integrations"],
    icon: "cloud",
  },
  {
    num: "05",
    title: "UI / UX Product Design",
    desc: "Interfaces grounded in research that feel clear, trustworthy, and built to convert.",
    points: ["Wireframes", "Design systems", "Prototypes"],
    icon: "design",
  },
  {
    num: "06",
    title: "Ecommerce Solutions",
    desc: "Storefronts and commerce platforms designed to sell more with less friction.",
    points: ["Shopify", "Custom checkout", "Growth tooling"],
    icon: "cart",
  },
  {
    num: "07",
    title: "Managed IT Support",
    desc: "Ongoing maintenance, monitoring, and technical support so your systems stay reliable.",
    points: ["24/7 monitoring", "Updates", "Incident response"],
    icon: "support",
  },
  {
    num: "08",
    title: "Data & Security",
    desc: "Secure architectures, backups, and access controls for your most critical business applications.",
    points: ["Auth & roles", "Backups", "Hardening"],
    icon: "security",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Initiation & Planning",
    desc: "We define goals, scope, and roadmap so every sprint starts with clarity.",
  },
  {
    step: "02",
    title: "Execution & Development",
    desc: "Design and engineering move together with transparent progress and reviews.",
  },
  {
    step: "03",
    title: "Testing & Maintenance",
    desc: "QA, launch, and ongoing optimization keep your product stable and growing.",
  },
];

export const blogs = [
  {
    title: "Boost your startup with the right digital partner",
    date: "May 27, 2025",
    author: "Core Tech Partner",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Planning online business goals with specialists",
    date: "June 02, 2025",
    author: "Core Tech Partner",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Including animation in your design system",
    date: "June 15, 2025",
    author: "Core Tech Partner",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
  },
];
