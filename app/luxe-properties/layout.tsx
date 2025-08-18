import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: { absolute: "Looking For Properties in Pune? Find out Here" },
  description:
    "Explore the best residential and commercial properties in Pune with expert guidance from Property Drone Realty. Verified listings, great deals & full support.",
  keywords: [
    "residential properties Pune",
    "commercial properties Pune",
    "property listings Pune",
    "verified flats Pune",
    "buy property Pune",
  ],
  alternates: {
    canonical: "https://propertydronerealty.com/luxe-properties",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LuxePropertiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Properties in Pune",
    url: "https://propertydronerealty.com/luxe-properties",
    description:
      "Explore residential and commercial properties in Pune with Property Drone Realty. Verified listings with expert support.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      {children}
    </>
  );
}
