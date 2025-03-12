'use client'

import { amenities, featuredProprty } from '@/app/api/featuredproperty'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const FeaturedProperty: React.FC = () => {
  return (
    <section className='py-28'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='grid items-center gap-10 grid-cols-1 xl:grid-cols-2'>
          <div>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}>
              <CarouselContent>
                {featuredProprty.map((item, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={item.src}
                      alt={item.src}
                      width={680}
                      height={645}
                      className='w-full rounded-2xl h-full'
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div>
            <div>
              <div className='flex gap-2.5 items-center'>
                <span>
                  <Icon
                    icon={'ph:house-simple-fill'}
                    width={20}
                    height={20}
                    className='text-primary'
                  />
                </span>
                <p className='text-base font-semibold text-badge dark:text-white/90'>
                  Featured property
                </p>
              </div>
              <h2 className='text-40 sm:text-52 font-medium leading-16 text-black dark:text-white'>
                Modern luxe villa
              </h2>
              <div className='flex items-center gap-2.5 text-black/50 dark:text-white/50 mb-6'>
                <Icon icon={'solar:map-point-linear'} width={24} height={24} />
                <p className='text-base font-normal'>20 S Aurora Ave, Miami</p>
              </div>
              <p className='text-xm font-normal text-black/50 dark:text-white/50 mb-10'>
                Experience luxury living at modern luxe villa, located at 20 s
                aurora ave, miami. priced at $1,650,500, this 560 ft² smart home
                offers 4 bedrooms, 3 bathrooms, and spacious living areas. enjoy
                energy efficiency, natural light, security systems, outdoor
                spaces, and 2 bar areas—perfect for 8+ guests. Built in 2025
              </p>
              <div className='text-black dark:text-white grid grid-cols-1 mobile:grid-cols-2  gap-10 mb-10'>
                {amenities.map((item, index) => (
                  <div key={index} className='flex items-center gap-6'>
                    <div className='bg-gray-100 dark:bg-white/20 p-3 rounded-sm'>
                      <Icon icon={item.icon} width={24} height={24} />
                    </div>
                    <h6 className='text-xm font-normal'>{item.desc}</h6>
                  </div>
                ))}
              </div>
              <div className='flex items-center gap-10'>
                <button className='text-base font-semibold text-white bg-primary px-5 sm:px-8 py-3 sm:py-4 rounded-full'>
                  Get in touch
                </button>
                <div>
                  <h4 className='text-2xl sm:text-3xl font-medium text-black dark:text-white'>
                    $1,650,500
                  </h4>
                  <p className='text-sm font-normal text-black/50 dark:text-white/50'>
                    Discounted Price
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperty
