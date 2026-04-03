import type { Metadata } from "next";
import Script from "next/script";
import React from "react";

export const metadata: Metadata = {
  title: { absolute: "Real Estate Blog Pune | Tips & Insights | PropertyDrone Realty" },
  description:
    "Read Pune real estate blogs on buying tips, investment strategies, home loans & market trends. Stay informed.",
  keywords: [
    "real estate blog Pune",
    "property buying tips",
    "home loan advice",
    "real estate market trends India",
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
