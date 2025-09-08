import React from 'react'

const Headline = () => {
  return (
    <div className="text-center mb-8">
        <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight">
            Upload a music file to generate genre!
        </h1>
        <p className="text-white/80 mt-3">
            WAV/MP3 accepted. You'll see a genre image and a confidence score.
        </p>
    </div>
  )
}

export default Headline