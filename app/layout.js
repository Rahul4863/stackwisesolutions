import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import { SITE_INFO } from "@/data/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_INFO.baseUrl),
  title: {
    default: `${SITE_INFO.name} — Web, App & Digital Growth Studio`,
    template: `%s | ${SITE_INFO.name}`,
  },
  description: `${SITE_INFO.name} builds custom websites, mobile apps, APIs, and digital marketing campaigns for growing businesses.`,
  keywords: [
    "web development agency",
    "cms development",
    "mobile app development company",
    "React Node.js Laravel developer",
    "digital marketing agency Gurugram",
    "custom software development",
    "MERN stack development",
  ],
  authors: [{ name: SITE_INFO.name }],
  creator: SITE_INFO.name,
  publisher: SITE_INFO.name,
  alternates: {
    canonical: SITE_INFO.baseUrl,
  },
  openGraph: {
    type: "website",
    siteName: SITE_INFO.name,
    title: `${SITE_INFO.name} — Web, App & Digital Growth Studio`,
    description: SITE_INFO.tagline,
    url: SITE_INFO.baseUrl,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_INFO.name} — Web, App & Digital Growth Studio`,
    description: SITE_INFO.tagline,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export const viewport = {
  themeColor: "#f7f3eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable} bg-base text-[#1a1611] antialiased font-sans`}>
        <Navbar />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
