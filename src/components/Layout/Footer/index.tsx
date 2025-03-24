import { footerLink1, footerLink2 } from '@/app/api/footerlink'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className='bg-badge'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='py-24'>
          <div className='flex flex-col xl:flex-row xl:gap-32 gap-16 xl:items-center pb-14 mb-16 border-b border-white/10'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:gap-10 gap-5'>
              <div>
                <h6 className='text-xm font-medium text-white'>
                  Stay updated with the latest news, promotions, and exclusive
                  offers.
                </h6>
              </div>
              <div className='mobile:flex items-center gap-2'>
                <form className='mb-5 mobile:mb-0'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='placeholder:text-white text-white bg-white/20 rounded-full px-6 py-4'
                  />
                </form>
                <button className='bg-white border border-white px-8 py-4 rounded-full text-black text-base font-semibold hover:bg-transparent hover:text-white hover:cursor-pointer'>
                  Subscribe
                </button>
              </div>
              <div>
                <p className='text-base font-normal text-white/40'>
                  By subscribing, you agree to receive our promotional emails.
                  You can unsubscribe at any time.
                </p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <Link href={'/'}>
                <Icon
                  icon={'prime:twitter'}
                  width={20}
                  height={20}
                  className='text-white hover:text-primary'
                />
              </Link>
              <Link href={'/'}>
                <Icon
                  icon={'prime:facebook'}
                  width={35}
                  height={35}
                  className='text-white hover:text-primary'
                />
              </Link>
              <Link href={'/'}>
                <Icon
                  icon={'prime:instagram'}
                  width={35}
                  height={35}
                  className='text-white hover:text-primary'
                />
              </Link>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row lg:gap-44 gap-20'>
            <div>
              <h3 className='text-40 sm:text-52 font-medium text-white leading-16 mb-6'>
                Begin your path to success <br /> contact us today.
              </h3>
              <button className='rounded-full px-8 py-4 bg-primary text-white text-base font-semibold hover:cursor-pointer hover:bg-primary/90'>
                Get in touch
              </button>
            </div>
            <div className='xs:flex gap-32'>
              <ul className='flex flex-col gap-4 mb-10 xs:mb-0'>
                {footerLink1.map((item, index) => (
                  <Link key={index} href={'/'}>
                    <li className='text-white/40 hover:text-white'>
                      {item.label}
                    </li>
                  </Link>
                ))}
              </ul>
              <ul className='flex flex-col gap-4'>
                {footerLink2.map((item, index) => (
                  <Link key={index} href={'/'}>
                    <li className='text-white/40 hover:text-white'>
                      {item.label}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='py-6 border-t border-white/10'>
          <div className='flex flex-col gap-10 justify-between items-center'>
            <div>
              <p className='text-sm font-normal text-white/40'>
                ©2025 PropertyPro
              </p>
            </div>
            <div className='flex gap-8 text-white'>
              <p>Terms of service</p>
              <p>Privacy policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
