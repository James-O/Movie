'use client';

import React from 'react'
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import {useTheme} from 'next-themes'

export default function DarkmodeSwitch() {
    const {theme, setTheme, systhemTheme}=useTheme()
    const currentTheme = theme ==='system'?systhemTheme:theme
  return (
    <div>{currentTheme==='dark' ? <MdLightMode onClick={()=>{setTheme('light')}} className='text-xl cursor-pointer hover:text-amber-500'/>:<MdDarkMode onClick={()=>{setTheme('dark')}} className='text-xl cursor-pointer hover:text-amber-500'/>}</div>
  )
}
