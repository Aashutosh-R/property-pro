import { Icon } from '@iconify/react'
import Image from 'next/image'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faq } from '@/app/api/faq'

const Faq: React.FC = () => {
  return (
    <section className='pt-28 pb-24'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-10'>
          <div className='grid grid-cols-2 gap-5 sm:gap-10'>
            <div className='flex flex-col gap-5 sm:gap-10'>
              <Image
                src={'/images/faq/faq1.jpg'}
                alt='faq1'
                width={320}
                height={302}
                className='rounded-2xl w-full h-full xl:h-fit'
              />
              <Image
                src={'/images/faq/faq2.jpg'}
                alt='faq2'
                width={320}
                height={302}
                className='rounded-2xl w-full h-full xl:h-fit'
              />
            </div>
            <div>
              <Image
                src={'/images/faq/faq3.jpg'}
                alt='faq3'
                width={320}
                height={644}
                className='rounded-2xl w-full h-full xl:h-fit'
              />
            </div>
          </div>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-4'>
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
                  FAQs
                </p>
              </div>
              <h3 className='text-40 sm:text-52 font-medium leading-14 sm:leading-16 text-black dark:text-white'>
                Everything about PropertyPro
              </h3>
              <p className='text-sm sm:text-xm font-normal max-w-85p text-black/50 dark:text-white/50'>
                We know that buying, selling, or investing in real estate can be
                overwhelming. Here are some frequently asked questions to help
                guide you through the process.
              </p>
            </div>
            <div>
              <Accordion
                type='single'
                collapsible
                className='flex flex-col gap-6'>
                {faq.map((item, index) => (
                  <AccordionItem key={index} value={item.value}>
                    <AccordionTrigger className='bg-gray-100 dark:bg-white/10 p-6'>
                      {item.que}
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.ans}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
