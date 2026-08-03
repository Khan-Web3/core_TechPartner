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
  phone: "+92 307 5773869",
  phone2: "+92 314 3159330",
  email: "info@coretechpartner.com",
  support: "support@coretechpartner.com",
  address: "COCO WorkSpace, Floor #2, Office #10, I-10, Islamabad, Pakistan",
  shortAddress: "I-10, Islamabad, Pakistan",
};

export const projects: Project[] = [
  {
    slug: "fmcg-platform",
    title: "FMCG Distribution Platform",
    category: "Enterprise",
    year: "2025",
    client: "Retail Group",
    description:
      "End-to-end distribution and outlet management with real-time sales visibility for FMCG businesses.",
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
      "Analytics-rich SaaS dashboard for financial operations, reporting, and multi-role access.",
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
      "Patient-focused mobile experience for appointments, records, and care communication.",
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
      "Inventory, staff, and store operations web app for multi-location retail teams.",
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
    title: "E-Commerce Storefront",
    category: "E-Commerce",
    year: "2025",
    client: "UrbanMart",
    description:
      "High-converting storefront with custom catalog, checkout, and marketing integrations.",
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
      "Fast, SEO-ready marketing website with CMS and lead capture flows.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a2412c5410e4?q=80&w=1200&auto=format&fit=crop",
    tags: ["Marketing", "CMS", "SEO"],
  },
];

export const services = [
  {
    num: "01",
    title: "Web Application Development",
    desc: "High-performance SaaS and enterprise web platforms with modern frameworks and clean architecture.",
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
    desc: "Distribution, outlet, and sales systems with real-time visibility for consumer businesses.",
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
    desc: "Research-backed interfaces that feel clear, trustworthy, and conversion-focused.",
    points: ["Wireframes", "Design systems", "Prototypes"],
    icon: "design",
  },
  {
    num: "06",
    title: "E-Commerce Solutions",
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
    desc: "Secure architectures, backups, and access controls for business-critical applications.",
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

export const pricing = [
  {
    name: "Starter",
    price: "Custom",
    period: "Project",
    desc: "For focused websites and MVPs",
    features: [
      "Discovery workshop",
      "UI design & development",
      "Responsive delivery",
      "Basic SEO setup",
      "2 weeks support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "Custom",
    period: "Project",
    desc: "For SaaS and product teams",
    features: [
      "Full product design",
      "Web or mobile build",
      "API integrations",
      "QA & staging",
      "1 month support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Retainer",
    desc: "For ongoing engineering partnership",
    features: [
      "Dedicated squad",
      "Priority delivery",
      "Cloud & DevOps",
      "Security reviews",
      "SLA support",
    ],
    popular: false,
  },
];

export const testimonials = [
  {
    name: "Alex Johnson",
    role: "CTO, TechNova",
    content:
      "Working with Core Tech Partner has been a game-changer. Their technical depth and dedication to quality are unmatched — they delivered our SaaS platform ahead of schedule.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop",
  },
  {
    name: "Maria Garcia",
    role: "Founder, StyleCom",
    content:
      "The e-commerce experience they built transformed our storefront. We have seen a 40% increase in conversions since launch.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=256&auto=format&fit=crop",
  },
  {
    name: "James Wilson",
    role: "Director, Innovate Finance",
    content:
      "Clear communication and an agile process made delivery feel effortless. They are genuine technology partners.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop",
  },
];

export const team = [
  {
    name: "Product Engineering",
    role: "Web & Mobile",
    image: "/team1.jpeg",
  },
  {
    name: "Backend Architects",
    role: "APIs & Cloud",
    image: "/team2.jpeg",
  },
  {
    name: "UI / UX Design",
    role: "Product Design",
    image: "/team3.jpeg",
  },
  {
    name: "QA & Delivery",
    role: "Quality Assurance",
    image: "/team4.jpeg",
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
