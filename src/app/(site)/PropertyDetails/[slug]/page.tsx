'use client'
import { propertyHomes } from '@/app/api/propertyhomes'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function PropertyDetails() {
  const { slug } = useParams()

  const item = propertyHomes.find((item) => item.slug === slug)

  return (
    <>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28'>
        <div className='mb-16'>
          <div className='flex lg:flex-row flex-col gap-10 lg:items-center justify-between'>
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
              <div>
                <h3 className='text-40 sm:text-52 font-medium text-black dark:text-white tracking-tighter leading-11 mobile:my-4 my-2'>
                  {item?.name}
                </h3>
                <div className='flex items-center gap-2.5 text-black/50 dark:text-white/50'>
                  <Icon icon={'ph:map-pin'} width={24} height={24} />
                  <p className='text-base font-normal'>{item?.location}</p>
                </div>
              </div>
            </div>
            <div>
              <div className='flex'>
                <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8'>
                  <Icon icon={'solar:bed-linear'} width={20} height={20} />
                  <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                    {item?.beds} Bedrooms
                  </p>
                </div>
                <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8'>
                  <Icon icon={'solar:bath-linear'} width={20} height={20} />
                  <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                    {item?.baths} Bathrooms
                  </p>
                </div>
                <div className='flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8'>
                  <Icon
                    icon={'lineicons:arrow-all-direction'}
                    width={20}
                    height={20}
                  />
                  <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                    {item?.area}m<sup>2</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-16'>
          <div className='grid mobile:grid-cols-12 gap-10'>
            <div className='mobile:col-span-12 md:col-span-8 mobile:row-span-2'>
              <Image
                src={`${item?.src}`}
                alt={`${item?.name}`}
                width={920}
                height={540}
                className='rounded-2xl h-full'
              />
            </div>
            <div className='mobile:col-span-4 md:col-span-4'>
              <Image
                src={`${item?.src}`}
                alt={`${item?.name}`}
                width={440}
                height={300}
                className='rounded-2xl h-full'
              />
            </div>
            <div className='mobile:col-span-4 md:col-span-2'>
              <Image
                src={`${item?.src}`}
                alt={`${item?.name}`}
                width={208}
                height={200}
                className='rounded-2xl h-full w-full'
              />
            </div>
            <div className='mobile:col-span-4 md:col-span-2'>
              <Image
                src={`${item?.src}`}
                alt={`${item?.name}`}
                width={208}
                height={200}
                className='rounded-2xl h-full w-full'
              />
            </div>
          </div>
        </div>
        <div>
          <div className='grid mobile:grid-cols-12 gap-10'>
            <div className='lg:col-span-8 mobile:col-span-12 col-span-full'>
              <h5 className='text-xl font-medium text-black dark:text-white pb-10'>
                Property details
              </h5>
              <div className='border-y border-black/10 dark:border-white/10 py-10'>
                <div className='flex flex-col gap-10'>
                  <div className='flex gap-4'>
                    <div>
                      <Icon icon={'ph:swimming-pool'} width={32} height={32} />
                    </div>
                    <div>
                      <h6 className='text-xm font-medium text-black dark:text-white'>
                        Poolside bliss
                      </h6>
                      <p className='text-base font-normal text-black/50 dark:text-white/50'>
                        One of the few homes in the area with a private pool.
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div>
                      <Icon
                        icon={'ph:wifi-medium-fill'}
                        width={32}
                        height={32}
                      />
                    </div>
                    <div>
                      <h6 className='text-xm font-medium text-black dark:text-white'>
                        Smart home access
                      </h6>
                      <p className='text-base font-normal text-black/50 dark:text-white/50'>
                        Easily check yourself in with a modern keypad system.
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div>
                      <Icon
                        icon={'ph:battery-charging-vertical-bold'}
                        width={32}
                        height={32}
                      />
                    </div>
                    <div>
                      <h6 className='text-xm font-medium text-black dark:text-white'>
                        Energy efficient
                      </h6>
                      <p className='text-base font-normal text-black/50 dark:text-white/50'>
                        Built in 2025 with sustainable and smart-home features.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='border-b border-black/10 dark:border-white/10 py-10'>
                <div className='text-xm font-normal text-black dark:text-white flex flex-col gap-4'>
                  <p>
                    Nestled in the heart of miami, the modern luxe villa at 20 s
                    aurora ave offers a perfect blend of contemporary elegance
                    and smart-home innovation. priced at $1,650,500, this 560
                    ft² residence features 4 spacious bedrooms, 3 luxurious
                    bathrooms, and expansive living areas designed for comfort
                    and style. built in 2025, the home boasts energy-efficient
                    systems, abundant natural light, and state-of-the-art
                    security features. outdoor spaces include two stylish bar
                    areas, perfect for entertaining 8+ guests. enjoy the
                    ultimate in modern living with premium amenities and a prime
                    location.
                  </p>
                  <p>
                    Step inside to discover an open-concept layout that
                    seamlessly connects the kitchen, dining, and living spaces.
                    the gourmet kitchen is equipped with top-of-the-line
                    appliances, sleek cabinetry, and a large island perfect for
                    casual dining or meal prep. the sunlit living room offers
                    floor-to-ceiling windows, creating a bright and airy
                    atmosphere while providing stunning views of the outdoor
                    space
                  </p>
                  <p>
                    The primary suite serves as a private retreat with a
                    spa-like ensuite bathroom and a spacious walk-in closet.
                    each additional bedroom is thoughtfully designed with
                    comfort and style in mind, offering ample space and modern
                    finishes. the home’s three bathrooms feature high-end
                    fixtures, custom vanities, and elegant tiling.
                  </p>
                  <p>
                    Outdoor living is equally impressive, with a beautifully
                    landscaped backyard, multiple lounge areas, and two fully
                    equipped bar spaces.
                  </p>
                </div>
              </div>
              <div>
                <h3 className='text-xl font-medium py-10'>
                  What this property offers
                </h3>
                <div className='text-base font-normal text-black dark:text-white'>
                  <div className='grid grid-cols-1 mobile:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6'>
                    <div className='flex items-center gap-3'>
                      <Icon
                        icon={'solar:gallery-circle-linear'}
                        width={24}
                        height={24}
                      />
                      <p>Smart home integration</p>
                    </div>
                    <div className='flex items-center gap-3'>
                      <Icon
                        icon={'solar:pie-chart-outline'}
                        width={24}
                        height={24}
                      />
                      <p>Spacious living areas</p>
                    </div>
                    <div className='flex items-center gap-3'>
                      <Icon icon={'solar:tv-outline'} width={24} height={24} />
                      <p>Energy efficiency</p>
                    </div>
                    <div className='flex items-center gap-3'>
                      <Icon
                        icon={'solar:sun-2-outline'}
                        width={24}
                        height={24}
                      />
                      <p>Natural light</p>
                    </div>
                    <div className='flex items-center gap-3'>
                      <Icon
                        icon={'solar:videocamera-outline'}
                        width={24}
                        height={24}
                      />
                      <p>Security systems</p>
                    </div>
                    <div className='flex items-center gap-3'>
                      <Icon
                        icon={'solar:cloud-outline'}
                        width={24}
                        height={24}
                      />
                      <p>Outdoor spaces</p>
                    </div>
                  </div>
                </div>
                <div className='py-10'>
                  <h3 className='text-xl font-medium py-10'>Location</h3>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938779.7831767448!2d71.05098621661072!3d23.20271516446136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82dd003ff749%3A0x359e803f537cea25!2sGANESH%20GLORY%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1715676641521!5m2!1sen!2sin'
                    width='1114'
                    height='477'
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    className='rounded-lg w-full'></iframe>
                </div>
              </div>
            </div>
            <div className='lg:col-span-4 mobile:col-span-12 col-span-full'>
              <div className='bg-primary/10 p-8 rounded-2xl relative overflow-hidden mb-10'>
                <div className='flex flex-col text-center lg:text-start gap-8'>
                  <div>
                    <h4 className='text-3xl font-medium text-black dark:text-white leading-11'>
                      ${item?.rate}
                    </h4>
                    <p className='text-sm font-normal text-black/50 dark:text-white/50'>
                      Discounted price
                    </p>
                  </div>
                  <div>
                    <button className='rounded-full border border-primary bg-primary px-12 py-4 text-white w-full'>
                      Get in touch
                    </button>
                  </div>
                </div>
                <div className='absolute top-5 -right-5'>
                  <Image
                    src={'/images/testimonial/home-shape.png'}
                    alt='home'
                    width={265}
                    height={277}
                  />
                </div>
              </div>
              <div>
                <div className='border border-black/10 dark:border-white/10 rounded-2xl p-5 md:p-10'>
                  <div className='flex flex-col gap-5'>
                    <div>
                      <Icon
                        icon={'fluent:home-empty-20-regular'}
                        width={44}
                        height={44}
                        className='text-primary'
                      />
                    </div>
                    <div>
                      <h4 className='text-xm font-medium text-black dark:text-white'>
                        I found my ideal home in no time! the listings were
                        detailed, the photos were accurate, and the whole
                        process felt seamless. customer service was top-notch,
                        answering all my questions. i will definitely use this
                        platform again in the future!
                      </h4>
                    </div>
                    <div className='flex gap-6 items-center'>
                      <div>
                        <Image
                          src={'/images/testimonial/testimonial1.jpg'}
                          alt='test1'
                          width={80}
                          height={80}
                          className='rounded-2xl'
                        />
                      </div>
                      <div>
                        <h6 className='text-xm font-medium text-black dark:text-white'>
                          Emily & John Smith
                        </h6>
                        <p className='text-base font-normal text-black/40 dark:text-white/40'>
                          Buyer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
