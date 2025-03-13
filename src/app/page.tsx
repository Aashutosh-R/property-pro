import Blog from '@/components/Home/Blog'
import FeaturedProperty from '@/components/Home/FeaturedProperty'
import Hero from '@/components/Home/Hero'
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
    </main>
  )
}
