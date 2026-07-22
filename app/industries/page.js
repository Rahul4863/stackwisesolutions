import { INDUSTRIES, SITE_INFO } from "@/data/constants";
import IndustriesList from "@/components/IndustriesList";

export const metadata = {
  title: "Industries We Serve",
  description: `${SITE_INFO.name} builds web, mobile, and API-driven products for e-commerce, healthcare, education, real estate, food delivery, travel, logistics, fintech, and media businesses.`,
  keywords: INDUSTRIES.map((i) => i.title),
  alternates: {
    canonical: `${SITE_INFO.baseUrl}/industries`,
  },
  openGraph: {
    title: `Industries We Serve | ${SITE_INFO.name}`,
    description: `Web, mobile, and API-driven products built for e-commerce, healthcare, education, real estate, food delivery, travel, logistics, fintech, and media businesses.`,
    url: `${SITE_INFO.baseUrl}/industries`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Industries We Serve | ${SITE_INFO.name}`,
    description: `Web, mobile, and API-driven products built for businesses across e-commerce, healthcare, education, real estate, travel, logistics, fintech, and media.`,
  },
};

export default function IndustriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Industries We Serve",
    url: `${SITE_INFO.baseUrl}/industries`,
    description: metadata.description,
    hasPart: INDUSTRIES.map((ind) => ({
      "@type": "WebPage",
      name: ind.title,
      url: `${SITE_INFO.baseUrl}/industry/${ind.slug}`,
      description: ind.metaDescription || ind.desc,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_INFO.baseUrl },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_INFO.baseUrl}/industries` },
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
      <IndustriesList />
    </>
  );
}
