// Simple block-based content model so posts can be rendered without a
// markdown parser or real images. Add more posts by following the same
// shape — see the README section "Adding a new blog post" for the
// step-by-step guide once this is dropped into the project.

export const BLOG_CATEGORIES = {
  ALL: "all",
  WEB: "Web Development",
  MOBILE: "Mobile Development",
  MARKETING: "Digital Marketing",
  BACKEND: "Backend & APIs",
};

export const BLOG_POSTS = [
  {
    slug: "why-your-business-needs-a-custom-web-app-in-2026",
    image: "https://picsum.photos/seed/custom-web-app-2026/900/600",
    title: "Why Your Business Needs a Custom Web App in 2026",
    excerpt:
      "Off-the-shelf tools get you started, but they start costing you the moment your workflow doesn't fit their template. Here's when it's time to go custom.",
    metaDescription:
      "Learn when a custom web application makes more sense than off-the-shelf software, and what it actually costs to build one in 2026.",
    category: BLOG_CATEGORIES.WEB,
    date: "2026-06-02",
    readTime: "6 min read",
    emoji: "🖥️",
    author: { name: "Stackwise Team", initials: "SS", role: "Engineering" },
    tags: ["Web Development", "Business", "MVP"],
    content: [
      {
        type: "paragraph",
        text: "Most businesses start with off-the-shelf tools — a Shopify store, a WordPress site, a no-code app builder. That's usually the right call early on. But there's a point where the tool starts working against you instead of for you.",
      },
      {
        type: "heading",
        id: "signs",
        text: "Signs you've outgrown off-the-shelf tools",
      },
      {
        type: "list",
        items: [
          "You're paying for three different plugins to do one workflow",
          "Your team has built a maze of spreadsheets to cover what the software can't do",
          "Customers are asking for features your platform structurally can't support",
          "Every update to the underlying platform risks breaking something you rely on",
        ],
      },
      {
        type: "paragraph",
        text: "None of these are dealbreakers on their own. But together, they're a sign that a custom build will pay for itself faster than another six months of workarounds.",
      },
      {
        type: "heading",
        id: "cost",
        text: "What does a custom web app actually cost?",
      },
      {
        type: "paragraph",
        text: "It depends entirely on scope, but a focused MVP — one core workflow, one or two user roles, a clean UI — typically takes 4-8 weeks. The mistake most businesses make is trying to build everything at once instead of shipping the core workflow first and expanding from there.",
      },
      {
        type: "heading",
        id: "getting-started",
        text: "How to get started",
      },
      {
        type: "paragraph",
        text: "Start by writing down the one workflow that's costing you the most time right now. That's your MVP. Everything else — reporting, integrations, admin dashboards — can come in phase two.",
      },
    ],
  },
  {
    slug: "react-native-vs-flutter-2026",
    image: "https://picsum.photos/seed/react-native-flutter/900/600",
    title: "React Native vs Flutter: Which Should You Choose in 2026?",
    excerpt:
      "Both can ship a single codebase to Android and iOS. The right choice depends less on the framework and more on your team and your app's needs.",
    metaDescription:
      "A practical comparison of React Native and Flutter for 2026 — performance, team fit, and which one to choose for your mobile app project.",
    category: BLOG_CATEGORIES.MOBILE,
    date: "2026-05-18",
    readTime: "7 min read",
    emoji: "📱",
    author: { name: "Stackwise Team", initials: "SS", role: "Mobile" },
    tags: ["React Native", "Flutter", "Mobile Apps"],
    content: [
      {
        type: "paragraph",
        text: "Both React Native and Flutter promise the same thing: write once, run on Android and iOS. In practice, the decision comes down to your team's existing skills and how deeply your app needs to integrate with native platform features.",
      },
      {
        type: "heading",
        id: "when-react-native",
        text: "When React Native makes sense",
      },
      {
        type: "list",
        items: [
          "Your team already knows React and JavaScript/TypeScript",
          "You want to share code or logic with an existing React web app",
          "Your app is CRUD-heavy — forms, lists, dashboards — rather than graphics-heavy",
        ],
      },
      {
        type: "heading",
        id: "when-flutter",
        text: "When Flutter makes sense",
      },
      {
        type: "list",
        items: [
          "You need pixel-perfect custom UI and animations across both platforms",
          "Your team is starting fresh and has no strong JS/React background",
          "Performance-heavy screens (games, complex animations) are a core part of the app",
        ],
      },
      {
        type: "paragraph",
        text: "Our default recommendation for most business apps is React Native, mainly because it lets teams reuse existing web talent and libraries. But for highly custom, animation-heavy products, Flutter's rendering engine has a real edge.",
      },
    ],
  },
  {
    slug: "5-seo-mistakes-costing-you-traffic",
    image: "https://picsum.photos/seed/seo-mistakes/900/600",
    title: "5 SEO Mistakes That Are Costing You Traffic",
    excerpt:
      "Most SEO problems aren't exotic — they're basic technical issues that quietly cap how much traffic your site can ever get.",
    metaDescription:
      "Five common, fixable SEO mistakes — from slow page speed to missing meta tags — that are likely capping your website's organic traffic.",
    category: BLOG_CATEGORIES.MARKETING,
    date: "2026-04-30",
    readTime: "5 min read",
    emoji: "📈",
    author: { name: "Stackwise Team", initials: "SS", role: "Growth" },
    tags: ["SEO", "Digital Marketing"],
    content: [
      {
        type: "paragraph",
        text: "Before chasing backlinks or writing more content, it's worth checking whether basic technical SEO is quietly holding your site back. Here are the five we see most often.",
      },
      {
        type: "heading",
        id: "slow-pages",
        text: "1. Slow page load times",
      },
      {
        type: "paragraph",
        text: "Google uses page speed as a ranking factor, and users bounce fast on slow pages. Compressing images and lazy-loading anything below the fold is usually the highest-impact fix.",
      },
      {
        type: "heading",
        id: "missing-meta",
        text: "2. Missing or duplicate meta descriptions",
      },
      {
        type: "paragraph",
        text: "Every page should have a unique, specific meta description. Generic or duplicate ones hurt click-through rate even when the page ranks well.",
      },
      {
        type: "heading",
        id: "no-mobile",
        text: "3. Not being mobile-first",
      },
      {
        type: "paragraph",
        text: "Google indexes the mobile version of your site by default. A desktop-only design with a broken mobile experience will cap your rankings no matter how good the content is.",
      },
      {
        type: "heading",
        id: "thin-content",
        text: "4. Thin or duplicate content",
      },
      {
        type: "paragraph",
        text: "Pages that just repeat what's already on the site (or elsewhere on the web) rarely rank. Each page needs a clear, specific reason to exist.",
      },
      {
        type: "heading",
        id: "no-structured-data",
        text: "5. No structured data (JSON-LD)",
      },
      {
        type: "paragraph",
        text: "Structured data doesn't directly boost rankings, but it helps Google understand your content well enough to show rich results — FAQs, breadcrumbs, star ratings — which increases click-through rate.",
      },
    ],
  },
  {
    slug: "choosing-the-right-tech-stack-for-your-startup",
    image: "https://picsum.photos/seed/startup-tech-stack/900/600",
    title: "How to Choose the Right Tech Stack for Your Startup",
    excerpt:
      "The best tech stack isn't the trendiest one — it's the one your team can ship and maintain without burning out.",
    metaDescription:
      "A framework for choosing a tech stack for your startup based on team skills, hiring pool, and how fast you need to ship — not just what's trending.",
    category: BLOG_CATEGORIES.WEB,
    date: "2026-04-10",
    readTime: "6 min read",
    emoji: "🧩",
    author: { name: "Stackwise Team", initials: "SS", role: "Engineering" },
    tags: ["Startups", "Architecture"],
    content: [
      {
        type: "paragraph",
        text: "Founders often ask us which stack is 'best.' The honest answer: the best stack is the one that lets your team ship reliably, not the one with the most hype on tech Twitter.",
      },
      {
        type: "heading",
        id: "questions",
        text: "Ask these questions first",
      },
      {
        type: "list",
        items: [
          "What does your team (or the team you'll hire) already know well?",
          "How fast do you need to validate the idea?",
          "Will this need to scale to millions of users, or hundreds for now?",
          "What's your budget for infrastructure and ongoing maintenance?",
        ],
      },
      {
        type: "heading",
        id: "recommendation",
        text: "Our default recommendation for most startups",
      },
      {
        type: "paragraph",
        text: "For most early-stage products, a Node.js/Express or Laravel backend with a React frontend and MongoDB or MySQL gives you a good balance of speed, hiring pool, and ecosystem support — without locking you into anything exotic.",
      },
      {
        type: "paragraph",
        text: "Optimize for shipping and learning fast in year one. You can always re-architect a specific bottleneck later — you can't get back the months lost debating the 'perfect' stack.",
      },
    ],
  },
  {
    slug: "beginners-guide-to-rest-api-security",
    image: "https://picsum.photos/seed/api-security/900/600",
    title: "A Beginner's Guide to REST API Security",
    excerpt:
      "Most API breaches don't come from exotic exploits — they come from missing the basics. Here's the checklist we run on every project.",
    metaDescription:
      "A practical checklist for securing REST APIs — authentication, rate limiting, input validation, and the basics most teams miss.",
    category: BLOG_CATEGORIES.BACKEND,
    date: "2026-03-22",
    readTime: "8 min read",
    emoji: "🔐",
    author: { name: "Stackwise Team", initials: "SS", role: "Backend" },
    tags: ["APIs", "Security", "Node.js"],
    content: [
      {
        type: "paragraph",
        text: "Most API security incidents we've seen weren't caused by clever attacks — they were caused by basics that got skipped under deadline pressure. This is the checklist we run on every backend project.",
      },
      {
        type: "heading",
        id: "auth",
        text: "1. Authentication & authorization",
      },
      {
        type: "paragraph",
        text: "Use signed JWTs or session tokens with a short expiry, and always check permissions on the server — never trust a role or ID sent from the client.",
      },
      {
        type: "heading",
        id: "validation",
        text: "2. Input validation on every endpoint",
      },
      {
        type: "paragraph",
        text: "Validate and sanitize every input, even from authenticated users. This is your main defense against injection attacks and malformed data corrupting your database.",
      },
      {
        type: "heading",
        id: "rate-limiting",
        text: "3. Rate limiting",
      },
      {
        type: "paragraph",
        text: "Rate limit login and password-reset endpoints especially — they're the most common target for brute-force attempts.",
      },
      {
        type: "heading",
        id: "https-secrets",
        text: "4. HTTPS everywhere, secrets never in code",
      },
      {
        type: "list",
        items: [
          "Force HTTPS on every environment, including staging",
          "Keep API keys and secrets in environment variables, never in the repo",
          "Rotate secrets whenever a team member with access leaves",
        ],
      },
      {
        type: "heading",
        id: "logging",
        text: "5. Log and monitor, don't just build and forget",
      },
      {
        type: "paragraph",
        text: "Log failed auth attempts and unusual traffic patterns. The earlier you catch a problem, the smaller the damage.",
      },
    ],
  },
];
