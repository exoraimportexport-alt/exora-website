import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.exoraimportexport.com'
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/pages/about-us`, lastModified: new Date() },
    { url: `${base}/pages/contact-us`, lastModified: new Date() },
  ]
}
