import { SITE_INFO } from "@/data/constants";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import WorkProcess from "@/components/WorkProcess";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Web, App & Digital Growth Studio",
  description: `${SITE_INFO.name} builds custom websites, mobile apps, APIs, and digital marketing campaigns for growing businesses. Get a free consultation.`,
  alternates: {
    canonical: SITE_INFO.baseUrl,
  },
  openGraph: {
    title: `${SITE_INFO.name} — Web, App & Digital Growth Studio`,
    description: SITE_INFO.tagline,
    url: SITE_INFO.baseUrl,
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_INFO.name,
    description: SITE_INFO.tagline,
    email: SITE_INFO.email,
    telephone: SITE_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_INFO.address,
    },
    url: SITE_INFO.baseUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Stats />
      <Portfolio />
      <Services />
      <WorkProcess />
      <Industries />
      <Testimonials />
      <Contact />
    </>
  );
}
