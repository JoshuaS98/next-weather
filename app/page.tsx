import { OneCallResponse } from '../lib/types'
import Home from './home-page'

const getWeather = async ({ lon, lat }: { lon: number; lat: number }) => {
  const response: OneCallResponse = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=f019ab39903b4e7b532c5d88f06b3def`,
  ).then((res) => res.json())

  return response
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const data = await getWeather({ lon: -0.3763353, lat: 39.4697065 })
  // Forward fetched data to your Client Component
  return <Home data={data} />
}
