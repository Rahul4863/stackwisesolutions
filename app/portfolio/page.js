import { SITE_INFO, PORTFOLIO_ITEMS } from "@/data/constants";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Portfolio & Case Studies | Stackwise Solutions",
  description: `Explore production web applications, AI platforms, mobile apps, and enterprise systems built by ${SITE_INFO.name}. High performance, scalable code, and proven ROI.`,
  alternates: {
    canonical: `${SITE_INFO.baseUrl}/portfolio`,
  },
  openGraph: {
    title: `Portfolio & Case Studies | ${SITE_INFO.name}`,
    description: `Explore production web applications, AI platforms, mobile apps, and enterprise systems built by ${SITE_INFO.name}.`,
    url: `${SITE_INFO.baseUrl}/portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Portfolio & Case Studies | ${SITE_INFO.name}`,
    description: `Explore production web applications, AI platforms, mobile apps, and enterprise systems built by ${SITE_INFO.name}.`,
  },
};

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio & Case Studies",
    url: `${SITE_INFO.baseUrl}/portfolio`,
    description: metadata.description,
    hasPart: PORTFOLIO_ITEMS.map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      headline: p.tagline,
      description: p.desc,
      image: p.image,
      creator: {
        "@type": "Organization",
        name: SITE_INFO.name,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_INFO.baseUrl },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: `${SITE_INFO.baseUrl}/portfolio` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Page Breadcrumb / Hero Header */}
      <section className="pt-32 pb-6 px-4 sm:px-6 lg:px-12 2xl:px-20 bg-gradient-to-b from-panel2/60 via-base to-base border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-muted">
            <Link href="/" className="hover:text-gold transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#1a1611]">Portfolio &amp; Case Studies</span>
          </nav>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:text-[#1a1611] transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>

      <Portfolio />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
}
