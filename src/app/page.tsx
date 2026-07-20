import Hero from '@/components/sections/Hero'
import Ticker from '@/components/sections/Ticker'
import About from '@/components/sections/About'
import WhyCards from '@/components/sections/WhyCards'
import Directors from '@/components/sections/Directors'
import Quotes from '@/components/sections/Quotes'
import Enquiry from '@/components/sections/Enquiry'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <WhyCards />
      <Directors />
      <Quotes />
      <Enquiry />
    </>
  )
}
