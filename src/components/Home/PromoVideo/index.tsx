'use client'

import Slider from 'react-infinite-logo-slider'

const PromoVideo: React.FC = () => {
  return (
    <section className='py-28'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='relative z-10 h-auto'>
          <video
            className='rounded-2xl brightness-75'
            width='1400'
            height='auto'
            loop
            autoPlay
            muted
            playsInline>
            <source src='/video/promovideo/promoAd.mp4' type='video/mp4' />
          </video>
          <div className='absolute top-1/3 z-20'>
            <div>
              <div className='flex justify-center'>
                <h2 className=' text-xm mobile:text-2xl sm:text-3xl md:text-4xl lg:text-40 xl:text-52 font-medium text-white text-center mb-2 xs:mb-4 md:mb-8 mobile:max-w-85p leading-4 xs:leading-6 mobile:leading-9 sm:leading-12 xl:leading-20'>
                  Enter a realm where exquisite design and timeless luxury come
                  together.
                </h2>
              </div>
              <div className='flex justify-center'>
                <button className='px-4 mobile:px-8 py-2 mobile:py-4 rounded-full bg-white text-black text-xs mobile:text-base font-semibold'>
                  Get in touch
                </button>
              </div>
            </div>
          </div>
          <div className='absolute bottom-0 w-full'>
            <div className='bg-primary mobile:py-2.5 md:py-5 rounded-b-2xl'>
              <Slider
                width='1050px'
                duration={80}
                pauseOnHover={true}
                blurBorders={false}
                blurBorderColor={'#fff'}>
                <Slider.Slide>
                  <div className='flex items-center gap-12'>
                    <div className='w-50 h-[1px] bg-white' />
                    <div>
                      <p className='text-xs mobile:text-sm font-medium text-white'>
                        Browse thousands of listings in prime locations at great
                        prices!
                      </p>
                    </div>
                    <div className='w-50 h-[1px] bg-white' />
                  </div>
                </Slider.Slide>
                <Slider.Slide>
                  <div className='flex items-center gap-12'>
                    <div className='w-50 h-[1px] bg-white' />
                    <div>
                      <p className='text-xs mobile:text-sm font-medium text-white'>
                        Browse thousands of listings in prime locations at great
                        prices!
                      </p>
                    </div>
                    <div className='w-50 h-[1px] bg-white' />
                  </div>
                </Slider.Slide>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoVideo
