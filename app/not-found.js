import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};
export default function NotFound() {
  return (
    <section className="py-28 px-6 sm:px-10 lg:px-16 2xl:px-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-display font-bold text-white mb-3">
        Page not found
      </h1>
      <p className="text-muted mb-6 max-w-md">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link href="/" className="text-gold font-medium hover:underline">
        ← Back to Home
      </Link>
    </section>
  );
}
