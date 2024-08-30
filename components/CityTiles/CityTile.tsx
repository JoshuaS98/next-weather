'use client'
import { City } from '../../lib/cities'
import { classNames } from '../../lib/common'
import useSWR from 'swr'
import type { Fetcher } from 'swr'
import Image from 'next/image'
import { OneCallResponse } from '../../lib/types'
import { Switch } from '@headlessui/react'

type CityTileProps = {
  city: City
  defaultCity: City['name']
  setDefaultCity: React.Dispatch<React.SetStateAction<City['name']>>
}

const fetcher: Fetcher<Omit<OneCallResponse, 'minutely'>, string> = (...args) =>
  fetch(...args).then((res) => res.json())

export function CityTile(props: CityTileProps) {
  const { city, defaultCity, setDefaultCity } = props
  const apiKey = '8353a3ac0e6f6eeff64281d9ac417a7f'
  const fetchURI = `https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&exclude=minutely&appid=${apiKey}&units=metric`

  const { data, error, isLoading } = useSWR(fetchURI, fetcher)

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  const { current } = data
  const todaysWeatherIcon = current.weather?.[0]?.icon

  // set the default city in localStorage and state
  const onChange = () => {
    localStorage.setItem('defaultCity', city.name)
    setDefaultCity(city.name)
  }

  return (
    <li className={classNames('col-span-1 flex rounded-md shadow-sm')}>
      <div
        className={classNames(
          'relative flex w-16 flex-shrink-0 items-center justify-center rounded-l-md bg-blue-700 text-sm font-medium text-white',
        )}
      >
        <Image
          src={`https://openweathermap.org/img/wn/${todaysWeatherIcon}@2x.png`}
          alt='Weather'
          fill
        />
      </div>
      <div className='flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white'>
        <div className='flex-1 truncate px-4 py-2 text-sm'>
          <a href={city.name} className='font-medium text-gray-900 hover:text-gray-600'>
            {city.name}
          </a>
          <p className='text-gray-500'>{current.temp.toFixed(0)}°C</p>
        </div>
        <div className='flex-shrink-0 pr-2'>
          <Switch
            checked={defaultCity === city.name}
            onChange={onChange}
            className='group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-indigo-600'
          >
            <span className='sr-only'>Use setting</span>
            <span
              aria-hidden='true'
              className='pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5'
            />
          </Switch>
        </div>
      </div>
    </li>
  )
}
