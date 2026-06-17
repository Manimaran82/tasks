import React, { useState } from "react";

const Task7 = () => {
  const [user, setUser] = useState(null);

  const loadUser = () => {
    setUser({
      name: "Sudhan",
      city: "Chennai",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={loadUser}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mb-4"
      >
        Load User
      </button>

      {user && (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold">Name: {user.name}</h2>
          <p className="text-lg">City: {user.city}</p>
        </div>
      )}
    </div>
  );
};

export default Task7;