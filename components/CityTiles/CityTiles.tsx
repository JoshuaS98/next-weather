'use client'
import { cities } from '../../lib/cities'
import { CityTile } from './CityTile'
import { useDefaultCity } from '../hooks/useDefaultCity'
import { CityListItem } from './CityListItem'
import { useSelectedCities } from '../hooks/useSelectedCities'

export default function CityTiles() {
  const { selectedCities, setSelectedCities } = useSelectedCities()
  const { defaultCity, setDefaultCity } = useDefaultCity()

  return (
    <div className='grid lg:grid-cols-4 lg:gap-x-12'>
      <div className='lg:order-1 lg:col-span-3'>
        <h2 className='text-sm font-medium text-gray-500'>Current weather</h2>
        <ul
          role='list'
          className='mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4'
        >
          {cities.map((city) => {
            if (!selectedCities.includes(city.name)) return null
            return (
              <CityTile
                key={city.name}
                city={city}
                defaultCity={defaultCity}
                setDefaultCity={setDefaultCity}
              />
            )
          })}
        </ul>
      </div>

      <div className='mt-12 lg:col-span-1 lg:mt-0'>
        <h2 className='text-sm font-medium text-gray-500'>Available cities</h2>
        <ul role='list' className='max-w-screen-lg divide-y divide-gray-100'>
          {cities.map((city) => (
            <CityListItem
              key={city.name}
              city={city.name}
              selectedCities={selectedCities}
              setSelectedCities={setSelectedCities}
              defaultCity={defaultCity}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
