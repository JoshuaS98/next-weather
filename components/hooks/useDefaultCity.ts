import { useEffect, useState } from 'react'
import { cities, City } from '../../lib/cities'

export const useDefaultCity = () => {
  const [defaultCity, setDefaultCity] = useState<City['name']>('')

  // on mount, check if there is a default city in localStorage
  useEffect(() => {
    const storedDefaultCity = localStorage.getItem('defaultCity')

    if (!storedDefaultCity) {
      const val = cities[0].name
      localStorage.setItem('defaultCity', val)
      return setDefaultCity(val)
    }

    if (storedDefaultCity) return setDefaultCity(storedDefaultCity)
  }, [])

  return { defaultCity, setDefaultCity }
}
