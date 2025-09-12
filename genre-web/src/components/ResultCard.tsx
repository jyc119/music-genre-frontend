import React from 'react'
import { GENRE_IMAGES } from '../lib/config'
import { type ParsedPrediction } from '../types'

const ResultCard = ({result}: {result: ParsedPrediction | null}) => {
    if (!result) return null;

    const key = (result.label ?? "").toLowerCase();
    const imgSrc = GENRE_IMAGES[key];
    const prob = result.prob ?? 0;
    const pct = prob > 1 ? Math.round(Math.min(100, prob)) : Math.round(prob * 100);

    return (
        <div className="rounded-x1 overflow-hidden border border-gray-200 bg-white">
            {imgSrc ? (
                <img src={imgSrc} alt={result.label} className="w-full h-56 object-cover"/>
            ) : (
                <div className="w-full h-56 flex items-center justify-center bg-gray-100">
                    <span className="text-gray-500">No image mapped for "{result.label}"</span>
                </div>
            )}
            <div className="p-4">
                <div className="text-2xl font-bold tracking-tight capitalize">{result.label}</div>
                <div className="mt-3">
                    <div className="mb-1 text-sm text-gray-600">Confidence</div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-black" style={{width: `${pct}`}} />
                    </div>
                </div>
                <div className="mt-1 text-sm font-medium">{pct}%</div>
            </div>
        </div>
    )
}

export default ResultCard