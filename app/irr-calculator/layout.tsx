import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'IRR Calculator for Real Estate | PropertyDrone Pune' },
  description:
    'Calculate Internal Rate of Return on your property investment in Pune. Free IRR tool for smart real estate planning.',
  keywords: [
    'IRR calculator real estate',
    'internal rate of return property',
    'real estate IRR Pune',
    'property investment planning',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/irr-calculator',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function IrrCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
