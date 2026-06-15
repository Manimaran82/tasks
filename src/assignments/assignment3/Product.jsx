import React from 'react'

const ProductCard = ({
  productName,
  productPrice,
  productCategory,
  productBrand,
}) => {
  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6 text-center">
      <h1 className="text-2xl font-bold mb-3">{productName}</h1>
      <p className="text-gray-600">Price: {productPrice}</p>
      <p className="text-gray-600">Category: {productCategory}</p>
      <p className="text-gray-600">Brand: {productBrand}</p>
    </div>
  )
}

const Product = ({ homeName }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div>
        <div className="mb-4 text-center text-xl font-semibold">
          {homeName}
        </div>

        <ProductCard
          productName="iPhone 16"
          productPrice="₹79,900"
          productCategory="Smartphone"
          productBrand="Apple"
        />
      </div>
    </div>
  )
}

export default Product