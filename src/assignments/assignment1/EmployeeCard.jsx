import React from 'react'

const EmployeeCard = () => {
  return (
     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Employee Card
        </h1>

        <div className="space-y-4 text-lg">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Employee Name:</span>
            <span>Mani </span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Employee ID:</span>
            <span>EMP1025</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Department:</span>
            <span>Software Development</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Salary:</span>
            <span>₹50,000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard
