import { useRef, useState } from 'react'
import './App.css'
import { type ParsedPrediction } from './types';

import Hero from './components/Hero';
import Headline from './components/Headline';
import UploadButton from './components/UploadButton';
import ResultCard from './components/ResultCard';
import { predictGenre } from './api';

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

  async function onFileChange(e: React.ChangeEvent<HTMLInputElement>){
    const file = e.target.files?.[0];
    if (!file) return;
    setFilename(file.name);
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      // const parsed = await predictGenre(file);

      const dummyPrediction: ParsedPrediction = {
        label: 'rock',
        prob: 0.87,
      };

      setResult(dummyPrediction);
    } catch(err: any){
      setError(err?.message ?? "Upload failed")
    } finally {
      setLoading(false);
    }
  }

  const UploadSection = () => (
    <>
      <Headline />
      <div className="rounded-2xl p-6 md:p-8">
        <div className='flex flex-col items-center gap-4'>
          <input 
            ref={inputRef}
            type="file"
            // accept='audio/*'
            className="hidden"
            onChange={onFileChange}
          />

          <UploadButton loading={loading} onPick={triggerPick} filename={filename} />

          {error && (
            <div className="rounded-lg bg-red-50 text-red-700 p-3 border border-red-200">
              {error}
            </div>
          )}
        </div>
      </div>
    </>
  );

  const ResultSection = () => <ResultCard result={result} onReset={() => setResult(null)}/>
 
  return (
    <Hero result={result}>
      <div className="w-full">
        {result ? <ResultSection /> : <UploadSection />}
      </div>
    </Hero>
  )
}

export default App
