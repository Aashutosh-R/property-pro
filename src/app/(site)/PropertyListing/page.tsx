import { propertyHomes } from '@/app/api/propertyhomes'
import PropertyCard from '@/components/Home/Properties/Card/Card'
import { Icon } from '@iconify/react'

const PropertyListing: React.FC = () => {
  return (
    <>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28'>
        <div className='mb-16'>
          <div className='flex gap-2.5 items-center justify-center'>
            <span>
              <Icon
                icon={'ph:house-simple-fill'}
                width={20}
                height={20}
                className='text-primary'
              />
            </span>
            <p className='text-base font-semibold text-badge dark:text-white/90'>
              Properties
            </p>
          </div>
          <div className='text-center'>
            <h3 className='text-40 sm:text-52 font-medium text-black dark:text-white tracking-tighter leading-12 mobile:my-4 my-2'>
              Discover inspiring designed homes.
            </h3>
            <p className='text-xm font-normal text-black/50 dark:text-white/50'>
              Experience elegance and comfort with our exclusive luxury villas,
              designed for sophisticated living.
            </p>
          </div>
        </div>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
            {propertyHomes.map((item, index) => (
              <div key={index}>
                <PropertyCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PropertyListing
