import { ChevronDownIcon, DownloadIcon, PlusCircleIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import DropDown from '../components/DropDown'

const font = () => {

    const router = useRouter()
    const [fontSize, setFontSize] = useState(false)
    const [size, setSize] = useState(64)
    const [typing, setTyping] = useState('Almost before we knew it, we had left the ground.')
    const sizeObj = [8, 12, 14, 20, 24, 32, 40, 64, 96, 120, 184, 280]
    const object = [
        { id: 1, name: 'Thin 100', weight: 'font-thin' },
        { id: 2, name: 'Light 300', weight: 'font-light' },
        { id: 3, name: 'Regular 400', weight: 'font-normal' },
        { id: 4, name: 'Medium 500', weight: 'font-medium' },
        { id: 5, name: 'Bold 700', weight: 'font-bold' },
        { id: 6, name: 'Black 900', weight: 'font-black' },
    ]

    return (
        <div>
            <Head>
                <title>{router.query.name} - Google Fonts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='w-screen px-[50px] xl:px-[300px] flex flex-col justify-center mt-[50px]'>
                <div className='flex items-start justify-between border-b border-border pb-[30px]'>
                    <div>
                        <h1 className='text-[36px] text-white'>{router.query.name}</h1>
                        <p className='text-grayText text-[14px]'>Designed by <span className='text-active'>{router.query.designer}</span></p>
                    </div>
                    <button className='hidden border border-active text-active sm:flex items-center font-bold px-[23px] py-[5px] rounded-[5px] gap-[5px]'><DownloadIcon className='h-[18px]' /> Download family</button>
                </div>

                <div className='py-[30px]'>
                    <h1 className='text-white text-[32px]'>Styles</h1>
                    <div className='mt-[20px] items-center w-full grid grid-cols-12 gap-[20px] font-bold'>
                        <div className='sm:col-span-8 col-span-12'>
                            <p className='absolute text-grayText bg-main ml-[32px] mt-[-8px] px-[5px] text-[12px] upInput'>Type here to preview text</p>
                            <input value={typing} onChange={e => setTyping(e.target.value)} className='w-full border border-border bg-transparent text-white focus:border-active rounded-full px-[32px] py-[16px] font-bold' />
                        </div>
                        <div className='hidden sm:flex items-center px-[15px] gap-[15px] col-span-4'>
                            <button className='flex items-center text-white font-bold text-[14px] hover:text-active hover:bg-hover py-[5px] px-[3px] rounded-lg' onClick={() => setFontSize(!fontSize)}>{size}px <ChevronDownIcon className='h-[20px] translate-y-[-1px] text-active' /></button>
                            <div className='absolute top-[380px] z-50 h-[180px] overflow-scroll rounded-[10px]'>
                                {fontSize && (
                                    <DropDown>
                                        {sizeObj.map(obj => (
                                            <div key={obj.toString()} className='py-[8px] px-[16px] hover:bg-hover cursor-pointer font-bold'>
                                                {obj}
                                            </div>
                                        ))}
                                    </DropDown>
                                )}
                            </div>
                            <input type="range" value={size} onChange={e => setSize(e.target.value)} min="8" max="300" />
                        </div>
                    </div>
                </div>

                <div>
                    {object.map((obj) => (
                        <div key={obj.id} className='flex items-center justify-between border-b border-border py-[10px] gap-[30px]'>
                            <div className='w-full'>
                                <p className='text-grayText font-bold'>{obj.name}</p>
                                <input className={`${obj.weight} text-white text-[32px] sm:text-[64px] bg-transparent w-full`} value={typing ? typing : 'Almost before we knew it, we had left the ground.'} onChange={e => setTyping(e.target.value)} />
                            </div>
                            <button className='text-active flex items-center font-bold whitespace-nowrap gap-[10px]'><span className='hidden sm:block'>Select this style</span> <PlusCircleIcon className='h-[25px]' /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default font