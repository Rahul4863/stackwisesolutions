import { SITE_INFO } from "@/data/constants";
import { BLOG_POSTS } from "@/data/blogs";
import BlogList from "@/components/BlogList";
export const metadata = {
  title: "Blog",
  description: `Practical guides on web development, mobile apps, and digital marketing from the ${SITE_INFO.name} team.`,
  alternates: {
    canonical: `${SITE_INFO.baseUrl}/blogs`,
  },
  openGraph: {
    title: `Blog | ${SITE_INFO.name}`,
    description: `Practical guides on web development, mobile apps, and digital marketing from the ${SITE_INFO.name} team.`,
    url: `${SITE_INFO.baseUrl}/blogs`,
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_INFO.name} Blog`,
    url: `${SITE_INFO.baseUrl}/blogs`,
    publisher: {
      "@type": "Organization",
      name: SITE_INFO.name,
    },
    blogPost: BLOG_POSTS.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_INFO.baseUrl}/blog/${p.slug}`,
      datePublished: p.date,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogList />
    </>
  );
}
