import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Exora Import & Export',
  description: 'Exora is an import and export company currently focused on garment accessories.',
  metadataBase: new URL('https://www.exoraimportexport.com'),
  alternates: { canonical: 'https://www.exoraimportexport.com' },
  openGraph: {
    title: 'Exora Import & Export',
    description: 'Exora is an import and export company currently focused on garment accessories.',
    url: 'https://www.exoraimportexport.com',
    siteName: 'Exora Import & Export',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Exora Import and Export' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Exora Import & Export', description: 'Exora is an import and export company currently focused on garment accessories.', images: ['/og-image.jpg'] },
  icons: { icon: [{ url: '/favicon-16.png', sizes: '16x16', type: 'image/png' }, { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' }, { url: '/favicon.ico' }], apple: '/apple-touch-icon.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
