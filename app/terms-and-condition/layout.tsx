import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Terms & Conditions | PropertyDrone Realty Pune' },
  description:
    'Read the terms and conditions for using PropertyDrone Realty\'s website and real estate services in Pune.',
  keywords: [
    'terms and conditions PropertyDrone',
    'real estate terms Pune',
    'PropertyDrone Realty terms',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/terms-and-condition',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsConditionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
