import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <>
      <Image
        src={'/images/header/logo.svg'}
        alt='logo'
        width={192}
        height={40}
        className='block dark:hidden'
      />
      <Image
        src={'/images/header/dark-logo.svg'}
        alt='logo'
        width={192}
        height={40}
        className='hidden dark:block'
      />
    </>
  )
}

export default Logo
