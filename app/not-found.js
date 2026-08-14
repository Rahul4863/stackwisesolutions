import NotFoundContent from "@/components/NotFoundContent";
import { SITE_INFO } from "@/data/constants";
export const metadata = {
  title: "404 — Page Not Found",
  description: `The page you are looking for doesn't exist or has moved. Explore ${SITE_INFO.name}'s web development, mobile apps, and engineering solutions.`,
  robots: { index: false, follow: false },
};
export default function NotFound() {
  return <NotFoundContent />;
}