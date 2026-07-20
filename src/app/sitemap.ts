import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.exoraimportexport.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://www.exoraimportexport.com/pages/about-us', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.exoraimportexport.com/pages/contact-us', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
