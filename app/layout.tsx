import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from './context/AuthContext';
import LayoutWithConditionalHeader from "./components/LayoutWithConditionalHeader";
import MainHeader from "./components/mainHeader";
import ScrollButton from "./components/scrollbutton";
import WhatsAppPopup from "./components/whatsapp";
import Mainfooter from "./components/mainfooter";
import Script from 'next/script'; // ✅ import Script

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Top Real Estate Agency Pune ",
    default: "Top Real Estate Agency Pune",
  },
  description:
    "Top real estate agency in Pune offering luxury homes, premium flats & exclusive properties. Buy your dream home with expert advice and trusted service.",
  keywords: [
    "real estate agency Pune",
    "luxury homes Pune",
    "premium flats Pune",
    "buy property Pune",
  ],
  alternates: {
    canonical: "https://propertydronerealty.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="xU0LOgEZeAf6GrMMBl-yH6UoRUIkGoRZxUdV1e8S988"
        />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <Script
          id="ld-json-realestate"
          type="application/ld+json"
          strategy="afterInteractive"
        >{`{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Property Drone Realty",
  "url": "https://propertydronerealty.com/",
  "description": "Top real estate agency in Pune offering luxury homes, premium flats & exclusive properties.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressRegion": "MH",
    "addressCountry": "IN"
  },
  "telephone": "+91 9561477575 ",
  "email": "info@propertydronerealty.com"
}`}</Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* ✅ Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GNPNM76X0Z"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GNPNM76X0Z');
          `}
        </Script>

        <AuthProvider>
          <LayoutWithConditionalHeader>{children}</LayoutWithConditionalHeader>
          <WhatsAppPopup />
          <ScrollButton />
        </AuthProvider>
      </body>
    </html>
  );
}
