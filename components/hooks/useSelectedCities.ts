import { useEffect, useState } from 'react'
import { cities, City } from '../../lib/cities'

export const useSelectedCities = () => {
  const [selectedCities, setSelectedCities] = useState<Array<City['name']>>([])

  // on mount, check if there is a selectedCity in localStorage
  useEffect(() => {
    const storedSelectedCities = localStorage.getItem('selectedCities')

    // render predefined list
    if (!storedSelectedCities) {
      const val = cities.slice(0, 5).map((city) => city.name)
      localStorage.setItem('selectedCities', JSON.stringify(val))
      return setSelectedCities(val)
    }

    const parsedSelectedCities = storedSelectedCities ? JSON.parse(storedSelectedCities) : []

    setSelectedCities((prev) => {
      if (parsedSelectedCities.length > 0) {
        return parsedSelectedCities
      }

      return prev
    })
  }, [])

  return { selectedCities, setSelectedCities }
}
