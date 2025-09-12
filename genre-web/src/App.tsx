import { useState } from 'react'
import './App.css'
import { type ParsedPrediction } from './types';

import Hero from './components/Hero';
import Headline from './components/Headline';

function App() {
  const [count, setCount] = useState(0)
  const [filename, setFilename] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ParsedPrediction | null>(null);
 
  return (
    <Hero>
      <div className="w-full max-w-3xl">
        <Headline />
      </div>
    </Hero>
  )
}

export default App
