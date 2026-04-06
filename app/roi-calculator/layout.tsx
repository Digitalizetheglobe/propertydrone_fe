import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Real Estate ROI Calculator' },
  description:
    'Calculate return on investment for your Pune property. Make smarter real estate investment decisions with our free ROI tool.',
  keywords: [
    'ROI calculator real estate',
    'property ROI calculator Pune',
    'real estate investment returns',
    'return on investment property',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/roi-calculator',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RoiCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
