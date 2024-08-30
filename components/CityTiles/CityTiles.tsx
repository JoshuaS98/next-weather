'use client'
import { useEffect, useState } from 'react'
import { cities, City } from '../../lib/cities'
import { CityTile } from './CityTile'

export default function CityTiles() {
  const [defaultCity, setDefaultCity] = useState<City['name']>('')

  // on mount, check if there is a default city in localStorage
  useEffect(() => {
    const defaultCity = localStorage.getItem('defaultCity')
    if (defaultCity) setDefaultCity(defaultCity)
  }, [])

  return (
    <div>
      <h2 className='text-sm font-medium text-gray-500'>Cities</h2>
      <ul
        role='list'
        className='mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4'
      >
        {cities.map((city) => (
          <CityTile
            key={city.name}
            city={city}
            defaultCity={defaultCity}
            setDefaultCity={setDefaultCity}
          />
        ))}
      </ul>
    </div>
  )
}
