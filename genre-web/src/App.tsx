import { useRef, useState } from 'react'
import './App.css'
import { type ParsedPrediction } from './types';

import Hero from './components/Hero';
import Headline from './components/Headline';
import UploadButton from './components/UploadButton';
import ResultCard from './components/ResultCard';

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [count, setCount] = useState(0)
  const [filename, setFilename] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ParsedPrediction | null>(null);

  function triggerPick(){
    inputRef.current?.click();
  }
 
  return (
    <Hero>
      <div className="w-full">
        <Headline />
        <div className="rounded-2xl p-6 md:p-8">
          <div className='flex flex-col items-center gap-4'>
            <input 
              ref={inputRef}
              type="file"
              accept='audio/*'
              className="hidden"
              // onChange={onFileChange}
            />

            <UploadButton loading={loading} onPick={triggerPick} filename={filename} />

            {error && (
              <div className="rounded-lg bg-red-50 text-red-700 p-3 border border-red-200">
                {error}
              </div>
            )}

            {result ? (
              <div className="w-full mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResultCard result={result}/>
              </div>
            ) : (
              !error && !loading && (
                <div className="text-2xl text-white">Pick a file to get started!</div>
              )
            )}
          </div>
        </div>
      </div>
    </Hero>
  )
}

export default App
