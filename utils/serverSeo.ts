import { Metadata } from "next";

const SEO_CONFIG: Record<string, Metadata> = {
  compareproperties: {
    title: "Compare Properties | Top Real Estate Agency Pune",
    description: "Compare multiple properties side by side to find your perfect home. View detailed specifications, prices, and features of luxury properties in Pune.",
    keywords: [
      "compare properties Pune",
      "property comparison",
      "real estate comparison",
      "luxury homes comparison Pune",
    ],
  },
};

export async function generateMetadata(page: string): Promise<Metadata> {
  return SEO_CONFIG[page] || {
    title: "Top Real Estate Agency Pune",
    description: "Top real estate agency in Pune offering luxury homes, premium flats & exclusive properties.",
  };
}

