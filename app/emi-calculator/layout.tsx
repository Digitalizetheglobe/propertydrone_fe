import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Home Loan EMI Calculator' },
  description:
    'Calculate your home loan EMI instantly. Enter loan amount, interest rate & tenure to plan your property purchase smartly.',
  keywords: [
    'home loan EMI calculator',
    'EMI calculator Pune',
    'property EMI calculator',
    'loan calculator real estate',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/emi-calculator',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function EmiCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
