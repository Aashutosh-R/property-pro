'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const Testimonials: React.FC = () => {
  return (
    <section className='pt-28 pb-20 bg-badge'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='mb-9'>
          <div className='flex gap-2.5 items-center'>
            <span>
              <Icon
                icon={'ph:house-simple-fill'}
                width={20}
                height={20}
                className='text-primary'
              />
            </span>
            <p className='text-base font-semibold text-white'>Testimonials</p>
          </div>
          <h2 className='text-52 font-medium text-white'>
            What our clients says
          </h2>
        </div>
        {/* <div className='grid grid-cols-12 gap-10'>
          <div className='col-span-8 content-center'>
            <div className='flex gap-10'>
              <div>
                <Icon
                  icon={'fluent:home-empty-20-regular'}
                  width={44}
                  height={44}
                  className='text-primary'
                />
              </div>
              <div>
                <h4 className='text-3xl font-medium text-white max-w-90p leading-12 mb-8'>
                  I found my ideal home in no time! the listings were detailed,
                  the photos were accurate, and the whole process felt seamless.
                  customer service was top-notch, answering all my questions. i
                  will definitely use this platform again in the future!
                </h4>
                <h6 className='text-xm font-medium text-white mb-1'>
                  Emily & John Smith
                </h6>
                <p className='text-base font-normal text-white/40'>Buyer</p>
              </div>
            </div>
          </div>
          <div className='col-span-4'>
            <Image
              src={'/images/testimonial/testimonial1.jpg'}
              alt='test1'
              width={439}
              height={434}
              className='w-full h-full rounded-2xl'
            />
          </div>
        </div> */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}>
          <CarouselContent>
            <CarouselItem className='grid grid-cols-12 gap-10'>
              <div className='col-span-8 content-center'>
                <div className='flex gap-10'>
                  <div>
                    <Icon
                      icon={'fluent:home-empty-20-regular'}
                      width={44}
                      height={44}
                      className='text-primary'
                    />
                  </div>
                  <div>
                    <h4 className='text-3xl font-medium text-white max-w-90p leading-12 mb-8'>
                      I found my ideal home in no time! the listings were
                      detailed, the photos were accurate, and the whole process
                      felt seamless. customer service was top-notch, answering
                      all my questions. i will definitely use this platform
                      again in the future!
                    </h4>
                    <h6 className='text-xm font-medium text-white mb-1'>
                      Emily & John Smith
                    </h6>
                    <p className='text-base font-normal text-white/40'>Buyer</p>
                  </div>
                </div>
              </div>
              <div className='col-span-4'>
                <Image
                  src={'/images/testimonial/testimonial1.jpg'}
                  alt='test1'
                  width={439}
                  height={434}
                  className='w-full h-full rounded-2xl'
                />
              </div>
            </CarouselItem>
            <CarouselItem className='grid grid-cols-12 gap-10'>
              <div className='col-span-8 content-center'>
                <div className='flex gap-10'>
                  <div>
                    <Icon
                      icon={'fluent:home-empty-20-regular'}
                      width={44}
                      height={44}
                      className='text-primary'
                    />
                  </div>
                  <div>
                    <h4 className='text-3xl font-medium text-white max-w-90p leading-12 mb-8'>
                      I quickly found my dream home! The listings were thorough,
                      the photos were spot-on, and the entire process was
                      smooth. The customer service was outstanding, addressing
                      all my questions with ease. I’ll definitely use this
                      platform again!
                    </h4>
                    <h6 className='text-xm font-medium text-white mb-1'>
                      Sam & Mickay John
                    </h6>
                    <p className='text-base font-normal text-white/40'>Buyer</p>
                  </div>
                </div>
              </div>
              <div className='col-span-4'>
                <Image
                  src={'/images/testimonial/testimonial2.jpg'}
                  alt='test2'
                  width={439}
                  height={434}
                  className='w-full h-full rounded-2xl'
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials
