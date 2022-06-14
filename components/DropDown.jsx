import React from 'react'

const DropDown = ({ children }) => {
    return (
        <div className='bg-dropDown py-[8px] rounded-[10px] text-white'>
            {children}
        </div>
    )
}

export default DropDown