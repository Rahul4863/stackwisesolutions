import { notFound } from "next/navigation";
import { INDUSTRIES, SITE_INFO } from "@/data/constants";
import IndustryDetailContent from "@/components/IndustryDetailContent";

// Pre-render every industry page at build time (SSG) for fast, fully
// crawlable HTML.
export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  if (!industry) {
    return {
      title: "Industry Not Found",
      description: "The industry you're looking for doesn't exist or may have moved.",
    };
  }

  const url = `${SITE_INFO.baseUrl}/industry/${industry.slug}`;
  const description = industry.metaDescription || industry.desc;
  const keywords = [
    industry.title,
    `${industry.title} software development`,
    `${industry.title} web development`,
    ...(industry.useCases || []),
  ];

  return {
    title: industry.title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${industry.title} | ${SITE_INFO.name}`,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.title} | ${SITE_INFO.name}`,
      description,
    },
  };
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${industry.title} Software Development`,
    name: `${industry.title} Solutions | ${SITE_INFO.name}`,
    description: industry.metaDescription || industry.desc,
    provider: {
      "@type": "Organization",
      name: SITE_INFO.name,
      email: SITE_INFO.email,
      telephone: SITE_INFO.phone,
      address: SITE_INFO.address,
    },
    areaServed: "Worldwide",
    audience: {
      "@type": "Audience",
      audienceType: industry.title,
    },
    ...(industry.useCases
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: industry.title,
            itemListElement: industry.useCases.map((u) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: u },
            })),
          },
        }
      : {}),
    ...(industry.faqs
      ? {
          mainEntity: industry.faqs.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_INFO.baseUrl}/industries` },
      {
        "@type": "ListItem",
        position: 3,
        name: industry.title,
        item: `${SITE_INFO.baseUrl}/industry/${industry.slug}`,
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
      <IndustryDetailContent slug={industry.slug} />
    </>
  );
}
