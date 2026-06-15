import React from 'react'

const StudentProfile = () => {
  return (
     <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Student Profile
        </h1>

        <div className="space-y-4 text-lg">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Student Name:</span>
            <span>Mani Maran</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Course:</span>
            <span>Full Stack Development</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">City:</span>
            <span>Chennai</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Institute:</span>
            <span>Softlogic</span>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default StudentProfile
