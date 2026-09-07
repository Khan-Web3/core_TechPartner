export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  description: string;
  image: string;
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
    slug: "fmcg-platform",
    title: "FMCG Distribution Platform",
    category: "Enterprise",
    year: "2025",
    client: "Retail Group",
    description:
      "Complete distribution and outlet management with live sales visibility for FMCG businesses.",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1200&auto=format&fit=crop",
    tags: ["Enterprise", "Dashboard", "Realtime"],
  },
  {
    slug: "fintech-dashboard",
    title: "Fintech Analytics Dashboard",
    category: "SaaS",
    year: "2025",
    client: "Innovate Finance",
    description:
      "SaaS dashboard packed with analytics for financial operations, reporting, and role based access.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: ["SaaS", "Fintech", "Analytics"],
  },
  {
    slug: "healthcare-app",
    title: "Healthcare Mobile App",
    category: "Mobile",
    year: "2024",
    client: "CarePlus",
    description:
      "Mobile experience designed around patients for appointments, records, and care communication.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    tags: ["iOS", "Android", "Healthcare"],
  },
  {
    slug: "ai-chat-interface",
    title: "AI Support Chat Interface",
    category: "AI",
    year: "2025",
    client: "TechNova",
    description:
      "Conversational AI interface integrated into an existing product for support automation.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    tags: ["AI", "UX", "Integration"],
  },
  {
    slug: "retail-management",
    title: "Retail Management System",
    category: "Web App",
    year: "2024",
    client: "StyleCom",
    description:
      "Inventory, staff, and store operations web app for retail teams across multiple locations.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    tags: ["Retail", "Web App", "Ops"],
  },
  {
    slug: "delivery-tracker",
    title: "Delivery Tracker App",
    category: "Mobile",
    year: "2024",
    client: "SwiftRoute",
    description:
      "Live delivery tracking for drivers and customers with route optimization support.",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop",
    tags: ["Logistics", "Mobile", "Maps"],
  },
  {
    slug: "ecommerce-storefront",
    title: "Ecommerce Storefront",
    category: "Ecommerce",
    year: "2025",
    client: "UrbanMart",
    description:
      "Storefront built to convert, with custom catalog, checkout, and marketing integrations.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    tags: ["Shopify", "Conversion", "UX"],
  },
  {
    slug: "cloud-ops-portal",
    title: "Cloud Ops Portal",
    category: "Cloud",
    year: "2023",
    client: "Nimbus Soft",
    description:
      "Internal cloud operations portal for deployments, monitoring, and team workflows.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    tags: ["Cloud", "DevOps", "Portal"],
  },
  {
    slug: "agency-website",
    title: "Marketing Agency Website",
    category: "Web App",
    year: "2024",
    client: "BrightLane",
    description:
      "Fast marketing website optimized for SEO, with CMS and lead capture flows.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a2412c5410e4?q=80&w=1200&auto=format&fit=crop",
    tags: ["Marketing", "CMS", "SEO"],
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
