import React from 'react'
import { HERO_IMAGE } from '../lib/config'

const Hero = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="min-h-screen w-screen relative">
        <div
            className='absolute inset-0 bg-center bg-cover w-screen bg-no-repeat'
            style={{backgroundImage: `url(${HERO_IMAGE})`}}
            aria-hidden
        />
        <div className='absolute inset-0 bg-black/50'/>
        <main className='relative z-10 min-h-screen flex items-center justify-center p-6'>
            {children}
        </main>
    </div>
  )
}

export default Hero