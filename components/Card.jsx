import Link from 'next/link'
import React from 'react'

const Card = ({ typing, font }) => {
    return (
        <Link href={`/font?name=${font.name}&designer=${font.designer}`}>
            <div className='col-span-1 border border-border rounded-[8px] p-[16px] pb-[68px] cursor-pointer'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-[18px] text-white'>{font.name}</h1>
                        <p className='font-bold text-grayText text-[14px] line-clamp-1'>{font.designer}</p>
                    </div>
                    <p className='font-bold text-grayText text-[12px]'>{font.styles} styles</p>
                </div>
                <p className={[`text-white text-[40px] break-all`]}>{typing ? typing : 'Almost before we knew it, we had left the ground.'}</p>
            </div >
        </Link>
    )
}

export default Card