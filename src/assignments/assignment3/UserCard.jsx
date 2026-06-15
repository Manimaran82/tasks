import React from 'react'

const UserCardComponent = ({ user }) => {
  // Object Destructuring
  const { name, email, phone, city } = user

  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6 text-center">
      <h1 className="text-2xl font-bold mb-3">{name}</h1>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">Phone: {phone}</p>
      <p className="text-gray-600">City: {city}</p>
    </div>
  )
}

const UserCard = ({ homeName }) => {
  const user = {
    name: "Manimaran",
    email: "manimaran@gmail.com",
    phone: "9876543210",
    city: "Chennai"
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div>
        <div className="mb-4 text-center text-xl font-semibold">
          {homeName}
        </div>

        <UserCardComponent user={user} />
      </div>
    </div>
  )
}

export default UserCard