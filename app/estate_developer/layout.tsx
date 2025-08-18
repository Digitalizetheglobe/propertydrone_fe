import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: { absolute: "TOP Real estate developers in Pune" },
  description:
    "Explore top real estate developers in Pune including ANP Corp, Majestique Landmark, Solitaire, Skyi Developers & more. Find premium projects across the city.",
  keywords: [
    "real estate developers Pune",
    "ANP Corp",
    "Majestique Landmark",
    "Solitaire developers",
    "Skyi projects Pune",
  ],
  alternates: {
    canonical: "https://propertydronerealty.com/estate_developer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EstateDeveloperLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top Real Estate Developers in Pune",
    url: "https://propertydronerealty.com/estate_developer",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ANP Corp" },
      { "@type": "ListItem", position: 2, name: "Majestique Landmark" },
      { "@type": "ListItem", position: 3, name: "Solitaire" },
      { "@type": "ListItem", position: 4, name: "Skyi Developers" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {children}
    </>
  );
}
