import React, { useState } from "react";

const Task3 = () => {
  const [age, setAge] = useState(18);

  const increaseAge = () => {
    setAge(age + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Age: {age}
        </h1>

        <button
          onClick={increaseAge}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Increase Age
        </button>
      </div>
    </div>
  );
};

export default Task3;