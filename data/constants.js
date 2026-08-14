import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGlobe, FaServer, FaPaintBrush, FaBullhorn, FaSmile, FaTools } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import { GiRocket } from "react-icons/gi";
import { FaPhp, FaGitAlt, FaDocker, FaNodeJs, FaReact } from "react-icons/fa6";
import {
  SiLaravel,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiJsonwebtokens,
  SiExpress,
  SiRedux,
  SiGithub,
} from "react-icons/si";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCogs,
  FaEnvelope,
  FaShoppingCart,
  FaUtensils,
  FaHeartbeat,
  FaGraduationCap,
  FaBuilding,
  FaPlane,
  FaTruck,
  FaCoins,
  FaFilm,
  FaIndustry,
} from "react-icons/fa";
export const SITE_INFO = {
  name: "Stackwise Solutions",
  shortName: "Stackwise",
  initials: "SS",
  tagline: "We design, build & grow digital products.",
  founded: "2023",
  email: "info.stackwisesolutions@gmail.com",
  phone: "+91 7982972151",
  altPhone: "+91-798-297-2151",
  address: "Subhash Nagar, Gurugram, Haryana 122001",
  // Update this once the site has a live domain — used for canonical & OG URLs.
  baseUrl: "https://stackwisesolutions.com",
};

export const NAV_ITEMS = [
  { id: "hero", icon: FaHome, label: "Home" },
  { id: "about", icon: FaUser, label: "About" },
  { id: "portfolio", icon: FaBriefcase, label: "Portfolio" },
  { id: "services", icon: FaCogs, label: "Services" },
  { id: "industries", icon: FaIndustry, label: "Industries" },
  { id: "contact", icon: FaEnvelope, label: "Contact" },
];

export const SKILL_CATEGORIES = [
  {
    title: "Backend",
    items: [
      { name: "PHP", icon: FaPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "RESTful APIs / JWT", icon: SiJsonwebtokens },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "React.js", icon: FaReact },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Mobile",
    items: [{ name: "React Native", icon: FaReact }],
  },
  {
    title: "Tools & DevOps",
    items: [
      { name: "Git & GitHub", icon: FaGitAlt },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker / VPS Deployment", icon: FaDocker },
    ],
  },
];

export const STATS = [
  { icon: GiRocket, num: 3, label: "Years in Business" },
  { icon: FaBriefcase, num: 15, label: "Projects Delivered" },
  { icon: FaSmile, num: 12, label: "Happy Clients" },
  { icon: FaTools, num: 20, label: "Technologies Used" },
];export const CATEGORY_TYPES = {
  ALL: "all",
  WEB: "web",
  AI: "ai",
};

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    cat: CATEGORY_TYPES.WEB,
    categoryLabel: "Web Platform",
    title: "Food Delivery Platform",
    tagline: "Multi-Dashboard Realtime Delivery System",
    desc: "Multi-dashboard food delivery system with live order tracking, dedicated portals for customers, delivery partners, restaurants, and administrators.",
    emoji: "🍔",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&h=650&fit=crop&auto=format&q=80",
    featured: true,
    badge: "Full-Stack Web",
    clientType: "In-house Product",
    year: "2024 – 2025",
    metrics: [
      { label: "Dashboards", value: "4 Roles" },
      { label: "Order Tracking", value: "Realtime" },
      { label: "Payment", value: "Razorpay" },
    ],
    impactHighlight: "⚡ Real-time Order Tracking & Razorpay Gateway",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Razorpay", "Tailwind CSS"],
    demoUrl: "https://stackwisesolutions.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    cat: CATEGORY_TYPES.AI,
    categoryLabel: "AI & Full-Stack",
    title: "AI-Powered YouTube Clone",
    tagline: "Full-Stack Video Streaming & AI Tagging Engine",
    desc: "Full-stack video streaming platform with AI title/tag generation, Shorts vertical feed, creator analytics, and adaptive playback.",
    emoji: "▶️",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&h=650&fit=crop&auto=format&q=80",
    featured: true,
    badge: "AI Integration",
    clientType: "Product Showcase",
    year: "2025",
    metrics: [
      { label: "AI Integration", value: "OpenAI" },
      { label: "Video Format", value: "Adaptive" },
      { label: "Feed Style", value: "Shorts UI" },
    ],
    impactHighlight: "🤖 OpenAI Auto Title & Tag Generation Engine",
    stack: ["React.js", "Node.js", "MongoDB", "OpenAI API", "Express.js", "Tailwind CSS"],
    demoUrl: "https://stackwisesolutions.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    cat: CATEGORY_TYPES.WEB,
    categoryLabel: "Enterprise Web",
    title: "School Management System",
    tagline: "Multi-Role Academic & Administrative Suite",
    desc: "Multi-role academic platform for students, teachers & admins with secure JWT authentication and scalable backend schemas.",
    emoji: "🏫",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=900&h=650&fit=crop&auto=format&q=80",
    featured: false,
    badge: "Enterprise Suite",
    clientType: "Client Project",
    year: "2023 – 2024",
    metrics: [
      { label: "Access Control", value: "JWT Auth" },
      { label: "Architecture", value: "Multi-Role" },
      { label: "Database", value: "MongoDB" },
    ],
    impactHighlight: "🎓 Multi-Role Portals & High-Security JWT Routing",
    stack: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT", "Tailwind CSS"],
    demoUrl: "https://stackwisesolutions.com",
    githubUrl: "https://github.com",
  },
];

export const PORTFOLIO_DETAILS = {
  1: {
    id: 1,
    title: "Food Delivery Platform",
    cat: "web",
    categoryLabel: "Web Platform",
    client: "In-house Product",
    date: "2024 – 2025",
    url: "https://stackwisesolutions.com",
    github: "https://github.com",
    overview:
      "A complete food delivery platform built with dedicated dashboards for customers, delivery partners, restaurants, and administrators with real-time tracking.",
    challenge:
      "Managing synchronized state across 4 distinct user roles while keeping order updates instantaneous without page reloads.",
    solution:
      "Implemented a real-time event-driven architecture using Socket.io and Google Maps API for smooth live location streaming.",
    description: [
      "Built a complete food delivery platform with dedicated dashboards for customers, delivery partners, restaurants, and administrators.",
      "Integrated Razorpay payment gateway for secure online transactions.",
      "Implemented real-time order tracking using Socket.io and Google Maps API to improve delivery visibility.",
      "Built a responsive UI with Tailwind CSS.",
    ],
    images: ["🍔", "🛵", "🗺️", "💳"],
    gallery: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1000&h=700&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1000&h=700&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&h=700&fit=crop&auto=format&q=80",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Razorpay", "Tailwind CSS"],
    metrics: [
      { label: "Dashboards", value: "4 Roles" },
      { label: "Tracking", value: "Realtime" },
      { label: "Payment", value: "Razorpay" },
    ],
    testimonial: {
      quote: "The multi-dashboard architecture and real-time live map tracking make order operations effortless and crystal clear.",
      author: "Product Team",
      role: "Lead Engineer",
      rating: 5,
    },
  },
  2: {
    id: 2,
    title: "AI-Powered YouTube Clone",
    cat: "ai",
    categoryLabel: "AI & Full-Stack",
    client: "Product Showcase",
    date: "2025",
    url: "https://stackwisesolutions.com",
    github: "https://github.com",
    overview:
      "A full-stack video streaming application enhanced with OpenAI API to auto-generate video titles, tags, and descriptions.",
    challenge:
      "Video creators needed automated metadata generation and adaptive playback without sacrificing interface responsiveness.",
    solution:
      "Integrated OpenAI GPT models for smart title/tag suggestions and engineered custom video player components with a modern Shorts feed.",
    description: [
      "Engineered a full-stack video streaming platform supporting video uploads, thumbnail generation, and adaptive playback.",
      "Integrated OpenAI API to auto-generate video titles and tags, improving content discoverability.",
      "Shipped core user features including playlists, subscriptions, comments, and community posts.",
      "Designed a creator dashboard with analytics and monetization models (ads & subscriptions).",
      "Built a Shorts-style vertical video feed.",
    ],
    images: ["▶️", "🤖", "📊", "🎬"],
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&h=700&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&h=700&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1000&h=700&fit=crop&auto=format&q=80",
    ],
    stack: ["React.js", "Node.js", "MongoDB", "OpenAI API", "Express.js", "Tailwind CSS"],
    metrics: [
      { label: "AI Engine", value: "OpenAI" },
      { label: "Content", value: "Videos & Shorts" },
      { label: "Features", value: "Creator Hub" },
    ],
    testimonial: {
      quote: "Automating metadata with OpenAI combined with a modern video player makes this a standout full-stack build.",
      author: "Creator Community",
      role: "Platform Review",
      rating: 5,
    },
  },
  3: {
    id: 3,
    title: "School Management System",
    cat: "web",
    categoryLabel: "Enterprise Web",
    client: "Client Project",
    date: "2023 – 2024",
    url: "https://stackwisesolutions.com",
    github: "https://github.com",
    overview:
      "A multi-role school management system designed for students, teachers, and school administrators with comprehensive role-based access control.",
    challenge:
      "Maintaining strict role-based data isolation and fast querying across thousands of student academic and financial records.",
    solution:
      "Built a scalable Node.js/Express backend with JWT authentication, fine-grained access control, and optimized MongoDB schemas.",
    description: [
      "Developed a multi-role school management platform supporting students, teachers, and school administrators.",
      "Implemented JWT authentication, access control, and secure API routing to protect sensitive academic data.",
      "Built a scalable backend using Node.js and Express.js with efficient MongoDB schemas for large-scale data handling.",
      "Designed a responsive front-end interface supporting multi-role access and usability across devices.",
    ],
    images: ["🏫", "📚", "🗂️", "✅"],
    gallery: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1000&h=700&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&h=700&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1000&h=700&fit=crop&auto=format&q=80",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT", "Tailwind CSS"],
    metrics: [
      { label: "Roles", value: "Admin, Teacher, Student" },
      { label: "Security", value: "JWT Auth" },
      { label: "Stack", value: "MERN" },
    ],
    testimonial: {
      quote: "The role-based permission system and responsive layout made academic management seamless across our institution.",
      author: "Client Administrator",
      role: "Academic Operations",
      rating: 5,
    },
  },
};

// ---- Services (with sub-services shown inside each service) ----
// NOTE: these are real, hand-picked Unsplash photos (verified, not random
// keyword-matched placeholders) chosen to actually match each service —
// code on screens for dev services, UI mockups for design, server racks for
// backend/DevOps, etc. Unsplash photos are free to use commercially with no
// attribution required. Swap in your own studio photography whenever you're
// ready — that'll always look more "on-brand" than stock.

export const SERVICES = [
  {
    slug: "web-development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&h=650&fit=crop&auto=format&q=80",
    image2: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=650&fit=crop&auto=format&q=80",
    icon: FaGlobe,
    title: "Web Development",
    tagline: "End-to-end scalable web solutions",
    desc: "Custom websites and web apps built to be fast, secure, and easy to manage — from a five-page brochure site to a full multi-role web application.",
    overview:
      "We plan every build around three things: how fast it loads, how easily you can update it yourself, and how well it holds up as your traffic grows. That means clean component structure on the frontend, a properly indexed database on the backend, and a CMS or admin panel that doesn't require a developer for routine content changes. Whether you need a marketing site, a customer portal, or an internal tool, we scope the stack to the problem instead of defaulting to one framework for everything.",
    metaDescription:
      "Custom website and web application development using React, Node.js, Laravel and WordPress. Fast, secure, SEO-friendly builds — get a free quote.",
    subServices: [
      "Custom Website Development",
      "CMS Development (WordPress / Custom CMS)",
      "E-commerce Websites",
      "Web App Development (MERN / Laravel)",
      "Website Speed & SEO Audits",
    ],
    benefits: [
      "Mobile-first, SEO-friendly builds out of the box",
      "Scalable architecture that grows with your business",
      "Easy-to-manage CMS or admin panel included",
      "Ongoing support and updates after launch",
      "Clean, documented handover so you're never locked in",
    ],
    idealFor: [
      "Businesses launching a new website",
      "Startups that need an MVP web app fast",
      "Companies migrating off an outdated platform",
    ],
    faqs: [
      {
        q: "Do you build with WordPress or custom code?",
        a: "Both. We recommend WordPress for content-heavy sites that need frequent editing, and a custom React / Laravel build for products that need custom logic, performance, or scale.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Yes — we can redesign and rebuild an existing site while preserving your content, SEO rankings, and URLs wherever possible.",
      },
      {
        q: "Will the website work on mobile?",
        a: "Every website we build is fully responsive and tested across phones, tablets, and desktops before launch.",
      },
      {
        q: "Do you provide hosting after launch?",
        a: "We can set up and manage hosting on a VPS or cloud provider of your choice, or hand over deployment-ready code if you prefer to host it yourself.",
      },
    ],
    tools: ["React", "Node.js", "Express.js", "Laravel", "MongoDB", "MySQL", "WordPress"],
    deliverables: "Live website · Admin panel · Source code · Deployment",
    turnaround: "2 – 6 weeks depending on scope",
    kickoffChecklist: [
      "Your business or brand details and any existing content",
      "Reference websites or design inspiration you like",
      "Domain & hosting access, if you already have one",
    ],
  },
  {
    slug: "frontend-development",
    image: "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?w=900&h=650&fit=crop&auto=format&q=80",
    image2: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&h=650&fit=crop&auto=format&q=80",
    icon: SiReact,
    title: "UI/UX Development",
    tagline: "Modern, fast & responsive UI",
    desc: "Pixel-perfect, responsive interfaces that feel great on every device — built as reusable components, not one-off pages.",
    overview:
      "A good interface is judged on two things: how it looks in a screenshot, and how it feels after the tenth click. We focus on the second one — predictable navigation, fast perceived load times, and components that stay consistent as the product grows. If you already have designs in Figma, we build to them pixel-for-pixel; if you don't, we can shape the UI around your content and brand as we go.",
    metaDescription:
      "React.js frontend development with Redux Toolkit and Tailwind CSS. Responsive, component-based, performance-optimized interfaces built for conversion.",
    subServices: [
      "Pixel-Perfect Responsive UI",
      "Component-Based Architecture",
      "Performance Optimization & Lazy Loading",
      "Tailwind CSS / Bootstrap Implementation",
      "Accessibility & Cross-Browser Testing",
    ],
    benefits: [
      "Interfaces that load fast and feel instant",
      "Reusable components that speed up future changes",
      "Consistent design system across every screen",
      "Built with accessibility and cross-browser support in mind",
    ],
    idealFor: [
      "Products that need a UI/UX refresh",
      "Teams that already have a backend/API and need a frontend",
      "SaaS dashboards and admin panels",
    ],
    faqs: [
      {
        q: "Do you work from an existing design (Figma)?",
        a: "Yes, we can build pixel-perfect from your Figma or Adobe XD file, or design the UI ourselves if you don't have one yet.",
      },
      {
        q: "Can you connect this to our existing backend?",
        a: "Absolutely — we regularly integrate frontends with existing REST or GraphQL APIs, regardless of the backend stack.",
      },
      {
        q: "Do you handle state management?",
        a: "Yes, we use Redux Toolkit or React Context depending on the complexity of the app, keeping state predictable and easy to debug.",
      },
    ],
    tools: ["React.js", "Redux Toolkit", "Tailwind CSS", "Bootstrap"],
    deliverables: "UI screens · Reusable components · Optimized frontend",
    turnaround: "1 – 3 weeks",
    kickoffChecklist: [
      "A Figma/XD file or reference screens, if you have one",
      "Access to your existing backend or API documentation",
      "Brand colors, fonts, and logo files",
    ],
  },
  {
    slug: "backend-development",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=650&fit=crop&auto=format&q=80",
    image2: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?w=900&h=650&fit=crop&auto=format&q=80",
    icon: FaServer,
    title: "Backend Development",
    tagline: "Secure & scalable server-side systems",
    desc: "Robust APIs and databases that keep your product running reliably at scale — designed to handle real traffic, not just the demo.",
    overview:
      "The backend is the part users never see and notice most when it fails — a slow query, a missing index, an auth check that isn't quite right. We design schemas around how the data will actually be queried, not just how it looks on a whiteboard, and build APIs with proper validation, role-based access, and documentation from day one so your team isn't reverse-engineering it later.",
    metaDescription:
      "Backend development with Node.js, Express.js and Laravel — secure REST APIs, JWT authentication, and optimized MySQL / MongoDB database design.",
    subServices: [
      "REST API Development",
      "JWT Authentication & Role-Based Access",
      "Database Design & Optimization (MySQL / MongoDB)",
      "Secure API Routing & Validation",
      "API Documentation (Postman / Swagger)",
    ],
    benefits: [
      "APIs designed to handle real production traffic",
      "Authentication and access control done right the first time",
      "Database schemas optimized for speed as data grows",
      "Clean, documented code your future team can maintain",
    ],
    idealFor: [
      "Apps that need a secure, well-structured backend",
      "Products scaling past their current database design",
      "Teams that need role-based access control (admin/user/etc.)",
    ],
    faqs: [
      {
        q: "Which stack do you recommend — Node.js or Laravel?",
        a: "It depends on your team and goals. Node.js/Express suits real-time and JS-heavy stacks, while Laravel is great for rapid, convention-driven development in PHP. We'll advise based on your project.",
      },
      {
        q: "Do you write API documentation?",
        a: "Yes, we document every endpoint (typically via Postman collections) so your team or future developers can pick it up easily.",
      },
      {
        q: "Can you migrate our existing database?",
        a: "Yes, we handle database migrations between MySQL and MongoDB, or restructure an existing schema for better performance.",
      },
    ],
    tools: ["Node.js", "Express.js", "Laravel", "MongoDB", "MySQL"],
    deliverables: "APIs · Database schema · Admin backend",
    turnaround: "2 – 5 weeks",
    kickoffChecklist: [
      "An overview of the features and modules you need",
      "Any existing database schema or sample data",
      "Expected user load and scale expectations",
    ],
  },
  {
    slug: "mobile-app-development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=650&fit=crop&auto=format&q=80",
    image2: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=650&fit=crop&auto=format&q=80",
    icon: MdPhoneIphone,
    title: "Mobile App Development",
    tagline: "Cross-platform mobile apps",
    desc: "React Native apps for Android & iOS with one shared codebase — so you ship both platforms without doubling your budget or timeline.",
    overview:
      "Most businesses don't need two separate native teams to get a good mobile app — they need one codebase that behaves natively on both platforms. React Native gets you there: shared logic, platform-specific polish where it matters, and a single pipeline for updates. We handle everything from the first build to Play Store / App Store submission, so the app you demo is the app that actually ships.",
    metaDescription:
      "React Native mobile app development for Android & iOS. One codebase, native performance, API integration and store-ready builds.",
    subServices: [
      "React Native App Development",
      "API Integration with Backend",
      "Play Store / App Store Deployment",
      "Push Notifications & Offline Support",
      "App Maintenance & Updates",
    ],
    benefits: [
      "One codebase for both Android and iOS — lower cost, faster delivery",
      "Smooth, native-feeling performance and navigation",
      "Push notifications, offline support, and deep linking available",
      "We handle store submission so you don't have to",
    ],
    idealFor: [
      "Businesses turning a website into a mobile app",
      "Startups validating a mobile-first product idea",
      "Teams that want Android + iOS without doubling the budget",
    ],
    faqs: [
      {
        q: "Will the app work on both Android and iOS?",
        a: "Yes — React Native lets us ship one codebase that runs natively on both platforms, keeping cost and maintenance low.",
      },
      {
        q: "Do you publish the app to the stores for us?",
        a: "Yes, we handle Play Store and App Store submission, including store listing assets and review requirements.",
      },
      {
        q: "What happens after the app is live?",
        a: "We offer ongoing maintenance plans to handle OS updates, bug fixes, and new feature releases.",
      },
    ],
    tools: ["React Native", "Expo", "Firebase"],
    deliverables: "Mobile app · API integration · Store-ready build",
    turnaround: "3 – 6 weeks",
    kickoffChecklist: [
      "App concept, core features, and target platforms (Android/iOS)",
      "Design references or existing UI screens, if available",
      "Backend/API details if the app needs to connect to one",
    ],
  },
  {
    slug: "api-integration",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=650&fit=crop&auto=format&q=80",
    image2: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=900&h=650&fit=crop&auto=format&q=80",
    icon: BiLinkAlt,
    title: "API Integration",
    tagline: "Seamless third-party integrations",
    desc: "Connect your product to the payment, AI, and mapping services it needs — wired up securely and tested before it touches real users.",
    overview:
      "Integrations look simple in the docs and get complicated in production — failed payments that need retry logic, webhooks that arrive out of order, rate limits you only discover under load. We build these with proper error handling and signature verification from the start, so a third-party outage or a malformed webhook doesn't take down your app with it.",
    metaDescription:
      "Third-party API integration services — Razorpay & Stripe payments, OpenAI, Google Maps, and custom webhook automation for your product.",
    subServices: [
      "Payment Gateway Integration (Razorpay, Stripe)",
      "OpenAI / AI API Integration",
      "Google Maps & Location Services",
      "Webhook & Third-Party Automation",
      "CRM & Marketing Tool Integrations",
    ],
    benefits: [
      "Secure, tested payment flows that don't lose transactions",
      "AI features shipped without you needing an ML team",
      "Location and mapping features that just work",
      "Automations that remove manual, repetitive work",
    ],
    idealFor: [
      "Products that need to accept online payments",
      "Apps adding AI-powered features (chat, generation, search)",
      "Teams that need location tracking or maps in their product",
    ],
    faqs: [
      {
        q: "Which payment gateways do you support?",
        a: "We most commonly integrate Razorpay and Stripe, and can work with other providers such as PayPal on request.",
      },
      {
        q: "Can you add AI features to our existing app?",
        a: "Yes — we integrate the OpenAI API for use cases like content generation, chatbots, tagging, and summarization inside your existing product.",
      },
      {
        q: "Do you handle webhook security?",
        a: "Yes, all webhook integrations include signature verification and error handling so events aren't lost or spoofed.",
      },
    ],
    tools: ["REST APIs", "Razorpay", "OpenAI", "Postman"],
    deliverables: "Integrated services · Secure endpoints",
    turnaround: "1 – 2 weeks",
    kickoffChecklist: [
      "Which services or APIs you want integrated",
      "API keys or developer accounts (we can help you set these up)",
      "Access to your existing codebase or repository",
    ],
  },
  {
    slug: "deployment-devops",
    image: "https://images.unsplash.com/photo-1667264501379-c1537934c7ab?w=900&h=650&fit=crop&auto=format&q=80",
    image2: "https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?w=900&h=650&fit=crop&auto=format&q=80",
    icon: GiRocket,
    title: "Deployment & DevOps",
    tagline: "Reliable deployment & scaling",
    desc: "Get your application live and keep it fast, secure, and monitored — with a deployment process that doesn't depend on one person remembering the steps.",
    overview:
      "A lot of \"it works on my machine\" problems disappear once deployment is automated instead of manual. We set up CI/CD so every push is built, tested, and shipped the same way, containerize with Docker for consistent environments, and put monitoring in place so you find out about a problem from an alert — not from a customer complaint.",
    metaDescription:
      "VPS and cloud deployment, CI/CD pipeline setup, Docker, and server monitoring — reliable DevOps for web and mobile applications.",
    subServices: [
      "VPS / Cloud Deployment",
      "CI/CD Pipeline Setup",
      "Server Optimization & Monitoring",
      "Domain & SSL Configuration",
      "Docker Containerization",
    ],
    benefits: [
      "Zero-downtime deployments once your pipeline is set up",
      "Faster releases with automated build and deploy steps",
      "Proactive monitoring so issues get caught before users notice",
      "SSL, domain, and server security configured correctly",
    ],
    idealFor: [
      "Projects ready to go from local/staging to production",
      "Teams tired of manual deployments",
      "Apps that need better uptime and monitoring",
    ],
    faqs: [
      {
        q: "Do you manage the server after deployment?",
        a: "Yes, we offer ongoing server management and monitoring plans, or a one-time setup if you have an in-house team to take over.",
      },
      {
        q: "Can you set up CI/CD for our existing repo?",
        a: "Yes, we set up automated build, test, and deploy pipelines (GitHub Actions or similar) for your existing codebase.",
      },
      {
        q: "Do you support Docker?",
        a: "Yes, we containerize applications with Docker for consistent, portable deployments across environments.",
      },
    ],
    tools: ["VPS", "Docker", "Nginx", "PM2"],
    deliverables: "Live deployment · CI/CD pipeline · Monitoring setup",
    turnaround: "1 – 2 weeks",
    kickoffChecklist: [
      "Access to your current server or hosting, if any",
      "Your domain registrar details",
      "Preferred cloud provider, if you already have one",
    ],
  },
  {
    slug: "graphic-designing",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&h=650&fit=crop&auto=format&q=80",
    image2: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=650&fit=crop&auto=format&q=80",
    icon: FaPaintBrush,
    title: "Graphic Designing",
    tagline: "Clean, modern visual identity",
    desc: "Branding and creatives that make your business instantly recognizable — designed to hold up across print, social, and web.",
    overview:
      "A brand kit is only useful if people actually use it consistently — which means clear rules, not just a pretty logo. We design with that in mind: a logo that works small on a favicon and large on a banner, a color and type system your team can apply without asking us every time, and export-ready files for whichever platform you need next.",
    metaDescription:
      "Logo design, brand identity kits, and social media creatives. Clean, modern graphic design for businesses that want to stand out.",
    subServices: [
      "Logo & Brand Identity Kits",
      "Social Media Creatives & Banners",
      "Marketing Collateral (Flyers, Brochures)",
      "UI Mockups & Presentation Decks",
      "Packaging & Print Design",
    ],
    benefits: [
      "A brand identity that looks consistent everywhere",
      "Fast turnaround so you're not waiting weeks for a logo",
      "Editable source files handed over, not just flat images",
      "Designs made to work across print and digital",
    ],
    idealFor: [
      "New businesses that need a logo and brand kit",
      "Teams that need ongoing social media creatives",
      "Founders preparing a pitch deck or presentation",
    ],
    faqs: [
      {
        q: "What do I receive at the end?",
        a: "You get final files in editable (Figma/AI/PSD) and export-ready (PNG/SVG/PDF) formats, plus a short brand usage guide for logos.",
      },
      {
        q: "How many logo concepts do I get to choose from?",
        a: "Typically 2–3 initial directions, followed by revisions on your preferred concept until you're happy with it.",
      },
      {
        q: "Can you design ongoing social media posts?",
        a: "Yes, we offer monthly creative packages for businesses that need a steady stream of social content.",
      },
    ],
    tools: ["Figma", "Canva", "Photoshop", "Illustrator"],
    deliverables: "Logo files · Brand kit · Social media templates",
    turnaround: "3 – 7 days",
    kickoffChecklist: [
      "Your brand name, tagline, and target audience",
      "Any existing brand assets or colors you want to keep",
      "A few examples of designs or styles you like",
    ],
  },
  {
    slug: "digital-marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=650&fit=crop&auto=format&q=80",
    image2: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=900&h=650&fit=crop&auto=format&q=80",
    icon: FaBullhorn,
    title: "Digital Marketing",
    tagline: "Grow visibility, traffic & conversions",
    desc: "SEO and ad campaigns that bring the right people to your business — measured properly, not just judged by likes and impressions.",
    overview:
      "Traffic that doesn't convert isn't really the goal — it's a step toward it. We start with an audit of what's actually holding your site back (technical SEO issues, content gaps, weak on-page structure), then build ad campaigns with proper conversion tracking so ad spend is judged against real outcomes: leads, signups, sales — not just clicks.",
    metaDescription:
      "SEO, social media management, and Google & Meta ad campaigns. Data-driven digital marketing to grow traffic and conversions.",
    subServices: [
      "SEO (On-page & Technical)",
      "Social Media Management & Content Calendars",
      "Google & Meta Ad Campaign Setup",
      "Performance Tracking & Monthly Reporting",
      "Conversion Rate Optimization",
    ],
    benefits: [
      "SEO audits that fix what's actually holding your rankings back",
      "Ad campaigns set up to track real conversions, not just clicks",
      "A consistent content calendar instead of random posting",
      "Clear monthly reports so you know what's working",
    ],
    idealFor: [
      "Businesses with a website that isn't getting traffic",
      "Teams running ads without clear ROI tracking",
      "Brands that need a consistent social media presence",
    ],
    faqs: [
      {
        q: "How long until we see SEO results?",
        a: "SEO is a gradual process — most clients start seeing meaningful movement in rankings and traffic within 2–4 months, depending on competition.",
      },
      {
        q: "Do you manage the ad budget for us?",
        a: "We set up, manage, and optimize campaigns on Google and Meta Ads; ad spend is billed directly by the platform to you, separate from our service fee.",
      },
      {
        q: "What's included in the monthly report?",
        a: "Traffic, rankings, ad performance, and conversion data, along with a plain-language summary of what changed and what we're doing next.",
      },
    ],
    tools: ["Google Analytics", "Meta Ads", "Google Ads", "SEMrush"],
    deliverables: "SEO audit · Campaign setup · Monthly performance report",
    turnaround: "Ongoing / monthly",
    kickoffChecklist: [
      "Access to your Google Analytics / Ads / Meta Business accounts",
      "Your target audience and current marketing goals",
      "Any past campaign data or performance reports",
    ],
  },
];

// ---- Industries we serve ----
export const INDUSTRIES = [
  {
    slug: "ecommerce-retail",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=650&fit=crop&auto=format&q=80",
    icon: FaShoppingCart,
    title: "E-commerce & Retail",
    tagline: "Online stores built to convert",
    desc: "Custom online stores with fast checkout, inventory management, and secure payments — built to convert browsers into buyers.",
    metaDescription:
      "E-commerce web development for retail brands — custom online stores, payment gateway integration, inventory management and SEO-ready builds.",
    challenges: [
      "Slow, template-locked storefronts that hurt conversion and SEO",
      "Cart abandonment from clunky or untrusted checkout flows",
      "Inventory and order data scattered across disconnected tools",
      "No visibility into what's actually driving (or losing) sales",
    ],
    solutions: [
      "Custom storefronts built on React / Next.js or a headless CMS for speed and full design control",
      "Secure Razorpay / Stripe checkout with saved payment methods and order tracking",
      "Centralized inventory, order, and customer dashboards for your team",
      "SEO-first architecture — clean URLs, structured data, and fast Core Web Vitals",
    ],
    useCases: [
      "Multi-category online stores with variant & inventory management",
      "Subscription or repeat-order models",
      "Marketplace-style platforms with multiple sellers",
      "D2C brand storefronts with custom checkout flows",
    ],
    services: ["web-development", "frontend-development", "api-integration", "digital-marketing"],
    tools: ["React", "Next.js", "Node.js", "Razorpay", "Stripe", "MongoDB"],
    faqs: [
      {
        q: "Can you migrate our existing store to a new platform?",
        a: "Yes — we migrate products, customers, and order history from Shopify, WooCommerce, or a custom platform while preserving your SEO rankings and URLs wherever possible.",
      },
      {
        q: "Do you integrate with payment gateways we already use?",
        a: "Yes, we integrate Razorpay, Stripe, and most major payment gateways, along with COD and split-payment flows if you need them.",
      },
      {
        q: "Can the store handle high traffic during sales?",
        a: "We build with caching, image optimization, and scalable hosting so your store stays fast during flash sales and traffic spikes.",
      },
    ],
    caseHighlight: {
      title: "Food Delivery Platform",
      note: "Multi-dashboard ordering system with live tracking and Razorpay payments — the same commerce foundation we bring to retail stores.",
      portfolioId: 1,
    },
  },
  {
    slug: "food-restaurant",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&h=650&fit=crop&auto=format&q=80",
    icon: FaUtensils,
    title: "Food & Restaurant",
    tagline: "Ordering & delivery platforms that scale",
    desc: "Ordering, delivery, and restaurant management platforms with real-time tracking — built for cloud kitchens, chains, and delivery-first brands.",
    metaDescription:
      "Food delivery and restaurant tech development — online ordering systems, delivery partner apps, and real-time order tracking with Socket.io.",
    challenges: [
      "Losing margin to third-party delivery apps and commission fees",
      "No direct relationship or repeat-order data on your own customers",
      "Manual order coordination between kitchen, delivery, and front desk",
      "Customers unable to track their order in real time",
    ],
    solutions: [
      "Branded ordering platforms with your own checkout — no commission cut",
      "Customer, restaurant, delivery partner, and admin dashboards in one system",
      "Real-time order tracking using Socket.io and Google Maps API",
      "Razorpay-integrated payments with COD and online options",
    ],
    useCases: [
      "Cloud kitchen and multi-outlet ordering platforms",
      "Restaurant chain apps with loyalty and repeat-order features",
      "Delivery partner apps with live location tracking",
      "Table reservation and QR-code menu systems",
    ],
    services: ["web-development", "mobile-app-development", "api-integration", "backend-development"],
    tools: ["React.js", "Node.js", "Socket.io", "Google Maps API", "Razorpay", "MongoDB"],
    faqs: [
      {
        q: "Can you build separate apps for customers and delivery riders?",
        a: "Yes — we typically build dedicated customer, delivery-partner, restaurant, and admin dashboards, each with role-specific features.",
      },
      {
        q: "Do you support real-time order tracking?",
        a: "Yes, we use Socket.io with Google Maps to give customers live order and delivery status updates.",
      },
      {
        q: "Can this integrate with our kitchen printer or POS?",
        a: "We can integrate with common POS and kitchen display systems — share your current setup and we'll scope the integration.",
      },
    ],
    tools_extra: [],
    caseHighlight: {
      title: "Food Delivery Platform",
      note: "A complete in-house food delivery product with live tracking and multi-role dashboards — built end-to-end by our team.",
      portfolioId: 1,
    },
  },
  {
    slug: "healthcare-medical",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&h=650&fit=crop&auto=format&q=80",
    icon: FaHeartbeat,
    title: "Healthcare & Medical",
    tagline: "Reliable, secure patient-facing tech",
    desc: "Appointment booking, patient portals, and clinic management systems designed for reliability, clarity, and data security.",
    metaDescription:
      "Healthcare software development — appointment booking systems, patient portals, and clinic/hospital management with secure, role-based access.",
    challenges: [
      "Manual appointment scheduling leading to missed or double bookings",
      "Patient records scattered across paper files or spreadsheets",
      "No easy way for patients to book, reschedule, or get reminders online",
      "Sensitive data handled without proper access control",
    ],
    solutions: [
      "Online appointment booking with automated reminders and calendar sync",
      "Role-based patient, doctor, and admin portals with JWT-secured access",
      "Digital patient records with structured, searchable history",
      "Secure, encrypted data handling and access-controlled APIs",
    ],
    useCases: [
      "Clinic and multi-doctor appointment booking systems",
      "Patient portals with prescription and visit history",
      "Hospital/clinic admin and staff management dashboards",
      "Telemedicine-ready booking and consultation flows",
    ],
    services: ["web-development", "backend-development", "mobile-app-development"],
    tools: ["React.js", "Node.js", "Express.js", "MySQL", "JWT"],
    faqs: [
      {
        q: "Can patients book and manage appointments online?",
        a: "Yes — we build self-serve booking with automated confirmation and reminder notifications, reducing no-shows and front-desk calls.",
      },
      {
        q: "How do you handle sensitive patient data?",
        a: "We implement role-based access control, encrypted data storage, and secure API routing so patient data is only visible to authorized users.",
      },
      {
        q: "Can this integrate with our existing clinic software?",
        a: "In most cases yes — share your current system's API or export format and we'll scope the integration during discovery.",
      },
    ],
    caseHighlight: {
      title: "School Management System",
      note: "A multi-role platform with JWT authentication and secure access control — the same architecture pattern we use for patient portals.",
      portfolioId: 3,
    },
  },
  {
    slug: "education-elearning",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=650&fit=crop&auto=format&q=80",
    icon: FaGraduationCap,
    title: "Education & E-Learning",
    tagline: "Platforms for schools & online learning",
    desc: "School management systems and e-learning platforms with role-based access for students, teachers, and administrators.",
    metaDescription:
      "Education software development — school management systems, e-learning platforms, and student/teacher portals with secure role-based access.",
    challenges: [
      "Student, attendance, and grading data managed across disconnected spreadsheets",
      "No single portal for students, teachers, and parents to stay updated",
      "Course content and assessments hard to manage or scale online",
      "Admin staff spending hours on manual, repetitive record-keeping",
    ],
    solutions: [
      "Multi-role platforms for students, teachers, and administrators",
      "Secure JWT authentication with role-based access to sensitive academic data",
      "Scalable MongoDB/MySQL schemas built for large student datasets",
      "Responsive design that works across school computer labs and personal devices",
    ],
    useCases: [
      "School / college management systems (attendance, grades, fees)",
      "Online course and e-learning platforms",
      "Student and parent communication portals",
      "Teacher dashboards for assignments and assessment tracking",
    ],
    services: ["web-development", "backend-development", "frontend-development"],
    tools: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT"],
    faqs: [
      {
        q: "Can the system handle multiple schools or branches?",
        a: "Yes, we can architect it as a multi-tenant system supporting multiple schools or branches from one platform if that's your model.",
      },
      {
        q: "Will parents and teachers have separate logins?",
        a: "Yes — students, teachers, parents, and admins each get role-specific dashboards and permissions.",
      },
      {
        q: "Can you add online payment for fees?",
        a: "Yes, we can integrate Razorpay or Stripe for online fee collection with receipts and payment history.",
      },
    ],
    caseHighlight: {
      title: "School Management System",
      note: "A multi-role academic platform for students, teachers, and admins with secure, scalable data handling — built by our team in 2023–2024.",
      portfolioId: 3,
    },
  },
  {
    slug: "real-estate-property",
    image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=900&h=650&fit=crop&auto=format&q=80",
    icon: FaBuilding,
    title: "Real Estate & Property",
    tagline: "Listings that generate real leads",
    desc: "Property listing websites and portals with search, filters, and lead capture — built to turn visitors into enquiries.",
    metaDescription:
      "Real estate website development — property listing portals, advanced search & filters, and lead-capture forms built for conversions and SEO.",
    challenges: [
      "Listings buried in slow, hard-to-search directory sites",
      "No clean way to capture and follow up on buyer/renter enquiries",
      "Property photos and details unmanageable without a proper CMS",
      "Weak local SEO, so listings don't show up in relevant searches",
    ],
    solutions: [
      "Fast, filterable property listing websites with map-based search",
      "Custom CMS/admin panel so your team can add and update listings easily",
      "Lead-capture forms and enquiry routing straight to your team",
      "Local SEO structure so listings rank for city and locality searches",
    ],
    useCases: [
      "Property listing & search portals with map integration",
      "Builder / developer project showcase websites",
      "Broker or agency CRM-lite lead management dashboards",
      "Rental and property management admin panels",
    ],
    services: ["web-development", "graphic-designing", "digital-marketing"],
    tools: ["React", "Node.js", "Google Maps API", "MySQL", "WordPress"],
    faqs: [
      {
        q: "Can buyers filter properties by location, price, and type?",
        a: "Yes, we build advanced filtering and map-based search so users can narrow listings by location, budget, property type, and amenities.",
      },
      {
        q: "Can our team update listings ourselves?",
        a: "Yes — we build an easy-to-use admin panel or CMS so your team can add, edit, and remove listings without touching code.",
      },
      {
        q: "Will the site help with local SEO?",
        a: "Yes, we structure listing pages with location-based SEO and schema markup so individual properties can rank in local search results.",
      },
    ],
  },
  {
    slug: "travel-hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=650&fit=crop&auto=format&q=80",
    icon: FaPlane,
    title: "Travel & Hospitality",
    tagline: "Booking experiences guests trust",
    desc: "Booking websites and apps for hotels, resorts, and travel businesses — fast, mobile-friendly, and built to convert lookers into bookers.",
    metaDescription:
      "Travel and hospitality website development — hotel & resort booking systems, availability calendars, and payment-integrated reservation platforms.",
    challenges: [
      "Booking pages that don't work well on mobile, where most travel searches happen",
      "No real-time availability, leading to overbooking or manual double-checking",
      "Guests dropping off during a slow or confusing payment step",
      "Limited visibility into which listings or packages are converting",
    ],
    solutions: [
      "Mobile-first booking flows with real-time availability calendars",
      "Secure payment integration for deposits and full bookings",
      "Admin dashboards to manage rooms, packages, and reservations",
      "SEO-optimized destination and property pages to capture organic search traffic",
    ],
    useCases: [
      "Hotel / resort booking and reservation systems",
      "Tour and travel package listing platforms",
      "Vacation rental booking sites",
      "Travel agency lead-generation websites",
    ],
    services: ["web-development", "mobile-app-development", "api-integration", "digital-marketing"],
    tools: ["React", "Node.js", "Razorpay", "Stripe", "MongoDB"],
    faqs: [
      {
        q: "Can you build a real-time room or package availability calendar?",
        a: "Yes, we build live availability calendars that update instantly as bookings come in, avoiding double-bookings.",
      },
      {
        q: "Do you support deposit or partial payments?",
        a: "Yes, we can configure full payment, deposit-based, or pay-at-property flows depending on how you want to structure bookings.",
      },
      {
        q: "Can guests book from mobile easily?",
        a: "The entire booking flow is designed mobile-first, since most travel bookings happen on phones.",
      },
    ],
  },
  {
    slug: "logistics-transportation",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&h=650&fit=crop&auto=format&q=80",
    icon: FaTruck,
    title: "Logistics & Transportation",
    tagline: "Live tracking & fleet visibility",
    desc: "Fleet, shipment, and delivery tracking platforms with real-time location updates — built to keep operations and customers in sync.",
    metaDescription:
      "Logistics software development — real-time shipment and fleet tracking, delivery management dashboards, and Google Maps-based route visibility.",
    challenges: [
      "Customers left guessing where their shipment or delivery actually is",
      "Dispatch and fleet coordination handled over calls and spreadsheets",
      "No central dashboard for tracking multiple vehicles or drivers",
      "Delayed or inaccurate delivery status updates hurting trust",
    ],
    solutions: [
      "Real-time shipment and fleet tracking with Socket.io and Google Maps API",
      "Driver and dispatch apps that sync live with a central admin dashboard",
      "Automated status notifications for customers at each delivery stage",
      "Role-based dashboards for dispatchers, drivers, and warehouse staff",
    ],
    useCases: [
      "Fleet and vehicle tracking dashboards",
      "Delivery partner / rider apps with live location sharing",
      "Shipment status and customer notification systems",
      "Warehouse and dispatch management portals",
    ],
    services: ["web-development", "mobile-app-development", "backend-development", "api-integration"],
    tools: ["React.js", "Node.js", "Socket.io", "Google Maps API", "MongoDB"],
    faqs: [
      {
        q: "Can customers track their delivery live, like a food delivery app?",
        a: "Yes — we use the same real-time tracking approach (Socket.io + Google Maps) that powers live order tracking in delivery platforms.",
      },
      {
        q: "Can dispatchers see all active drivers on one screen?",
        a: "Yes, we build a central admin dashboard showing all active vehicles, their status, and current location in real time.",
      },
      {
        q: "Do you build the driver-facing app as well?",
        a: "Yes, we can build a dedicated driver/rider app (React Native) alongside the customer and admin dashboards.",
      },
    ],
    caseHighlight: {
      title: "Food Delivery Platform",
      note: "Live delivery tracking built with Socket.io and Google Maps API — the same real-time infrastructure that powers logistics tracking.",
      portfolioId: 1,
    },
  },
  {
    slug: "fintech-finance",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900&h=650&fit=crop&auto=format&q=80",
    icon: FaCoins,
    title: "FinTech & Finance",
    tagline: "Secure, compliant financial products",
    desc: "Secure web and mobile products for finance — payment flows, dashboards, and reporting tools built with security as the starting point.",
    metaDescription:
      "FinTech software development — secure payment integrations, JWT-authenticated dashboards, and financial reporting tools built for finance businesses.",
    challenges: [
      "Financial platforms need airtight authentication and access control",
      "Payment flows that must be accurate, auditable, and never lose a transaction",
      "Dashboards that need to present complex data clearly, not overwhelm users",
      "Regulatory and data-security expectations that generic templates don't meet",
    ],
    solutions: [
      "JWT-based authentication with strict role-based access control",
      "Tested, secure payment integrations (Razorpay, Stripe) with full transaction logging",
      "Custom reporting dashboards with clear data visualization",
      "Hardened backend architecture with validated, secure API routing",
    ],
    useCases: [
      "Financial dashboards and reporting tools",
      "Payment and transaction management platforms",
      "Lending, investment, or expense-tracking web apps",
      "Secure client portals for financial advisors or firms",
    ],
    services: ["backend-development", "api-integration", "deployment-devops"],
    tools: ["Node.js", "Express.js", "JWT", "Razorpay", "Stripe", "MySQL"],
    faqs: [
      {
        q: "How do you approach security for financial products?",
        a: "We start with JWT authentication, role-based access, input validation, and secure API routing, and can accommodate additional compliance requirements you specify.",
      },
      {
        q: "Can you integrate multiple payment gateways?",
        a: "Yes, we've integrated Razorpay and Stripe on past projects and can add others based on your regional requirements.",
      },
      {
        q: "Do you provide audit logs for transactions?",
        a: "Yes, we can build transaction and activity logging so every financial action is traceable and auditable.",
      },
    ],
  },
  {
    slug: "media-entertainment",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&h=650&fit=crop&auto=format&q=80",
    icon: FaFilm,
    title: "Media & Entertainment",
    tagline: "Streaming & content platforms",
    desc: "Video streaming, content, and community platforms — built to handle uploads, playback, and engagement at scale.",
    metaDescription:
      "Media and entertainment platform development — video streaming apps, content management, and AI-powered discovery built with React and Node.js.",
    challenges: [
      "Video platforms need reliable upload, processing, and adaptive playback",
      "Content discovery breaks down without good tagging and search",
      "Building community features (comments, subscriptions) from scratch is complex",
      "Monetization (ads, subscriptions) needs to be designed in from day one",
    ],
    solutions: [
      "Full-stack video platforms supporting uploads, thumbnails, and adaptive playback",
      "OpenAI-powered auto-tagging and title generation for better discoverability",
      "Core engagement features — playlists, subscriptions, comments, community posts",
      "Creator dashboards with analytics and monetization models (ads & subscriptions)",
    ],
    useCases: [
      "Video streaming / OTT-style platforms",
      "Short-form vertical video feeds",
      "Creator and content-monetization dashboards",
      "Community and content-sharing platforms",
    ],
    services: ["web-development", "backend-development", "api-integration"],
    tools: ["React.js", "Node.js", "MongoDB", "OpenAI API", "Express.js"],
    faqs: [
      {
        q: "Can you build a video platform like a YouTube alternative?",
        a: "Yes — we've built a full-stack video streaming platform with uploads, adaptive playback, playlists, subscriptions, and a creator dashboard.",
      },
      {
        q: "Can AI help with content tagging and titles?",
        a: "Yes, we integrate the OpenAI API to auto-generate video titles and tags, improving content discoverability.",
      },
      {
        q: "Do you support monetization features?",
        a: "Yes, we can design ad-based and subscription monetization models into the creator dashboard from the start.",
      },
    ],
    caseHighlight: {
      title: "AI-Powered YouTube Clone",
      note: "A full-stack video streaming platform with AI-generated titles/tags, playlists, subscriptions, and a creator analytics dashboard.",
      portfolioId: 2,
    },
  },
];

export const TESTIMONIALS = [
  {
    initials: "AK",
    name: "Amit Khanna",
    role: "Project Manager, Delta IT Networks",
    project: "Food Delivery Platform",
    rating: 5,
    highlight: "production-ready features",
    text: "The team consistently ships production-ready features on time. Their ownership of our food delivery platform's real-time tracking system was a huge win for our client.",
    avatar: "https://api.dicebear.com/9.x/notionists/png?seed=Amit-Khanna&backgroundColor=c8a96e",
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "Backend Lead, TechPulse",
    project: "PHP & Node.js API Suite",
    rating: 5,
    highlight: "defect rates dropped noticeably",
    text: "They enforce solid coding standards across our PHP, Laravel, and Node.js codebases and communicate clearly at every step — defect rates dropped noticeably.",
    avatar: "https://api.dicebear.com/9.x/notionists/png?seed=Priya-Sharma&backgroundColor=d9c08f",
  },
  {
    initials: "RV",
    name: "Rohan Verma",
    role: "Director, EduSphere Academy",
    project: "School Management System",
    rating: 5,
    highlight: "handled data securely & scaled well",
    text: "The multi-role school platform they built handled our data securely and scaled well. Communication throughout the project was excellent.",
    avatar: "https://api.dicebear.com/9.x/notionists/png?seed=Rohan-Verma&backgroundColor=c8a96e",
  },
  {
    initials: "SM",
    name: "Siddharth Mehta",
    role: "Co-Founder, UrbanCart E-Commerce",
    project: "Next.js Storefront & Payments",
    rating: 5,
    highlight: "35% jump in mobile conversions",
    text: "Stackwise built our Next.js storefront and Razorpay payment integration from scratch. Our mobile checkout conversion rate jumped by 35% in the very first month after launch.",
    avatar: "https://api.dicebear.com/9.x/notionists/png?seed=Siddharth-Mehta&backgroundColor=b07a29",
  },
  {
    initials: "NK",
    name: "Neha Kapoor",
    role: "Product Director, MediSync Health",
    project: "AI-Powered Patient Portal",
    rating: 5,
    highlight: "exceptional code quality & AI integration",
    text: "Their engineering team integrated OpenAI APIs and Socket.io real-time tracking into our health portal effortlessly. Exceptional code quality, proactive updates, and zero downtime.",
    avatar: "https://api.dicebear.com/9.x/notionists/png?seed=Neha-Kapoor&backgroundColor=d9c08f",
  },
];

export const socials = [
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/rahul-soni-353879195" },
  { icon: FaGithub, link: "https://github.com/Rahul4863" },
  { icon: FaXTwitter, link: "https://x.com/yourusername" },
  { icon: FaFacebook, link: "https://facebook.com/yourusername" },
  { icon: FaInstagram, link: "https://instagram.com/yourusername" },
];
