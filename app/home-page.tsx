'use client'

import { OneCallResponse } from '../lib/types'
import Image from 'next/image'

type HomeProps = {
  weather: OneCallResponse
}

export default function Home(props: HomeProps) {
  const { weather } = props
  const { current } = weather
  const todaysWeatherIcon = current.weather?.[0]?.icon

  return (
    <>
      <div className='pt-12'>
        <h1 className='text-3xl font-bold leading-tight tracking-tight text-gray-900'>
          Welcome back
        </h1>
        <div className='relative h-12 w-12'>
          <Image
            src={`https://openweathermap.org/img/wn/${todaysWeatherIcon}@2x.png`}
            alt='Weather'
            fill
          />
        </div>
      </div>
    </>
  )
}
