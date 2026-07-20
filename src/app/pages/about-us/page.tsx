import About from '@/components/sections/About'
import Ticker from '@/components/sections/Ticker'
import Directors from '@/components/sections/Directors'
import Quotes from '@/components/sections/Quotes'
import Enquiry from '@/components/sections/Enquiry'

export const metadata = { title: 'About Us — Exora Import & Export' }

export default function AboutPage() {
  return (
    <>
      <About />
      <Ticker />
      <div style={{ height: 56 }} />
      <Directors />
      <Quotes />
      <Enquiry />
    </>
  )
}
