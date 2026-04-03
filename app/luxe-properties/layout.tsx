import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: { absolute: "Luxury Properties for Sale in Pune | PropertyDrone Realty" },
  description:
    "Explore premium luxury properties in Pune. Verified listings by top developers in Baner, Kharadi & Viman Nagar.",
  keywords: [
    "luxury properties Pune",
    "premium flats Pune",
    "luxury homes Baner",
    "verified listings Pune",
    "buy luxury property Pune",
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
