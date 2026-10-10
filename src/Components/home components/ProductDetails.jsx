import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useState,useEffect } from "react";
import { fetchProductByID } from "../../services/api";

import { useCart } from "../../context/CartContext";
function ProductDetails() {
  const { id } = useParams();
  const {addToCart}=useCart();

  const product = productItems.find((p) => p.id === id);
   const [products,setProducts]=useState([])
     const [loading,setLoading]=useState(true)
      const [error,setError]=useState(null)
      useEffect(()=>{
        const loadData=async()=>{
          try {
            const data=await fetchProductByID();
            setProducts(data)

          } catch (error) {
            setError(error)
          }finally{
            setLoading(false)
          }
          if (id) {
      loadProduct();
    }
        }
      },[id])
  // 1. Guard Clause: If product doesn't exist, exit early
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-xl font-medium text-gray-600">Loading product details...</p>
      </div>
    );
  }
if (!product || error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
        <p className="text-gray-500">The item you're looking for doesn't exist or has been removed.</p>
        <Link
          to="/"
          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  // 2. Main Product Details View
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 flex-1">
      {/* Breadcrumb / Back button */}
      <Link
        to="/"
        className="text-gray-600 hover:text-black transition-colors mb-6 inline-block font-medium"
      >
        &larr; Back to Products
      </Link>

      {/* Product Showcase: 2-column layout on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
        {/* Left: Product Image */}
        <div className="flex items-center justify-center bg-gray-50 rounded-2xl p-6">
          <img
            src={product.images}
            alt={product.title}
            className="w-full max-h-96 object-contain"
          />
        </div>

        {/* Right: Product Information & Actions */}
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 text-yellow-500">
            <span className="font-semibold text-lg">{product.stars}</span>
            <FaStar className="text-lg" />
            <span className="text-sm text-gray-400 ml-2">(120 customer reviews)</span>
          </div>

          {/* Price */}
          <div className="text-3xl font-bold text-gray-900">
            {product.price}
          </div>

          {/* Description placeholder */}
          <p className="text-gray-600 leading-relaxed">
            Experience high performance and premium design. Built with quality materials to ensure durability, reliability, and everyday comfort.
          </p>

          <hr className="my-2 border-gray-100" />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 py-3 px-6 border-2 border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={() => console.log("Buy now:", product.title)}
              className="flex-1 py-3 px-6 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors shadow-md"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;