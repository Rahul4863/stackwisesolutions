import { SERVICES, SITE_INFO } from "@/data/constants";
import ServicesList from "@/components/ServicesList";

export const metadata = {
  title: "Services",
  description: `${SITE_INFO.name} offers web development, UI/UX, backend engineering, mobile apps, API integration, DevOps, graphic design, and digital marketing — all under one roof.`,
  keywords: SERVICES.map((s) => s.title),
  alternates: {
    canonical: `${SITE_INFO.baseUrl}/services`,
  },
  openGraph: {
    title: `Services | ${SITE_INFO.name}`,
    description: `Web development, UI/UX, backend engineering, mobile apps, API integration, DevOps, graphic design, and digital marketing.`,
    url: `${SITE_INFO.baseUrl}/services`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Services | ${SITE_INFO.name}`,
    description: `Web development, UI/UX, backend engineering, mobile apps, API integration, DevOps, graphic design, and digital marketing.`,
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Services",
    url: `${SITE_INFO.baseUrl}/services`,
    description: metadata.description,
    hasPart: SERVICES.map((s) => ({
      "@type": "Service",
      name: s.title,
      url: `${SITE_INFO.baseUrl}/services/${s.slug}`,
      description: s.metaDescription || s.desc,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_INFO.baseUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_INFO.baseUrl}/services` },
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
      <ServicesList />
    </>
  );
}
