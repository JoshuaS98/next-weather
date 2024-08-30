'use client'
import { useParams } from 'next/navigation'
import { cityNameToSlug } from '../../../lib/common'
import useSWR from 'swr'
import { cities } from '../../../lib/cities'
import { fetcher } from '../../../components/CityTiles/CityTile'

export default function Page() {
  const params = useParams<{ city: string }>()
  const city = cities.find((city) => cityNameToSlug(city.name) === params.city)

  const apiKey = '8353a3ac0e6f6eeff64281d9ac417a7f'
  const fetchURI = `https://api.openweathermap.org/data/3.0/onecall?lat=${city?.lat}&lon=${city?.lon}&exclude=minutely&appid=${apiKey}&units=metric`

  const { data, error, isLoading } = useSWR(fetchURI, fetcher)
  const { daily } = data || {}

  return (
    <div className='mx-auto py-12'>
      <h2 className='mb-2 text-sm font-medium text-gray-500'>{city?.name}</h2>
      {isLoading && <p className='text-sm font-medium text-gray-500'>Loading...</p>}

      {daily?.slice(0, 5).map((day) => {
        const date = new Date(day.dt * 1000)
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' })
        const weatherIcon = day.weather?.[0]?.icon

        return (
          <div key={day.dt} className='flex max-w-sm items-center justify-between'>
            <div className='flex items-center'>
              <img
                className='mr-2 h-8 w-8'
                src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
                alt='Weather'
              />
              <p className='text-sm font-medium text-gray-900'>{dayOfWeek}</p>
            </div>
            <p className='text-sm font-medium text-gray-900'>{day.temp.day.toFixed(0)}°C</p>
          </div>
        )
      })}
    </div>
  )
}
