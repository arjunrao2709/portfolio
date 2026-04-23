import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  style: ['normal', 'italic'],
  weight: ['300', '400', '700', '900'],
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Arjun Rao — Design Leader',
  description:
    'Arjun Rao is a design leader building products and teams that shape how people live and work.',
  openGraph: {
    title: 'Arjun Rao — Design Leader',
    description: 'Design leader, strategist, and builder. 10+ years crafting products and teams that matter.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased bg-canvas text-ink">
        {children}
      </body>
    </html>
  )
}
