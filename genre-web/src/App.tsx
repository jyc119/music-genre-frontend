import { useRef, useState } from 'react'
import './App.css'
import { type ParsedPrediction } from './types';

import Hero from './components/Hero';
import Headline from './components/Headline';
import UploadButton from './components/UploadButton';

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [count, setCount] = useState(0)
  const [filename, setFilename] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ParsedPrediction | null>(null);
 
  return (
    <Hero>
      <div className="w-full max-w-3xl">
        <Headline />
        <div className="rounded-2xl shadow-xl p-6 md:p-8">
          <div className='flex flex-col items-center gap-4'>
            <input 
              ref={inputRef}
              type="file"
              accept='audio/*'
              className="hidden"
              // onChange={onFileChange}
            />

            

          </div>
        </div>
      </div>
    </Hero>
  )
}

export default App
