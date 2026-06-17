import React, { useState } from "react";

const Task6 = () => {
  const [show, setShow] = useState(true);

  const toggleContent = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={toggleContent}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mb-4"
      >
        {show ? "Hide" : "Show"}
      </button>

      {show && (
        <p className="text-lg bg-white p-4 rounded-lg shadow-md">
          This is the paragraph content.
        </p>
      )}
    </div>
  );
};

export default Task6;