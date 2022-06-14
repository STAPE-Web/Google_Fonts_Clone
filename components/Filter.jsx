import { ChevronDownIcon, RefreshIcon, SearchIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import DropDown from './DropDown'

const Filter = ({ typing, setTyping, size, setSize }) => {
    const [search, setSearch] = useState('')
    const [sentence, setSentence] = useState(false)
    const [fontSize, setFontSize] = useState(false)
    const [categories, setCategories] = useState(false)
    const [language, setLanguage] = useState(false)
    const [properties, setProperties] = useState(false)

    const clear = () => {
        setSearch('')
        setTyping('')
        setSize(40)
    }

    const sentenceObj = ['Custom', 'Sentence', 'Alphabet', 'Paragraph', 'Numerals']
    const sizeObj = [8, 12, 14, 20, 24, 32, 40, 64, 96, 120, 184, 280]
    const categoriesObj = ['Serif', 'Sans Serif', 'Display', 'Handwriting', 'Monospace']
    const languageObj = ['All languages', 'Arabic', 'Bengali', 'Chinese (Hong Kong)', 'Chinese (Simplified)', 'Chinese (Traditional)', 'Cyrillic', 'Cyrillic Extended', 'Devanagari', 'Greek', 'Greek Extended', 'Gujarati', 'Gurmukhi', 'Hebrew', 'Japanese', 'Kannada', 'Khmer', 'Korean', 'Latin', 'Latin Extended', 'Malayalam', 'Myanmar', 'Oriya', 'Sinhala', 'Tamil', 'Telugu', 'Thai', 'Tibetan', 'Vietnamese']
    const propertiesObj = ['Number of styles', 'Thickness', 'Slant', 'Width']

    return (
        <div className="w-screen px-[50px] xl:px-[300px] flex flex-col justify-center">
            <div className='w-full h-[56px] border border-border rounded-[100px] grid grid-cols-12 mt-[20px]'>
                <div className='border-r border-border sm:col-span-5 md:col-span-3 col-span-10 flex items-center px-[15px] gap-[15px]'>
                    <SearchIcon className='h-[25px] text-white' />
                    <input value={search} onChange={e => setSearch(e.target.value)} type="text" className='h-full w-full bg-transparent text-white placeholder:text-white focus:placeholder:text-active font-bold' placeholder='Search fonts' />
                </div>
                <div className='border-r border-border col-span-5 hidden md:flex items-center px-[15px] gap-[15px]'>
                    <button className='flex items-center text-white font-bold text-[14px] hover:text-active hover:bg-hover py-[5px] px-[3px] rounded-lg' onClick={() => setSentence(!sentence)}>Sentence <ChevronDownIcon className='h-[20px] translate-y-[-1px] text-active' /></button>
                    <div className='absolute top-[140px] z-50'>
                        {sentence && (
                            <DropDown>
                                {sentenceObj.map(obj => (
                                    <div key={obj.toString()} className='py-[8px] px-[16px] hover:bg-hover cursor-pointer font-bold'>
                                        {obj}
                                    </div>
                                ))}
                            </DropDown>
                        )}
                    </div>
                    <input value={typing} onChange={e => setTyping(e.target.value)} type="text" className='h-full w-full bg-transparent text-white placeholder:text-white focus:placeholder:text-active font-bold' placeholder='Type something' />
                </div>
                <div className='border-r border-border col-span-6 md:col-span-3 hidden sm:flex items-center px-[15px] gap-[15px]'>
                    <button className='flex items-center text-white font-bold text-[14px] hover:text-active hover:bg-hover py-[5px] px-[3px] rounded-lg' onClick={() => setFontSize(!fontSize)}>{size}px <ChevronDownIcon className='h-[20px] translate-y-[-1px] text-active' /></button>
                    <div className='absolute top-[140px] z-50 h-[180px] overflow-scroll rounded-[10px]'>
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
                <div className='flex items-center justify-center sm:col-span-1 col-span-2 cursor-pointer' onClick={clear}>
                    <RefreshIcon className='h-[25px] text-grayText' />
                </div>
            </div>

            <div className='flex items-center mt-[20px] gap-[15px] overflow-scroll'>
                <div>
                    <button className='flex items-center text-white font-bold text-[14px] hover:text-active hover:bg-hover py-[5px] px-[15px] rounded-[100px] border border-border' onClick={() => setCategories(!categories)}>Categories <ChevronDownIcon className='h-[20px] translate-y-[-1px] text-active' /></button>
                    <div className='absolute top-[200px] z-50'>
                        {categories && (
                            <DropDown>
                                {categoriesObj.map(obj => (
                                    <div key={obj.toString()} className='py-[8px] px-[16px] hover:bg-hover cursor-pointer font-bold'>
                                        {obj}
                                    </div>
                                ))}
                            </DropDown>
                        )}
                    </div>
                </div>
                <div>
                    <button className='flex items-center text-white font-bold text-[14px] hover:text-active hover:bg-hover py-[5px] px-[15px] rounded-[100px] border border-border' onClick={() => setLanguage(!language)}>Language <ChevronDownIcon className='h-[20px] translate-y-[-1px] text-active' /></button>
                    <div className='absolute top-[200px] z-50 h-[180px] overflow-scroll rounded-[10px]'>
                        {language && (
                            <DropDown>
                                {languageObj.map(obj => (
                                    <div key={obj.toString()} className='py-[8px] px-[16px] hover:bg-hover cursor-pointer font-bold'>
                                        {obj}
                                    </div>
                                ))}
                            </DropDown>
                        )}
                    </div>
                </div>
                <div>
                    <button className='flex items-center text-white font-bold text-[14px] hover:text-active hover:bg-hover py-[5px] px-[15px] rounded-[100px] border border-border' onClick={() => setProperties(!properties)}>Font properties <ChevronDownIcon className='h-[20px] translate-y-[-1px] text-active' /></button>
                    <div className='absolute top-[200px] z-50'>
                        {properties && (
                            <DropDown>
                                {propertiesObj.map(obj => (
                                    <div key={obj.toString()} className='py-[8px] px-[16px] hover:bg-hover cursor-pointer font-bold'>
                                        {obj}
                                    </div>
                                ))}
                            </DropDown>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter
