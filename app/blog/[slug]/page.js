import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blogs";
import { SITE_INFO } from "@/data/constants";
import BlogPostContent from "@/components/BlogPostContent";

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you're looking for doesn't exist or may have moved.",
    };
  }

  const url = `${SITE_INFO.baseUrl}/blog/${post.slug}`;
  const description = post.metaDescription || post.excerpt;

  return {
    title: post.title,
    description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url,
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: SITE_INFO.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_INFO.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_INFO.baseUrl}/blog/${post.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_INFO.baseUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_INFO.baseUrl}/blogs` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_INFO.baseUrl}/blog/${post.slug}`,
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
      <BlogPostContent slug={post.slug} />
    </>
  );
}
