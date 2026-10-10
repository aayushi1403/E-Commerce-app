import React from "react";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
function ProductCard({ product }) {
  const {addToCart}=useCart();
  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevents navigating to product details when clicking 'Add to Cart'
    // console.log("Added to cart:", product.title);
    addToCart(product)
  };
  return (
    <div className="flex flex-col items-center justify-between p-4 border border-gray-300 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white h-full">
      <img
       
        src={product.thumbnail}
        alt={product.title}
         onError={(e) => { e.currentTarget.src = 
          "[https://placehold.co/300x300?text=Product](https://placehold.co/300x300?text=Product)"; }}
        className="w-40 h-40 object-contain my-2"
      />
      <span className="font-semibold text-lg">{product.title}</span>
      <div className="flex items-center gap-1 text-yellow-500">
        <span>{product.rating}</span>
        <FaStar />
      </div>
      <span className="font-bold text-gray-800 text-lg">{product.price}</span>
      <button
        onClick={handleAddToCart}
        className="mt-2 w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;