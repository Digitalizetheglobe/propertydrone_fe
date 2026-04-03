import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Compare Properties in Pune | PropertyDrone Realty' },
  description:
    'Compare multiple properties side by side in Pune. Check price, location, amenities & features to make the best buying decision.',
  keywords: [
    'compare properties Pune',
    'property comparison Pune',
    'best property deals Pune',
    'PropertyDrone compare',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/compareproperties',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ComparePropertiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
