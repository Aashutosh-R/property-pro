import { blog } from '@/app/api/blog'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const Blog: React.FC = () => {
  return (
    <section className='py-28'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end gap-7 lg:gap-0 mb-10'>
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
                Blog
              </p>
            </div>
            <h2 className='text-40 sm:text-52 font-medium text-black dark:text-white'>
              Real estate insights
            </h2>
            <p className='text-xm font-normal text-black/50 dark:text-white/50'>
              Stay ahead in the property market with expert advice and updates
            </p>
          </div>
          <div>
            <button className='px-8 py-4 rounded-full border border-black dark:border-white bg-black dark:bg-white hover:bg-transparent text-white dark:text-black hover:text-black dark:hover:text-white'>
              Read all articles
            </button>
          </div>
        </div>
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
          {blog.map((item, index) => (
            <div
              key={index}
              className='flex flex-col gap-8 group hover:cursor-pointer'>
              <div className='rounded-2xl overflow-hidden'>
                <Image
                  src={item.src}
                  alt={item.title}
                  width={440}
                  height={287}
                  className='rounded-2xl w-full group-hover:brightness-75 group-hover:scale-125 transition delay-150'
                />
              </div>
              <div className='flex justify-between items-center'>
                <div>
                  <Link href={'#'}>
                    <h6 className='text-xl font-medium text-black dark:text-white group-hover:text-primary'>
                      {item.title}
                    </h6>
                  </Link>
                  <p className='text-base font-normal text-black/50 dark:text-white/50'>
                    {item.date}
                  </p>
                </div>
                <div>
                  <button className='px-5 py-2.5 bg-black/5 dark:bg-white/50 rounded-full text-sm font-semibold text-black dark:text-white'>
                    {item.category}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
