import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Exora Import & Export — Threading The World Together',
  description: 'Quality garment accessories for the global fashion market — sourced in India, delivered anywhere fashion is made. Exora Import and Export, Noida.',
  metadataBase: new URL('https://www.exoraimportexport.com'),
  openGraph: {
    title: 'Exora Import & Export',
    description: 'Quality garment accessories for the global fashion market.',
    url: 'https://www.exoraimportexport.com',
    siteName: 'Exora Import & Export',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Exora Import & Export' }],
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ paddingTop: 'var(--nav-h)' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
