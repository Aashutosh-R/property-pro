import { Icon } from '@iconify/react'

const Desc: React.FC = () => {
  return (
    <>
      <div className='absolute bottom-10 left-10'>
        <p className='text-white text-3xl font-medium mb-1'>Luxury villas</p>
        <p className='text-white/80 text-xm font-normal'>
          Experience elegance and comfort with our exclusive luxury villas,
          designed for sophisticated living.
        </p>
      </div>
      <div className='absolute top-6 right-6 p-4 bg-white rounded-full'>
        <Icon icon={'solar:arrow-right-linear'} width={24} height={24} className='text-black' />
      </div>
    </>
  )
}

export default Desc
