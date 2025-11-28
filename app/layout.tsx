import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lincoln Tech Demo Portal | Advanced UI/UX Showcase',
  description: 'Experience cutting-edge web design and animations. A futuristic demo portal showcasing advanced UI/UX capabilities.',
  keywords: 'web design, UI/UX, animations, Next.js, React, frontend development',
  authors: [{ name: 'Lincoln Tech' }],
  openGraph: {
    title: 'Lincoln Tech Demo Portal',
    description: 'Advanced UI/UX Showcase',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body>
        <SmoothScroll>
          <CustomCursor />
          <Navigation />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}

