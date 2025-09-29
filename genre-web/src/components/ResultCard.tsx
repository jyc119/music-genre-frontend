import React from 'react'
import { GENRE_IMAGES } from '../lib/config'
import { type ParsedPrediction } from '../types'

type Props = {
    result: ParsedPrediction | null;
    onReset: () => void;
}

const ResultCard = ({result, onReset} : Props) => {
    if (!result) return null;

    const key = (result.label ?? "").toLowerCase();
    const imgSrc = GENRE_IMAGES[key];
    const prob = result.prob ?? 0;
    const pct = prob > 1 ? Math.round(Math.min(100, prob)) : Math.round(prob * 100);

    return (
        <div className="rounded-x1 overflow-hidden text-white">
            <div className="p-4">
                <div className="text-6xl font-bold tracking-tight capitalize">{result.label}</div>
                <div className="mt-5">
                    <div className="mb-1 text-sm">Confidence</div>
                </div>
                <div className="mt-1 text-sm font-medium">{pct}%</div>
            </div>

            <button 
                onClick={onReset} 
                className='transition mt-6 px-5 py-2 text-black rounded-lg shadow hover:shadow-md'
            >
                Try again!
            </button>
        </div>
    )
}

export default ResultCard