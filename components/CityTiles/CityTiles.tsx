import { cities, City } from '../../lib/cities'
import { CityTile } from './CityTile'

export default function CityTiles() {
  // useWeather()
  return (
    <div>
      <h2 className='text-sm font-medium text-gray-500'>Pinned Projects</h2>
      <ul
        role='list'
        className='mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4'
      >
        {cities.map((city) => (
          <CityTile key={city.name} {...city} />
        ))}
      </ul>
    </div>
  )
}
