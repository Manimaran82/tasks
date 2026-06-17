import React, { useState } from "react";

const Task5 = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-4">
        {isDark ? "Dark Mode" : "Light Mode"}
      </h1>

      <button
        onClick={toggleTheme}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        {isDark ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Task5;