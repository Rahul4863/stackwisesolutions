"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SITE_INFO } from "@/data/constants";
import EnquiryModal from "./EnquiryModal";
import Reveal from "./Reveal";
import {
  Sparkles,
  Search,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Server,
  Globe,
  Database,
  Smartphone,
  Cpu,
  Layers,
  Code2,
  Terminal,
  Lock,
  ChevronDown,
  ExternalLink,
  Sliders,
  Flame,
  Check,
} from "lucide-react";
import {
  FaPhp,
  FaGitAlt,
  FaDocker,
  FaNodeJs,
  FaReact,
  FaAws,
} from "react-icons/fa6";
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
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiNginx,
  SiVercel,
} from "react-icons/si";

// Complete modern technology dataset
const FULL_TECH_DATA = [
  // Frontend
  {
    name: "Next.js",
    category: "Frontend",
    icon: SiNextdotjs,
    level: "Primary Stack",
    tagline: "React Framework for Production-Grade SSR & Static Apps",
    desc: "We leverage Next.js App Router and Server Components to achieve sub-second load times, superior SEO rankings, and effortless automatic image/script optimization.",
    capabilities: [
      "App Router & React Server Components",
      "Dynamic SSR & Static Site Generation (SSG)",
      "Built-in API Routes & Edge Middleware",
      "Lighthouse 100/100 Performance Score",
    ],
    useCases: ["SaaS Web Apps", "E-Commerce", "Marketing Portals"],
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: FaReact,
    level: "Core Standard",
    tagline: "Component-Based UI Architecture for Dynamic Web Interfaces",
    desc: "Building modular, state-driven interfaces with custom React hooks, context management, and lightning-fast virtual DOM reconciliation.",
    capabilities: [
      "Reusable Component Library Design",
      "State Management with Hooks & Context",
      "Optimized Re-render Lifecycle",
      "Interactive Dashboards & Data Visualization",
    ],
    useCases: ["Single Page Apps (SPAs)", "Admin Dashboards", "Web Portals"],
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    icon: SiJavascript,
    level: "Foundational",
    tagline: "Modern Asynchronous & Object-Oriented Scripting",
    desc: "Clean, uncompiled modern JavaScript using async/await, ES modules, promises, and functional programming patterns.",
    capabilities: [
      "Async/Await & Fetch API Pipelines",
      "ES Modules & Tree Shaking",
      "DOM Manipulation & Micro-animations",
      "Strict Error Handling & Sanitization",
    ],
    useCases: ["Core Web Logic", "Browser Extensions", "Custom Widgets"],
  },
  {
    name: "Redux Toolkit",
    category: "Frontend",
    icon: SiRedux,
    level: "Enterprise Tool",
    tagline: "Predictable Global State Container for Large Scale Applications",
    desc: "Streamlined global state management using RTK slices, middleware, and RTK Query for efficient API data caching and synchronization.",
    capabilities: [
      "Slice Pattern State Architecture",
      "RTK Query API Caching & Polling",
      "Immutable State Mutations",
      "DevTools Time-Travel Debugging",
    ],
    useCases: ["Complex Enterprise Dashboards", "Multi-Step Checkout Flows"],
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: SiTailwindcss,
    level: "Design System",
    tagline: "Utility-First CSS Engine for Fluid & Responsive UI",
    desc: "Custom-configured design systems with Tailwind, ensuring rapid responsive layout building without CSS bloat or specificity conflicts.",
    capabilities: [
      "Zero-Runtime JIT Compiler",
      "Custom Theme Tokens & CSS Variables",
      "Fluid Mobile-First Responsive Breakpoints",
      "Accessible Motion & Hover Micro-Interactions",
    ],
    useCases: ["Custom Design Systems", "Responsive Portals", "Landing Pages"],
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: SiBootstrap,
    level: "UI Framework",
    tagline: "Grid-Based Component Framework for Fast Enterprise Prototyping",
    desc: "Reliable, accessible grid systems and responsive components engineered for enterprise web tools and administrative portals.",
    capabilities: [
      "Flexbox Grid Engine",
      "SASS Customization & Utilities",
      "Cross-Browser Component Compatibility",
      "Rapid Prototype Handover",
    ],
    useCases: ["Corporate Websites", "Legacy System Refactoring"],
  },

  // Backend & APIs
  {
    name: "Node.js",
    category: "Backend",
    icon: FaNodeJs,
    level: "High Concurrency",
    tagline: "Asynchronous Event-Driven JavaScript Runtime",
    desc: "Non-blocking I/O engine designed to handle thousands of concurrent client requests per second with minimal CPU footprint.",
    capabilities: [
      "Single-Threaded Event Loop Architecture",
      "High-Concurrency Microservices",
      "Real-Time WebSockets & Event Streaming",
      "Native Buffer & Stream Processing",
    ],
    useCases: ["API Gateways", "Real-Time Tracking Systems", "SaaS Backends"],
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: SiExpress,
    level: "API Standard",
    tagline: "Minimalist & Fast Web Framework for RESTful Services",
    desc: "Flexible routing pipelines, middleware suites, and robust endpoint architectures for building JSON web APIs.",
    capabilities: [
      "REST API Endpoint Architecture",
      "Custom Middleware & Error Handlers",
      "Rate Limiting & CORS Policies",
      "Third-Party SDK Integrations",
    ],
    useCases: ["REST Microservices", "Authentication Servers", "Payment Bridges"],
  },
  {
    name: "PHP 8+",
    category: "Backend",
    icon: FaPhp,
    level: "Enterprise Core",
    tagline: "Modern Object-Oriented Server Language with JIT Compilation",
    desc: "PHP 8 brings strict typing, attributes, match expressions, and JIT compilation for bulletproof web backend systems.",
    capabilities: [
      "Strict Type System & Attributes",
      "JIT Compiled High Execution Speed",
      "Robust Third-Party Package Ecosystem",
      "Seamless Server Compatibility",
    ],
    useCases: ["Content Management Systems", "Enterprise Web Apps", "CRMs"],
  },
  {
    name: "Laravel",
    category: "Backend",
    icon: SiLaravel,
    level: "Primary Backend",
    tagline: "The PHP Framework for Web Artisans",
    desc: "Full-featured MVC framework with Eloquent ORM, automated queue workers, DB migrations, and built-in security features.",
    capabilities: [
      "Eloquent ORM & Schema Migrations",
      "Redis Queue Workers & Event Jobs",
      "Blade Templating & Livewire",
      "Built-in CSRF, XSS & Auth Protection",
    ],
    useCases: ["E-Commerce Platforms", "SaaS Products", "Multi-Tenant Portals"],
  },
  {
    name: "REST APIs & JWT",
    category: "Backend",
    icon: SiJsonwebtokens,
    level: "Security Core",
    tagline: "Stateless JSON Web Token Authentication & Authorizations",
    desc: "Role-based authorization contracts using signed JWT tokens, access/refresh token rotation, and strict API sanitization.",
    capabilities: [
      "Stateless Token Authentication",
      "Role-Based Access Control (RBAC)",
      "Access & Refresh Token Rotation",
      "Standardized JSON Response Specs",
    ],
    useCases: ["Mobile App Backends", "Multi-Role Dashboards", "Partner APIs"],
  },

  // Databases & Caching
  {
    name: "MongoDB",
    category: "Database",
    icon: SiMongodb,
    level: "NoSQL Core",
    tagline: "High-Performance Document-Oriented NoSQL Database",
    desc: "Schema-less BSON document storage built for rapid iterative development, complex aggregation pipelines, and high read/write volume.",
    capabilities: [
      "Dynamic BSON Document Schemas",
      "Complex Aggregation Pipelines",
      "Replica Sets & High Availability",
      "Geospatial & Text Search Indexing",
    ],
    useCases: ["Product Catalogs", "User Profiles", "Analytics & Event Logs"],
  },
  {
    name: "MySQL",
    category: "Database",
    icon: SiMysql,
    level: "Relational Standard",
    tagline: "Battle-Tested ACID-Compliant Relational Database",
    desc: "Strict schema relational database engineered with indexed foreign key relationships, transactional integrity, and optimized query execution.",
    capabilities: [
      "ACID Transactional Guarantees",
      "Indexed Foreign Key Schema Design",
      "Stored Procedures & Triggers",
      "High Volume Read Replicas",
    ],
    useCases: ["Financial Records", "E-Commerce Inventories", "ERP Systems"],
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: SiPostgresql,
    level: "Advanced SQL",
    tagline: "Object-Relational Database with Native JSONB Support",
    desc: "Industrial-strength database supporting complex queries, spatial data, concurrent writing, and hybrid relational/NoSQL JSON store.",
    capabilities: [
      "JSONB Hybrid Document Queries",
      "Advanced Window Functions & CTEs",
      "PostGIS Spatial Data Processing",
      "Strict Concurrency Control (MVCC)",
    ],
    useCases: ["Fintech Systems", "Complex Data Analytics", "SaaS Core Data"],
  },
  {
    name: "Redis",
    category: "Database",
    icon: SiRedis,
    level: "In-Memory Speed",
    tagline: "Ultra-Fast In-Memory Data Structure Store & Cache",
    desc: "Sub-millisecond latency key-value caching layer for API response caching, user sessions, pub/sub channels, and rate-limiting counters.",
    capabilities: [
      "Sub-Millisecond Read/Write Latency",
      "Session Storage & Pub/Sub Messaging",
      "API Rate Limiting & Lock Queues",
      "Automated Cache Invalidation",
    ],
    useCases: ["High-Traffic Cache", "Live Leaderboards", "Background Queue"],
  },

  // Mobile
  {
    name: "React Native",
    category: "Mobile",
    icon: FaReact,
    level: "Cross-Platform",
    tagline: "Native iOS & Android Mobile Apps with 60 FPS Performance",
    desc: "Deploy natively-compiled iOS and Android mobile applications from a unified JavaScript/React codebase with zero compromise on user experience.",
    capabilities: [
      "Cross-Platform iOS & Android Build",
      "Native Component & Bridge Binding",
      "Over-The-Air (OTA) Code Updates",
      "Offline Sync & Device Hardware Access",
    ],
    useCases: ["On-Demand Service Apps", "E-Commerce Apps", "Social Portals"],
  },

  // DevOps & Cloud
  {
    name: "Docker",
    category: "Tools & DevOps",
    icon: FaDocker,
    level: "Containerization",
    tagline: "Containerization Platform for Consistent Development & Deployment",
    desc: "Packaging software and dependencies into isolated lightweight containers, eliminating 'it works on my machine' issues across dev and prod servers.",
    capabilities: [
      "Multi-Stage Dockerfile Optimization",
      "Docker Compose Microservices Stack",
      "Isolated Reproducible Environments",
      "Zero-Downtime Deployment Blueprints",
    ],
    useCases: ["Cloud Microservices", "CI/CD Deployment Pipelines"],
  },
  {
    name: "Git & GitHub",
    category: "Tools & DevOps",
    icon: FaGitAlt,
    level: "Version Control",
    tagline: "Distributed Version Control & Collaborative Code Quality",
    desc: "Strict git workflow with branch protection rules, code reviews, automated lint checks, and clean commit history.",
    capabilities: [
      "Git Flow & Feature Branching",
      "GitHub Actions Automated Workflows",
      "Pull Request Peer Code Reviews",
      "Automated Version Tagging",
    ],
    useCases: ["Source Code Management", "Team Collaboration"],
  },
  {
    name: "Nginx",
    category: "Tools & DevOps",
    icon: SiNginx,
    level: "Web Server",
    tagline: "High-Performance Reverse Proxy & HTTP Server",
    desc: "Configured reverse proxy handling SSL termination, Gzip/Brotli compression, load balancing, and static asset caching.",
    capabilities: [
      "SSL / TLS Certificates & HTTPS",
      "Reverse Proxy & Load Balancing",
      "Brotli / Gzip Compression",
      "Rate Limiting & DDoS Mitigation",
    ],
    useCases: ["Server Security Gateway", "High-Traffic Web Proxy"],
  },
  {
    name: "AWS & Cloud VPS",
    category: "Tools & DevOps",
    icon: FaAws,
    level: "Cloud Infrastructure",
    tagline: "Scalable Cloud Hosting & Infrastructure Management",
    desc: "Deploying and managing web servers on AWS EC2, DigitalOcean, Vercel, and cloud VPS with SSL, backups, and firewall configurations.",
    capabilities: [
      "VPS Server Provisioning & Hardening",
      "Vercel & AWS Edge Deployments",
      "Automated Daily Database Backups",
      "Cloudflare CDN & DDoS Protection",
    ],
    useCases: ["Production Hosting", "Scalable Infrastructure"],
  },
];

// Interactive Stack Recommendations Matrix
const STACK_PRESETS = [
  {
    id: "web-app",
    name: "🚀 SaaS Web Application",
    subtitle: "High-speed, SEO-optimized web app with dynamic dashboards",
    frontend: ["Next.js", "React.js", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "JWT Auth"],
    database: ["MongoDB", "Redis"],
    devops: ["Docker", "AWS / Vercel"],
    why: "Ideal for modern SaaS products that need sub-second page loads, real-time interactivity, and instant scaling.",
  },
  {
    id: "mobile-app",
    name: "📱 Mobile Application",
    subtitle: "Native iOS & Android app with unified backend API",
    frontend: ["React Native", "Redux Toolkit"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    database: ["PostgreSQL", "Redis"],
    devops: ["Docker", "Nginx"],
    why: "Delivers a 60 FPS native feel across iPhone and Android devices while reusing API logic to save 40%+ build budget.",
  },
  {
    id: "ecommerce",
    name: "🛒 Enterprise E-Commerce",
    subtitle: "Resilient store platform with inventory management & high speed",
    frontend: ["Next.js", "Tailwind CSS"],
    backend: ["Laravel", "PHP 8+"],
    database: ["MySQL", "Redis Cache"],
    devops: ["Nginx", "Cloud VPS"],
    why: "Combines Laravel's bulletproof transaction security with Next.js frontend speed for high conversion rate sales.",
  },
  {
    id: "microservice",
    name: "⚡ High-Concurrency API",
    subtitle: "Heavy data processing, microservices & queue workers",
    frontend: ["React.js", "Redux"],
    backend: ["Node.js", "Express.js"],
    database: ["PostgreSQL", "MongoDB", "Redis"],
    devops: ["Docker", "AWS / VPS"],
    why: "Engineered for apps with high API call volumes, background worker queues, and complex database relationships.",
  },
];

// FAQ list
const TECH_FAQS = [
  {
    q: "Which backend stack should I choose: Node.js or Laravel (PHP)?",
    a: "Node.js is ideal for real-time applications, web sockets, high-concurrency microservices, and unified JavaScript codebases. Laravel (PHP) is outstanding for data-heavy enterprise platforms, complex SQL relationships, built-in ORM security, and fast administrative backend creation. We evaluate your product goals to recommend the exact right fit.",
  },
  {
    q: "Do you build custom web applications or use templates?",
    a: "Every project built by Stackwise Solutions is engineered from scratch using clean component architecture and custom code. We do not use bloated pre-made site templates, ensuring 100/100 Lighthouse performance, clean code structure, and zero unnecessary dependencies.",
  },
  {
    q: "Do I get full ownership of the source code and repositories?",
    a: "Yes, 100%. Upon project completion, we hand over complete GitHub repository access, deployment credentials, database schemas, and architectural documentation. You own all intellectual property with zero vendor lock-in.",
  },
  {
    q: "How do you ensure web application security?",
    a: "We implement multi-layer security best practices including parameter sanitization (guarding against SQL/NoSQL injection), JWT token rotation with HTTP-only cookies, strict CORS headers, HTTPS encryption, rate limiting, and automated vulnerability audits.",
  },
  {
    q: "Can you help migrate our legacy codebase to Next.js or Node.js?",
    a: "Absolutely. We specialize in legacy system migration and API modernization, refactoring outdated monolithic sites into high-speed Next.js frontend interfaces backed by containerized RESTful microservices without downtime.",
  },
];

export default function TechnologiesContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStackId, setActiveStackId] = useState("web-app");
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const categories = ["All", "Frontend", "Backend", "Database", "Mobile", "Tools & DevOps"];

  // Filtered tech list
  const filteredTech = useMemo(() => {
    return FULL_TECH_DATA.filter((tech) => {
      const matchesCategory =
        selectedCategory === "All" || tech.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.capabilities.some((c) =>
          c.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeStackPreset = STACK_PRESETS.find((s) => s.id === activeStackId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf7f2] via-[#fffdfa] to-[#f5efe4] text-[#1a1611] relative overflow-hidden">
      
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-16 -left-20 w-[30rem] h-[30rem] rounded-full bg-amber-200/35 blur-3xl float-slow pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[32rem] h-[32rem] rounded-full bg-teal-200/20 blur-3xl float-slow-delay pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-[28rem] h-[28rem] rounded-full bg-amber-300/20 blur-3xl float-slow pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#b07a29 1px, transparent 1px), linear-gradient(to right, #b07a29 1px, transparent 40px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-20 pt-8 pb-20 relative z-10">
        
        {/* Page Hero Header */}
        <Reveal className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs sm:text-sm font-bold tracking-wide shadow-xs backdrop-blur-md mb-5">
            <Sparkles className="w-4 h-4 text-amber-700 animate-pulse" />
            <span>OUR ENGINEERING ECOSYSTEM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#1a1611] leading-tight">
            Production-Tested Technologies & <span className="shimmer-text">Modern Architecture</span>
          </h1>

          <p className="text-base sm:text-lg text-[#594f42] mt-5 leading-relaxed font-medium">
            We engineer high-performance web software, scalable API services, resilient database schemas, and native mobile apps designed for 100/100 Lighthouse speed, security, and zero technical debt.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-7">
            <span className="px-4 py-1.5 rounded-full bg-white/90 border border-amber-900/15 text-amber-950 text-xs sm:text-sm font-bold shadow-xs">
              ⚡ 100/100 Lighthouse Performance
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/90 border border-amber-900/15 text-amber-950 text-xs sm:text-sm font-bold shadow-xs">
              🛡️ Zero Tech Debt Codebase
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/90 border border-amber-900/15 text-amber-950 text-xs sm:text-sm font-bold shadow-xs">
              🔒 100% IP & Repo Ownership
            </span>
          </div>
        </Reveal>

        {/* Live Filter Controls & Search */}
        <Reveal delay={0.1} className="mb-10">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-4 sm:p-6 border border-amber-900/15 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input Box */}
            <div className="relative w-full md:w-80 shrink-0">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-800 pointer-events-none" />
              <input
                type="text"
                placeholder="Search technologies (e.g. React, Node, Docker)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-amber-500/5 border border-amber-900/15 text-xs sm:text-sm font-medium text-[#1a1611] placeholder:text-[#8c7e6c] focus:outline-none focus:border-amber-700 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-amber-800 hover:text-amber-950 font-bold"
                >
                  ✕ Clear
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              {categories.map((cat) => {
                const count =
                  cat === "All"
                    ? FULL_TECH_DATA.length
                    : FULL_TECH_DATA.filter((t) => t.category === cat).length;
                const isSelected = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-amber-800 text-white shadow-md shadow-amber-800/20"
                        : "bg-amber-100/60 text-[#4a3f33] hover:text-amber-950 hover:bg-amber-200/70"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`px-1.5 py-0.2 text-[10px] rounded-full font-extrabold ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-amber-800/15 text-amber-950"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>
        </Reveal>

        {/* Technologies Grid */}
        {filteredTech.length === 0 ? (
          <div className="text-center py-16 bg-white/80 rounded-3xl border border-amber-900/10 p-8">
            <Sliders className="w-10 h-10 text-amber-700 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-[#1a1611]">No matching technologies found</h3>
            <p className="text-sm text-[#6e6151] mt-1">Try resetting your search query or switching categories.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-5 py-2 rounded-full bg-amber-800 text-white font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filteredTech.map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <Reveal key={tech.name} delay={idx * 0.04} direction="up">
                  <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-amber-900/15 shadow-lg hover:border-amber-700/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden">
                    
                    {/* Soft background glow on hover */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-400/25 transition-all duration-500" />

                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-amber-100/80 border border-amber-300/60 text-amber-900 flex items-center justify-center text-2xl shadow-sm group-hover:bg-amber-800 group-hover:text-white transition-colors duration-300">
                          {TechIcon ? <TechIcon size={24} /> : <Code2 size={24} />}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-900 border border-amber-500/20 text-[11px] font-bold">
                            {tech.category}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-900/10 text-amber-950 text-[11px] font-semibold">
                            {tech.level}
                          </span>
                        </div>
                      </div>

                      {/* Tech Name & Tagline */}
                      <h3 className="text-xl font-display font-extrabold text-[#1a1611] group-hover:text-amber-950 transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-xs font-bold text-amber-800 mt-0.5 mb-3">
                        {tech.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-[#594f42] leading-relaxed font-medium mb-4">
                        {tech.desc}
                      </p>

                      {/* Capabilities checklist */}
                      <div className="space-y-1.5 mb-5 pt-3 border-t border-amber-900/10">
                        {tech.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2 text-xs text-[#2b241c] font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use cases pills */}
                    <div className="pt-3 border-t border-amber-900/10 flex flex-wrap gap-1.5 items-center">
                      <span className="text-[10px] uppercase font-bold text-[#8c7e6c] mr-1">Best For:</span>
                      {tech.useCases.map((uc, uIdx) => (
                        <span
                          key={uIdx}
                          className="px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-[#4a3f33] text-[10px] font-bold"
                        >
                          {uc}
                        </span>
                      ))}
                    </div>

                  </div>
                </Reveal>
              );
            })}
          </div>
        )}

        {/* Interactive Stack Advisor / Builder Widget */}
        <Reveal delay={0.2} className="mb-20">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border-2 border-amber-900/15 shadow-2xl relative overflow-hidden">
            
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-900 text-xs font-bold mb-3 border border-amber-500/20">
                <Flame className="w-3.5 h-3.5 text-amber-700" />
                INTERACTIVE ARCHITECTURE ADVISOR
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#1a1611]">
                Recommended Tech Stack for Your Project
              </h2>
              <p className="text-xs sm:text-sm text-[#594f42] mt-2">
                Select your project type to see how we pair frontend, backend, database, and cloud infrastructure for maximum performance and scalability.
              </p>
            </div>

            {/* Stack Selector Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {STACK_PRESETS.map((preset) => {
                const isActive = preset.id === activeStackId;
                return (
                  <button
                    key={preset.id}
                    onClick={() => setActiveStackId(preset.id)}
                    className={`p-4 rounded-2xl text-left border text-xs sm:text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-amber-800 text-white border-amber-800 shadow-lg shadow-amber-800/25 scale-[1.02]"
                        : "bg-amber-500/5 text-[#2b241c] border-amber-900/15 hover:bg-amber-100/60"
                    }`}
                  >
                    <div className="font-extrabold mb-1">{preset.name}</div>
                    <div className={`text-[11px] leading-tight ${isActive ? "text-amber-100" : "text-[#6e6151]"}`}>
                      {preset.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Stack Details Card */}
            {activeStackPreset && (
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 sm:p-8">
                
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-amber-900/10">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1611] flex items-center gap-2">
                      <span>{activeStackPreset.name} Architecture</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#594f42] mt-1">
                      {activeStackPreset.why}
                    </p>
                  </div>

                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="px-6 py-2.5 rounded-full bg-amber-800 text-white text-xs sm:text-sm font-bold shadow-md hover:bg-amber-900 transition btn-pop shrink-0"
                  >
                    Get Stack Estimate →
                  </button>
                </div>

                {/* 4 Stack Component Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  <div className="bg-white rounded-xl p-4 border border-amber-900/10 shadow-xs">
                    <div className="text-[11px] uppercase font-bold text-amber-800 flex items-center gap-1.5 mb-2">
                      <Globe className="w-3.5 h-3.5" />
                      Frontend Engine
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {activeStackPreset.frontend.map((f, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-amber-100/80 text-amber-950 text-xs font-bold">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-amber-900/10 shadow-xs">
                    <div className="text-[11px] uppercase font-bold text-amber-800 flex items-center gap-1.5 mb-2">
                      <Server className="w-3.5 h-3.5" />
                      Backend & API
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {activeStackPreset.backend.map((b, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-amber-100/80 text-amber-950 text-xs font-bold">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-amber-900/10 shadow-xs">
                    <div className="text-[11px] uppercase font-bold text-amber-800 flex items-center gap-1.5 mb-2">
                      <Database className="w-3.5 h-3.5" />
                      Database & Cache
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {activeStackPreset.database.map((d, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-amber-100/80 text-amber-950 text-xs font-bold">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-amber-900/10 shadow-xs">
                    <div className="text-[11px] uppercase font-bold text-amber-800 flex items-center gap-1.5 mb-2">
                      <Cpu className="w-3.5 h-3.5" />
                      DevOps & Cloud
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {activeStackPreset.devops.map((c, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-amber-100/80 text-amber-950 text-xs font-bold">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            )}

          </div>
        </Reveal>

        {/* Engineering Pillars (Why Work With Us) */}
        <Reveal delay={0.25} className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-900 text-xs font-bold mb-3 border border-amber-500/20">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              OUR CODE STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1a1611]">
              Why Our Engineering Stack Drives Business Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-amber-900/15 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-amber-800 text-white flex items-center justify-center mb-4 shadow-md">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1a1611] mb-2">100/100 Lighthouse</h3>
              <p className="text-xs text-[#594f42] leading-relaxed">
                Minified bundles, lazy image loading, SSR rendering, and Brotli compression deliver lightning response times on mobile and desktop.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-amber-900/15 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-amber-800 text-white flex items-center justify-center mb-4 shadow-md">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1a1611] mb-2">Zero Tech Debt</h3>
              <p className="text-xs text-[#594f42] leading-relaxed">
                Modular React components, structured MVC controllers, strict naming conventions, and clean folder structures for maintainable code.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-amber-900/15 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-amber-800 text-white flex items-center justify-center mb-4 shadow-md">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1a1611] mb-2">Enterprise Security</h3>
              <p className="text-xs text-[#594f42] leading-relaxed">
                Sanitized queries against SQL/NoSQL injection, HTTPS SSL encryption, JWT authentication, CORS policy, and rate limiting.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-amber-900/15 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-amber-800 text-white flex items-center justify-center mb-4 shadow-md">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1a1611] mb-2">100% IP Ownership</h3>
              <p className="text-xs text-[#594f42] leading-relaxed">
                Full GitHub repository access, database credentials, architecture specs, and step-by-step handover documentation upon completion.
              </p>
            </div>

          </div>
        </Reveal>

        {/* Development & Deployment Pipeline Steps */}
        <Reveal delay={0.3} className="mb-20">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-amber-900/15 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#1a1611]">
                Our 4-Stage Architectural Delivery Pipeline
              </h2>
              <p className="text-xs sm:text-sm text-[#594f42] mt-2">
                How we turn your project requirements into production-ready software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {[
                {
                  step: "01",
                  title: "Blueprint & Tech Selection",
                  desc: "Analyzing database schemas, API specs, expected user load, and scoping the optimal tech stack.",
                },
                {
                  step: "02",
                  title: "Frontend & Component UI",
                  desc: "Building high-performance Next.js/React responsive UI components with clean state control.",
                },
                {
                  step: "03",
                  title: "Backend API & Database",
                  desc: "Constructing secure RESTful API endpoints, JWT authentication, and indexed SQL/NoSQL schemas.",
                },
                {
                  step: "04",
                  title: "Docker & Cloud Go-Live",
                  desc: "Containerizing services, running automated security checks, configuring SSL, and launching on cloud servers.",
                },
              ].map((s, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-amber-500/5 border border-amber-900/10 relative">
                  <div className="text-2xl font-black text-amber-800 mb-2">
                    {s.step}
                  </div>
                  <h3 className="text-sm font-extrabold text-[#1a1611] mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#594f42] leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Technical FAQ Accordion */}
        <Reveal delay={0.35} className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-900 text-xs font-bold mb-3 border border-amber-500/20">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl font-display font-extrabold text-[#1a1611]">
                Technical Questions & Stack Guidance
              </h2>
            </div>

            <div className="space-y-3">
              {TECH_FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white/95 rounded-2xl border border-amber-900/15 overflow-hidden transition shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left p-5 text-sm sm:text-base font-bold text-[#1a1611] hover:text-amber-950"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-amber-800 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#594f42] leading-relaxed border-t border-amber-900/10 font-medium">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* CTA Banner */}
        <Reveal delay={0.4}>
          <div className="bg-gradient-to-r from-amber-900 via-amber-950 to-amber-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto border border-amber-700/40">
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-semibold backdrop-blur-md">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Custom Tech Stack Consultation
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white">
                Have Specific Technology Requirements for Your Project?
              </h3>

              <p className="text-sm sm:text-base text-amber-100/90 max-w-2xl mx-auto font-medium leading-relaxed">
                Whether you need a Next.js web application, a Node.js microservice architecture, a Laravel enterprise portal, or a React Native mobile app, our senior engineers are ready to build it.
              </p>

              <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-amber-950 font-bold text-sm sm:text-base shadow-xl hover:bg-amber-100 btn-pop transition"
                >
                  <span>Discuss Your Tech Stack</span>
                  <ArrowRight className="w-4 h-4 text-amber-900" />
                </button>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-white font-bold text-sm sm:text-base hover:bg-amber-800 transition"
                >
                  <span>Contact Sales</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

      </div>

      {/* Enquiry Modal */}
      {enquiryOpen && (
        <EnquiryModal
          service={{ title: "Technologies & Engineering Consultation" }}
          onClose={() => setEnquiryOpen(false)}
        />
      )}

    </div>
  );
}
