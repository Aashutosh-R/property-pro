import { NavLinks } from '@/types/navlink'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink: React.FC<{ item: NavLinks }> = ({ item }) => {
  const path = usePathname()

  const linkclasses = clsx(
    'py-3 text-5xl font-medium text-white/40 rounded-full hover:text-primary',
    {
      '!text-primary': item.href === path,
      'text-primary': path.startsWith(
        `/${item.label.toLowerCase().replace(/\s+/g, '-')}}`
      ),
    }
  )

  const liststyle = clsx('w-6 h-0.5 bg-primary hidden', {
    '!block': item.href === path,
    'block': path.startsWith(
      `/${item.label.toLowerCase().replace(/\s+/g, '-')}}`
    ),
  })

  return (
    <li className='relative flex gap-4 items-center'>
      <div className={liststyle} />
      <Link href={item.href} className={linkclasses}>
        {item.label}
      </Link>
    </li>
  )
}

export default NavLink
