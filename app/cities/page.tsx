'use client'
import { SWRConfig } from 'swr'
import CityTiles from '../../components/CityTiles/CityTiles'
import { Cache } from 'swr'

function localStorageProvider(cache: Readonly<Cache<any>>): Cache<any> {
  const currentLocalStorage = localStorage.getItem('app-cache') || '[]'
  const map = new Map(JSON.parse(currentLocalStorage))

  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('app-cache', appCache)
  })

  return map as Cache<any>
}

export default function Page() {
  return (
    <SWRConfig
      value={{
        provider: localStorageProvider,
        revalidateOnMount: true,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      <div className='py-12'>
        <h1>
          <CityTiles />
        </h1>
      </div>
    </SWRConfig>
  )
}
