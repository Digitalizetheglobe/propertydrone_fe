import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Lease Rental Discounting Calculator' },
  description:
    'Calculate LRD value for your commercial property in Pune. Get instant loan estimates against rental income with our free tool.',
  keywords: [
    'LRD calculator',
    'lease rental discounting Pune',
    'commercial property loan',
    'rental income loan Pune',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/lrd-calculator',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function LrdCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
