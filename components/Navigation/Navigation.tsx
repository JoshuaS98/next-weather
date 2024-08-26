'use client'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, SunIcon, CloudIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { classNames } from '../../lib/common'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback } from 'react'

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Cities',
    href: '/cities',
  },
]

export default function Navigation() {
  const pathname = usePathname()
  const isCurrentPage = useCallback((href: string) => pathname === href, [pathname])

  return (
    <Disclosure as='nav' className='fixed z-40 w-full bg-white shadow'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 justify-between'>
          <div className='flex'>
            <div className='relative flex h-full w-28 flex-shrink-0 items-center'>
              <Image
                alt='NextWeather'
                src='https://static.meteoblue.com/website/images/logo/meteoblue_logo_v1.0.svg'
                fill
              />
            </div>
            <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
              {menuItems.map((i) => (
                <a
                  key={i.name}
                  href={i.href}
                  className={classNames(
                    'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900',
                    isCurrentPage(i.href)
                      ? 'border-blue-500'
                      : 'border-transparent hover:border-gray-300 hover:text-gray-700',
                  )}
                >
                  {i.name}
                </a>
              ))}
            </div>
          </div>

          <div className='hidden sm:ml-6 sm:flex sm:items-center'>
            <div className='relative rounded-full bg-white p-1 text-gray-400'>
              <span className='absolute -inset-1.5' />
              <CloudIcon aria-hidden='true' className='h-6 w-6' />
            </div>
          </div>

          <div className='-mr-2 flex items-center sm:hidden'>
            {/* Mobile menu button */}
            <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
              <span className='absolute -inset-0.5' />
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon aria-hidden='true' className='block h-6 w-6 group-data-[open]:hidden' />
              <XMarkIcon aria-hidden='true' className='hidden h-6 w-6 group-data-[open]:block' />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className='static sm:hidden'>
        <div className='space-y-1 pb-3 pt-2'>
          {menuItems.map((i) => (
            <DisclosureButton
              key={i.name}
              as='a'
              href={i.href}
              className={classNames(
                'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
                isCurrentPage(i.href)
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
              )}
            >
              {i.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
