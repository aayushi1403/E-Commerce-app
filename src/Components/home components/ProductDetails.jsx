import React from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="p-8 max-w-4xl mx-auto flex-1">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">
        &larr; Back to Home
      </Link>
      <div className="border border-gray-200 p-6 rounded-2xl bg-white shadow-sm mt-4">
        <h1 className="text-2xl font-bold mb-2">Product Details</h1>
        <p className="text-gray-600">
          Showing details for Product ID: <span className="font-mono font-bold text-black">{id}</span>
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Next step: Replace this static text by fetching full product data matching this ID.
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;