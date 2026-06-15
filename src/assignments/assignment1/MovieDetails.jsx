import React from 'react'

const MovieDetails = () => {
  return (
     <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h1 className="text-3xl font-bold text-center text-red-700 mb-6">
          Movie Details
        </h1>

        <div className="space-y-4 text-lg">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Movie Name:</span>
            <span>Leo</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Hero Name:</span>
            <span>Vijay</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Director Name:</span>
            <span>Lokesh Kanagaraj</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Release Year:</span>
            <span>2023</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MovieDetails
