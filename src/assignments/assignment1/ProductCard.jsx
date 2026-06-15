import React from 'react'

const ProductCard = () => {
  return (
      <>
     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Product Card
        </h1>

        <div className="space-y-4 text-lg">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Product Name:</span>
            <span>Wireless Headphones</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Product Price:</span>
            <span>₹2,999</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Product Category:</span>
            <span>Electronics</span>
          </div>

          <div>
            <p className="font-semibold mb-2">
              Product Description:
            </p>
            <p className="text-gray-600 text-base">
              High-quality wireless headphones with noise cancellation,
              Bluetooth connectivity, and up to 20 hours of battery life.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductCard
