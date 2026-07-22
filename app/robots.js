import { SITE_INFO } from "@/data/constants";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_INFO.baseUrl}/sitemap.xml`,
  };
}
