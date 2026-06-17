import React, { useState } from "react";

const Task8 = () => {
  const [product, setProduct] = useState(undefined);

  const Task8 = () => {
    setProduct({
      id: 1,
      name: "Laptop",
      price: 50000,
      brand: "Dell",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={loadProduct}
        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 mb-4"
      >
        Load Product
      </button>

      {product && (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p>ID: {product.id}</p>
          <p>Brand: {product.brand}</p>
          <p>Price: ₹{product.price}</p>
        </div>
      )}
    </div>
  );
};

export default Task8;