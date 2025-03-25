import { Icon } from '@iconify/react'
import Image from 'next/image'
// import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28'>
      <div className='mb-16'>
        <div className='flex gap-2.5 items-center justify-center mb-3'>
          <span>
            <Icon
              icon={'ph:house-simple-fill'}
              width={20}
              height={20}
              className='text-primary'
            />
          </span>
          <p className='text-base font-semibold text-badge dark:text-white/90'>
            Error 404
          </p>
        </div>
        <div className='text-center'>
          <h3 className='text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14'>
            Lost? let’s help you find home.
          </h3>
          <p className='text-xm font-normal tracking-tight text-black/50 dark:text-white/50 leading-6'>
            Looks like you’ve hit a dead end — but don’t worry, we’ll help you
            get back on track.
          </p>
        </div>
      </div>
      <div className='flex justify-center'>
        <Image
          src={'/images/error404/error.png'}
          alt='error'
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
