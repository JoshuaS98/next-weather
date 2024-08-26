'use client'

import { OneCallResponse } from '../lib/types'

type HomeProps = {
  data: OneCallResponse
}

export default function Home(props: HomeProps) {
  const { data } = props
  console.log(10, data)

  return (
    <>
      <div className='pt-12'>
        <h1 className='text-3xl font-bold leading-tight tracking-tight text-gray-900'>
          Welcome back
        </h1>
      </div>
    </>
  )
}
