import React from 'react'

const EmployeeCard = ({
  employeeName,
  employeeId,
  department,
  salary,
  experience,
}) => {
  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6 text-center">
      <h1 className="text-2xl font-bold mb-3">{employeeName}</h1>
      <p className="text-gray-600">Employee ID: {employeeId}</p>
      <p className="text-gray-600">Department: {department}</p>
      <p className="text-gray-600">Salary: {salary}</p>
      <p className="text-gray-600">Experience: {experience}</p>
    </div>
  )
}

const Employee = ({ homeName }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div>
        <div className="mb-4 text-center text-xl font-semibold">
          {homeName}
        </div>

        <EmployeeCard
          employeeName="Manimaran"
          employeeId="EMP1024"
          department="Full Stack Development"
          salary="₹45,000"
          experience="2 Years"
        />
      </div>
    </div>
  )
}

export default Employee