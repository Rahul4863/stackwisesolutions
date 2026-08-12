import { SITE_INFO } from "@/data/constants";
import TechnologiesContent from "@/components/TechnologiesContent";

export const metadata = {
  title: `Technology Stack & Engineering Architecture — ${SITE_INFO.name}`,
  description: `Explore ${SITE_INFO.name}'s battle-tested tech stack including Next.js, React, Node.js, PHP, Laravel, MongoDB, MySQL, PostgreSQL, React Native, and Docker.`,
  alternates: {
    canonical: `${SITE_INFO.baseUrl}/technologies`,
  },
};

export default function TechnologiesPage() {
  return <TechnologiesContent />;
}

