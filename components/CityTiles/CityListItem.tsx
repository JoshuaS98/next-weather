import { Checkbox } from '@headlessui/react'
import { City } from '../../lib/cities'

type CityListItemProps = {
  city: City['name']
  selectedCities: Array<City['name']>
  setSelectedCities: React.Dispatch<React.SetStateAction<Array<City['name']>>>
  defaultCity: City['name']
}

export const CityListItem = (props: CityListItemProps) => {
  const { city, setSelectedCities, selectedCities, defaultCity } = props

  const onChange = () => {
    localStorage.setItem('selectedCities', JSON.stringify(selectedCities))

    setSelectedCities((prev) => {
      if (prev.includes(city)) {
        const val = prev.filter((c) => c !== city)
        localStorage.setItem('selectedCities', JSON.stringify(val))
        return val
      }

      const val = [...prev, city]
      localStorage.setItem('selectedCities', JSON.stringify(val))
      return val
    })
  }

  return (
    <li key={city} className='flex justify-between gap-x-4 py-2.5'>
      <div className='min-w-0'>
        <p className='text-sm font-semibold leading-6 text-gray-900'>{city}</p>
      </div>
      <Checkbox
        checked={selectedCities.includes(city)}
        onChange={onChange}
        disabled={city === defaultCity && selectedCities.includes(city)}
        className='group block size-4 rounded border bg-white data-[checked]:bg-blue-500 data-[disabled]:opacity-40'
      >
        <svg
          className='stroke-white opacity-0 group-data-[checked]:opacity-100'
          viewBox='0 0 14 14'
          fill='none'
        >
          <path d='M3 8L6 11L11 3.5' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      </Checkbox>
    </li>
  )
}
