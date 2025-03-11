import { PropertyHomes } from '@/types/properyHomes'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const PropertyCard: React.FC<{ item: PropertyHomes }> = ({ item }) => {
  const { src, name, location, rate, beds, baths, area } = item
  return (
    <div>
      <div className='relative rounded-2xl border border-black/10 dark:border-white/30 group hover:shadow-lg dark:hover:shadow-white/20'>
        <div className='overflow-hidden rounded-t-2xl'>
          <Link href={'#'}>
            <Image
              src={src}
              alt={name}
              width={440}
              height={300}
              className='w-full rounded-t-2xl group-hover:brightness-50 group-hover:scale-125 transition delay-75'
            />
          </Link>
          <div className='absolute top-6 right-6 p-4 bg-white rounded-full hidden group-hover:block'>
            <Icon
              icon={'solar:arrow-right-linear'}
              width={24}
              height={24}
              className='text-black'
            />
          </div>
        </div>
        <div className='p-6'>
          <div className='flex flex-col mobile:flex-row gap-5 mobile:gap-0 justify-between mb-6'>
            <div>
              <Link href={'#'}>
                <h3 className='text-xl font-medium text-black dark:text-white group-hover:text-primary'>
                  {name}
                </h3>
              </Link>
              <p className='text-base font-normal text-black/50 dark:text-white/50'>
                {location}
              </p>
            </div>
            <div>
              <button className='text-base font-normal text-primary px-5 py-2 rounded-full bg-primary/10'>
                ${rate}
              </button>
            </div>
          </div>
          <div className='flex'>
            <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8'>
              <Icon icon={'solar:bed-linear'} width={20} height={20} />
              <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                {beds} Bedrooms
              </p>
            </div>
            <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8'>
              <Icon icon={'solar:bath-linear'} width={20} height={20} />
              <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                {baths} Bathrooms
              </p>
            </div>
            <div className='flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8'>
              <Icon
                icon={'lineicons:arrow-all-direction'}
                width={20}
                height={20}
              />
              <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                {area}m<sup>2</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
