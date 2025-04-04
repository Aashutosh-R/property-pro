import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section>
      <div className='bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white dark:to-badge/10 overflow-hidden'>
        <div className='relative container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68'>
          <div className='relative text-white dark:text-badge text-center md:text-start z-10'>
            <p className='text-inherit text-xm font-medium'>Palm springs, CA</p>
            <h1 className='text-inherit text-6xl sm:text-9xl font-semibold -tracking-wider md:max-w-45p mt-4 mb-6'>
              Futuristic Haven
            </h1>
            <div className='flex flex-col xs:flex-row justify-center md:justify-start gap-4'>
              <Link href={'/ContactUs'}>
                <button className='px-8 py-4 border border-white dark:border-badge bg-white dark:bg-badge text-black dark:text-white text-base font-semibold rounded-full hover:cursor-pointer hover:bg-transparent hover:text-white dark:hover:border-white'>
                  Get in touch
                </button>
              </Link>
              <button className='px-8 py-4 border border-white dark:border-black  bg-transparent text-white dark:text-black text-base font-semibold rounded-full hover:cursor-pointer hover:bg-white hover:text-black'>
                View Details
              </button>
            </div>
          </div>
          <div className='hidden md:block absolute -top-2 -right-68'>
            <Image
              src={'/images/hero/heroBanner.png'}
              alt='heroImg'
              width={1082}
              height={1016}
              priority={false}
            />
          </div>
          <div className='md:absolute bottom-0 -right-68 bg-white dark:bg-badge py-12 px-8 mobile:px-16 md:pl-16 md:pr-[295px] rounded-2xl md:rounded-none md:rounded-tl-2xl mt-24'>
            <div className='grid grid-cols-2 sm:grid-cols-4 md:flex gap-16 md:gap-24 sm:text-center dark:text-white text-black'>
              <div className='flex flex-col sm:items-center gap-3'>
                <Icon icon={'solar:bed-linear'} width={32} height={32} />
                <p className='text-sm sm:text-base font-normal text-inherit'>
                  4 Bedrooms
                </p>
              </div>
              <div className='flex flex-col sm:items-center gap-3'>
                <Icon icon={'solar:bath-linear'} width={32} height={32} />
                <p className='text-sm sm:text-base font-normal text-inherit'>
                  4 Restroom
                </p>
              </div>
              <div className='flex flex-col sm:items-center gap-3'>
                <Icon
                  icon={'hugeicons:car-parking-02'}
                  width={32}
                  height={32}
                />
                <p className='text-sm sm:text-base font-normal text-inherit'>
                  Parking space
                </p>
              </div>
              <div className='flex flex-col sm:items-center gap-3'>
                <p className='text-2xl sm:text-3xl font-medium text-inherit'>
                  $4,750,000
                </p>
                <p className='text-sm sm:text-base font-normal text-black/50 dark:text-white/50'>
                  For selling price
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
