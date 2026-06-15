import React from 'react'

const CompanyInfo = () => {
  return (
     <>
     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Company Information
        </h1>

        <div className="space-y-4 text-lg">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Company Name:</span>
            <span>OpenAI</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Location:</span>
            <span>San Francisco, USA</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Founder:</span>
            <span>Sam Altman</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Established Year:</span>
            <span>2015</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CompanyInfo
