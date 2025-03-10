'use client'
import { navLinks } from '@/app/api/navlink'
import { Icon } from '@iconify/react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import NavLink from './Navigation/NavLink'

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)

  const sideMenuRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setSticky(window.scrollY >= 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const headerclass = clsx('fixed top-0 w-full py-4 z-30', {
    'bg-black/50 shadow-lg': sticky,
  })

  return (
    <header className={headerclass}>
      <nav className={`container max-w-8xl mx-auto 2xl:px-0 px-5`}>
        <div className='flex justify-between items-center gap-2'>
          <div>
            <Link href='/'>
              <Image
                src={'/images/header/logo.svg'}
                alt='logo'
                width={192}
                height={40}
              />
            </Link>
          </div>
          <div className='flex items-center gap-2 sm:gap-6'>
            <button className='bg-white rounded-full p-2'>
              <Icon
                icon={'solar:sun-bold'}
                width={24}
                height={24}
                className='block dark:hidden'
              />
              <Icon
                icon={'solar:moon-bold'}
                width={24}
                height={24}
                className='dark:block hidden'
              />
            </button>
            <div className='hidden md:block'>
              <Link href={'#'}>
                <div className='text-white flex items-center gap-2 border-r'>
                  <div>
                    <Icon icon={'ph:phone-bold'} width={24} height={24} />
                  </div>
                  <p className='text-base font-semibold text-inherit pr-6'>
                    +1-212-456-789
                  </p>
                </div>
              </Link>
            </div>
            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className='flex items-center gap-3 p-2 sm:px-5 sm:py-3 bg-white rounded-full text-black font-semibold hover:cursor-pointer'
                aria-label='Toggle mobile menu'>
                <span>
                  <Icon icon={'ph:list'} width={24} height={24} />
                </span>
                <span className='hidden sm:block'>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {navbarOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
      )}
      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 h-full w-full bg-badge shadow-lg transition-transform duration-300 max-w-2xl ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50 px-20 overflow-auto no-scrollbar`}>
        <div className='flex items-center justify-center py-10'>
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label='Close mobile menu'
            className='bg-white p-3 rounded-full hover:cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'>
              <path
                fill='none'
                stroke='black'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <nav className='flex flex-col items-start gap-4'>
          <ul>
            {navLinks.map((item, index) => (
              <NavLink key={index} item={item} />
            ))}
          </ul>
        </nav>
        <div className='flex flex-col gap-1 my-16'>
          <p className='text-xm font-normal text-white/40'>Contact</p>
          <p className='text-xm font-medium text-white'>
            hello@propertypro.com
          </p>
          <p className='text-xm font-medium text-white'>+1-212-456-7890 </p>
        </div>
        <div className='flex flex-col gap-1 my-16'>
          <p className='text-xm font-normal text-white/40'>Socials</p>
          <p className='text-xm font-medium text-white'>X / Twitter</p>
          <p className='text-xm font-medium text-white'>Facebook</p>
          <p className='text-xm font-medium text-white'>Instagram</p>
        </div>
      </div>
    </header>
  )
}

export default Header
