import React, { useRef } from "react";

const Toggle = () => {
  const textRef = useRef();
  const btnRef = useRef();

  const handleToggle = () => {
    if (textRef.current.style.display === "none") {
      textRef.current.style.display = "block";
      btnRef.current.innerText = "ON";
      btnRef.current.className =
        "px-6 py-2 bg-green-500 text-white rounded";
    } else {
      textRef.current.style.display = "none";
      btnRef.current.innerText = "OFF";
      btnRef.current.className =
        "px-6 py-2 bg-red-500 text-white rounded";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        ref={btnRef}
        onClick={handleToggle}
        className="px-6 py-2 bg-green-500 text-white rounded"
      >
        ON
      </button>

      <h1
        ref={textRef}
        className="mt-6 text-3xl font-bold"
      >
        React Toggle
      </h1>
    </div>
  );
};

export default Toggle;