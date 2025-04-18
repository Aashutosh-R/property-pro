import Blog from '@/components/Home/Blog'
import Faq from '@/components/Home/FAQ'
import FeaturedProperty from '@/components/Home/FeaturedProperty'
import Hero from '@/components/Home/Hero'
import PromoVideo from '@/components/Home/PromoVideo'
import Properties from '@/components/Home/Properties'
import Services from '@/components/Home/Services'
import Testimonials from '@/components/Home/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Properties />
      <FeaturedProperty />
      <Testimonials />
      <Blog />
      <PromoVideo />
      <Faq />
    </main>
  )
}
