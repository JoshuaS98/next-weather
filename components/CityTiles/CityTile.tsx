import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { City } from '../../lib/cities'
import { classNames } from '../../lib/common'

export function CityTile(city: City) {
  return (
    <li className='col-span-1 flex rounded-md shadow-sm'>
      <div
        className={classNames(
          'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md bg-blue-500 text-sm font-medium text-white',
        )}
      >
        Icon
      </div>
      <div className='flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white'>
        <div className='flex-1 truncate px-4 py-2 text-sm'>
          <a href={city.name} className='font-medium text-gray-900 hover:text-gray-600'>
            {city.name}
          </a>
          <p className='text-gray-500'>Current temperature</p>
        </div>
        <div className='flex-shrink-0 pr-2'>
          <button
            type='button'
            className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          >
            <span className='sr-only'>Open options</span>
            <EllipsisVerticalIcon aria-hidden='true' className='h-5 w-5' />
          </button>
        </div>
      </div>
    </li>
  )
}
