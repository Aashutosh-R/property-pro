import { Icon } from '@iconify/react'
import Image from 'next/image'
import Desc from './Description/Desc'
import Link from 'next/link'

const Services: React.FC = () => {
  return (
    <section>
      <div className='relative container max-w-8xl mx-auto my-28 px-5 2xl:px-0 overflow-hidden xl:overflow-visible'>
        <div className='absolute -left-96 -top-24'>
          <Image
            src={'/images/services/serviceSec-shape.png'}
            alt='shape'
            width={1011}
            height={1053}
          />
        </div>
        <div>
          <div className='relative grid grid-cols-5 mobile:grid-cols-12 gap-10'>
            <div className='col-span-8 mobile:col-span-12 xl:col-span-6'>
              <div className='flex gap-2.5 items-center mb-3'>
                <span>
                  <Icon
                    icon={'ph:house-simple-fill'}
                    width={20}
                    height={20}
                    className='text-primary'
                  />
                </span>
                <p className='text-base font-semibold text-badge dark:text-white/90'>
                  Categories
                </p>
              </div>
              <h2 className='text-3xl sm:text-5xl font-medium text-black dark:text-white max-w-85p sm:leading-16 tracking-tight mb-2'>
                Explore best properties with expert services.
              </h2>
              <p className='text-xm font-normal text-black/50 dark:text-white/50 tracking-tight leading-7 max-w-85p mb-8'>
                Discover a diverse range of premium properties, from luxurious
                apartments to spacious villas, tailored to your needs.
              </p>
              <button className='px-8 py-4 rounded-full border border-primary bg-primary text-base font-semibold text-white'>
                View properties
              </button>
            </div>
            <div className='col-span-8 mobile:col-span-12 xl:col-span-6 relative group hover:grayscale-25 hover:cursor-pointer'>
              <Link href={'#'}>
                <Image
                  src={'/images/services/service-img1.png'}
                  alt='img1'
                  width={680}
                  height={386}
                  className='rounded-2xl w-full'
                />
                <div className='hidden group-hover:block'>
                  <Desc />
                </div>
              </Link>
            </div>
            <div className='col-span-8 mobile:col-span-12 xl:col-span-6 relative group hover:grayscale-25 hover:cursor-pointer'>
              <Link href={'#'}>
                <Image
                  src={'/images/services/service-img2.png'}
                  alt='img1'
                  width={680}
                  height={386}
                  className='rounded-2xl w-full'
                />
                <div className='hidden group-hover:block'>
                  <Desc />
                </div>
              </Link>
            </div>
            <div className='col-span-8 mobile:col-span-6 xl:col-span-3 relative group hover:grayscale-25 hover:cursor-pointer'>
              <Link href={'#'}>
                <Image
                  src={'/images/services/service-img3.png'}
                  alt='img1'
                  width={680}
                  height={386}
                  objectFit='cover'
                  className='rounded-2xl w-full'
                />
                <div className='hidden group-hover:block'>
                  <Desc />
                </div>
              </Link>
            </div>
            <div className='col-span-8 mobile:col-span-6 xl:col-span-3 relative group hover:grayscale-25 hover:cursor-pointer'>
              <Link href={'#'}>
                <Image
                  src={'/images/services/service-img4.png'}
                  alt='img1'
                  width={680}
                  height={386}
                  className='rounded-2xl'
                />
                <div className='hidden group-hover:block'>
                  <Desc />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
