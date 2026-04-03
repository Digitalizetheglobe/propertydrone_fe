import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Plots for Sale in Pune | NA & Residential Plots' },
  description:
    'Explore RERA-approved plots in Pune\'s top areas like Baner, Wakad & Hinjawadi. Get expert assistance for safe investment.',
  keywords: [
    'plots for sale Pune',
    'NA plots Pune',
    'residential plots Pune',
    'RERA approved plots Pune',
    'land for sale Pune',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/plots',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PlotsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
