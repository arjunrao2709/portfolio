import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Arjun Rao — Design Leader & Strategist',
  description:
    '10+ years leading design across enterprise, startup, and everything in between — building teams, products, and the systems that make both great.',
  openGraph: {
    title: 'Arjun Rao — Design Leader & Strategist',
    description:
      'Design leader, strategist, and builder. Crafting products and teams that scale.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="font-sans antialiased bg-bg-dark text-text-primary">
        {children}
      </body>
    </html>
  )
}
