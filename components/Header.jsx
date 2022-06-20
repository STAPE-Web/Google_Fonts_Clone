import React, { useEffect, useState } from 'react'
import { DotsVerticalIcon, MoonIcon, SunIcon, ViewGridAddIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {

    const [light, setLight] = useState('block')
    const [dark, setDark] = useState('hidden')
    const [hoverLight, setHoverLight] = useState('hover:bg-hover')

    const lightTheme = () => {
        setLight('hidden')
        setDark('block')
        document.body.classList.add('light')
    }

    const darkTheme = () => {
        setLight('block')
        setDark('hidden')
        document.body.classList.remove('light')
    }

    useEffect(() => {
        const test = document.body.classList.contains('light')
        if (test) {
            setHoverLight('')
        } else {
            setHoverLight('hover:bg-hover')
        }
    })

    return (
        <header className='w-screen flex items-center justify-end sm:justify-between h-[64px] border-b border-border sm:px-[50px]'>
            <Link href='/'>
                <div className='hidden sm:block translate-y-[5px] cursor-pointer'>
                    <Image src={require('/public/Logo.png')} width={190} height={30} />
                </div>
            </Link>
            <div className='flex items-center'>
                <ul className='hidden lg:flex items-center text-grayText font-bold'>
                    <li className={`text-active border-b border-active cursor-pointer w-[120px] h-[64px] flex justify-center items-center ${hoverLight}`}>Fonts</li>
                    <li className={`cursor-pointer w-[120px] h-[62px] flex justify-center items-center ${hoverLight}`}>Icons</li>
                    <li className={`cursor-pointer w-[120px] h-[62px] flex justify-center items-center ${hoverLight}`}>Knowlwdge</li>
                    <li className={`cursor-pointer w-[120px] h-[62px] flex justify-center items-center ${hoverLight}`}>FAQ</li>
                </ul>
                <div className={`cursor-pointer w-[48px] h-[48px] flex justify-center items-center ${hoverLight} rounded-full mx-[10px]`}>
                    <DotsVerticalIcon className="h-[25px] text-grayText" />
                </div>
                <div className={`cursor-pointer w-[48px] h-[48px] flex justify-center items-center ${hoverLight} rounded-full mx-[10px]`}>
                    <SunIcon className={`h-[25px] text-grayText ${light}`} onClick={lightTheme} />
                    <MoonIcon className={`h-[25px] text-grayText ${dark}`} onClick={darkTheme} />
                </div>
                <div className={`cursor-pointer w-[48px] h-[48px] flex justify-center items-center ${hoverLight} rounded-full mx-[10px]`}>
                    <ViewGridAddIcon className='h-[25px] text-grayText' />
                </div>
            </div>
        </header>
    )
}

export default Header
