import { notFound } from "next/navigation";
import { SERVICES, SITE_INFO } from "@/data/constants";
import ServiceDetailContent from "@/components/ServiceDetailContent";

// Pre-render every service page at build time (SSG) for fast, fully
// crawlable HTML.
export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The service you're looking for doesn't exist or may have moved.",
    };
  }

  const url = `${SITE_INFO.baseUrl}/services/${service.slug}`;
  const description = service.metaDescription || service.desc;
  const keywords = [service.title, ...service.subServices, ...service.tools];

  return {
    title: service.title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${service.title} | ${SITE_INFO.name}`,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ${SITE_INFO.name}`,
      description,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: `${service.title} | ${SITE_INFO.name}`,
    description: service.metaDescription || service.desc,
    provider: {
      "@type": "Organization",
      name: SITE_INFO.name,
      email: SITE_INFO.email,
      telephone: SITE_INFO.phone,
      address: SITE_INFO.address,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.subServices.map((sub) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: sub },
      })),
    },
    ...(service.faqs
      ? {
          mainEntity: service.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_INFO.baseUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_INFO.baseUrl}/#services` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${SITE_INFO.baseUrl}/services/${service.slug}`,
      },
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
      <ServiceDetailContent slug={service.slug} />
    </>
  );
}
