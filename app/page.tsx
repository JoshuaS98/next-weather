'use client'
import Image from 'next/image'
import { useDefaultCity } from '../components/hooks/useDefaultCity'
import useSWR from 'swr'
import { fetcher } from '../components/CityTiles/CityTile'
import { cities } from '../lib/cities'
import { cityNameToSlug } from '../lib/common'
import Link from 'next/link'

export default function Page() {
  const { defaultCity } = useDefaultCity()
  const city = cities.find((city) => city.name === defaultCity)

  const apiKey = '8353a3ac0e6f6eeff64281d9ac417a7f'
  const fetchURI = `https://api.openweathermap.org/data/3.0/onecall?lat=${city?.lat}&lon=${city?.lon}&exclude=minutely&appid=${apiKey}&units=metric`

  const { data, error, isLoading } = useSWR(fetchURI, fetcher)
  const { current } = data || {}

  const todaysWeatherIcon = current?.weather?.[0]?.icon

  if (isLoading) {
    return (
      <div className='pt-12'>
        <h1 className='mb-4 text-3xl font-bold text-gray-800'>Welcome back, traveler!</h1>
        <p className='text-lg font-medium text-gray-500'>We are asking the weatherman for you...</p>
      </div>
    )
  }

  if (!city) {
    return (
      <div className='pt-12'>
        <h1 className='mb-4 text-3xl font-bold text-gray-800'>Welcome back, traveler!</h1>
        <p className='text-lg font-medium text-gray-500'>
          We couldn&apos;t find your default city. Please try again.
        </p>
      </div>
    )
  }

  return (
    <div className='pt-12'>
      <h1 className='mb-4 text-3xl font-bold text-gray-800'>Hi {city?.demonym}!</h1>
      {isLoading ? (
        <p className='text-lg font-medium text-gray-500'>We are asking the weatherman for you...</p>
      ) : (
        <div className='flex text-lg font-medium text-gray-500'>
          <h2 className='flex items-center'>
            <span>Here&rsquo;s the weather in</span>
            <Link href={cityNameToSlug(city?.name)}>&nbsp;{city?.name}&nbsp;</Link>
            <span>today:</span>
          </h2>
          {todaysWeatherIcon && (
            <div className='flex items-center justify-center'>
              <div className='relative h-12 w-12'>
                <Image
                  src={`https://openweathermap.org/img/wn/${todaysWeatherIcon}@2x.png`}
                  alt='Weather'
                  fill
                />
              </div>
              <p className=''>{current.temp.toFixed(0)}°C</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
