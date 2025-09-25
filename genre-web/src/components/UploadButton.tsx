import React from 'react'

type Props = {
    loading: boolean;
    onPick: () => void;
    filename?: string;
}

const UploadButton = ({loading, onPick, filename}: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
        <button 
            onClick={onPick}
            disabled={loading}
            className="px-5 py-3 rounded-xl font-semibold shadow hover:shadow-md transition disabled:opacity-50 bg-black"
        >
            {loading ? "Uploading..." : filename ? "Choose another file" : "Choose a file"}
        </button>
        {filename && <div className="text-sm text-gray-700">Selected: {filename}</div>}
    </div>
  )
}

export default UploadButton