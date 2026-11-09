import "@fontsource-variable/inter";
import "@fontsource-variable/sora";
import "./styles/base.css";
import "./styles/hero.css";
import "./styles/work.css";
import "./styles/contact-footer.css";
import "./styles/responsive.css";

import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { basePath, siteConfig } from "@/data/site";

const siteOrigin = new URL(siteConfig.url).origin;

export const metadata = {
  metadataBase: new URL(`${siteOrigin}/`),
  title: {
    default: "Nabeel — Frontend Web Developer | React.js & Next.js",
    template: "%s | Nabeel",
  },
  description: siteConfig.description,
  applicationName: "Nabeel Portfolio",
  authors: [{ name: "Nabeel" }],
  creator: "Nabeel",
  publisher: "Nabeel",
  keywords: [
    "Nabeel",
    "Frontend Web Developer",
    "React.js Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Responsive Web Design",
    "Portfolio",
    "Web Developer",
  ],
  category: "technology",
  alternates: {
    canonical: `${basePath}/`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Nabeel — Frontend Web Developer",
    title: "Nabeel — Frontend Web Developer | React.js & Next.js",
    description: siteConfig.description,
    images: [
      {
        url: `${basePath}/og.png`,
        width: 1200,
        height: 630,
        alt: "Nabeel — React.js & Next.js Frontend Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabeel — Frontend Web Developer | React.js & Next.js",
    description: siteConfig.tagline,
    images: [`${basePath}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050208",
  colorScheme: "dark",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    knowsAbout: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Responsive Web Design",
    ],
    sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <Background />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />

        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </body>
    </html>
  );
}
