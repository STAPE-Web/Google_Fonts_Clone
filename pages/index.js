import { ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Filter from '../components/Filter'
import { fonts } from '../fonts'

export default function Home() {
  const [typing, setTyping] = useState('')
  const [size, setSize] = useState(40)

  return (
    <div>
      <Head>
        <title>Google Fonts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Filter typing={typing} setTyping={setTyping} size={size} setSize={setSize} />
      <div className='w-screen px-[50px] xl:px-[300px] flex flex-col justify-center mt-[50px]'>
        <div className='w-full flex items-end justify-between'>
          <p className='text-[12px] text-grayText'>{fonts.length} of {fonts.length} families</p>
          <div className='flex text-grayText border border-border w-fit rounded-[5px]'>
            <ViewGridIcon className='h-[35px] text-active border-r border-border p-[5px] cursor-pointer' />
            <ViewListIcon className='h-[35px] p-[5px] cursor-pointer' />
          </div>
        </div>
        <div className='grid cols-span-3 lg:grid-cols-3 w-full gap-[20px] sm:grid-cols-2 grid-cols-1 mt-[10px]'>
          {fonts.map((font) => (
            <Card typing={typing} font={font} key={font.id} />
          ))}
        </div>
      </div>
    </div >
  )
}
