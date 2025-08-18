import type { Metadata } from "next";
import Script from "next/script";
import React from "react";

export const metadata: Metadata = {
  title: "Real estate blogs",
  description:
    "Explore the PropertyDrone Realty blog for expert insights and tips from Pune's leading real estate agency. Get the latest updates on market trends & property advice.",
  keywords: [
    "real estate blog Pune",
    "property tips",
    "real estate market trends India",
    "expert property insights",
  ],
  alternates: {
    canonical: "https://propertydronerealty.com/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Real Estate Blog",
    url: "https://propertydronerealty.com/blog",
    description:
      "Real estate insights, market trends, and expert property advice from Pune’s top real estate agency.",
    blogPost: [],
  };

  return (
    <>
      {children}
      <Script id="blog-json-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
    </>
  );
}
