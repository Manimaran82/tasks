import React, { useState } from "react";

const MobileNumber = () => {
  const [mobile, setMobile] = useState(null);

  const loadMobile = () => {
    setMobile(9876543210);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={loadMobile}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mb-4"
      >
        Load Mobile Number
      </button>

      <h2 className="text-2xl font-bold">
        Mobile Number: {mobile}
      </h2>
    </div>
  );
};

export default MobileNumber;