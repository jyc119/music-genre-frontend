import React from 'react'
import { HERO_IMAGE, GENRE_IMAGES } from '../lib/config'
import { type ParsedPrediction } from '../types'

type Props = {
    children: React.ReactNode;
    result?: ParsedPrediction | null;
}

const Hero = ({children, result} : Props) => {

    const bgImage = 
        result?.label && GENRE_IMAGES[result.label.toLowerCase()]
            ? GENRE_IMAGES[result.label.toLowerCase()]
            : HERO_IMAGE;

    return (
        <div className="min-h-screen w-screen relative">
            <div
                className='absolute inset-0 bg-center bg-cover w-screen bg-no-repeat'
                style={{backgroundImage: `url(${bgImage})`}}
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