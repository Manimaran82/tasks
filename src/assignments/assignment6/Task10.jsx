import React, { useState } from "react";

const Task10 = () => {
  const [salary, setSalary] = useState(25000);

  const increaseSalary = () => {
    setSalary(salary + 5000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Salary: ₹{salary}
        </h1>

        <button
          onClick={increaseSalary}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
        >
          Increase Salary
        </button>
      </div>
    </div>
  );
};

export default Task10;