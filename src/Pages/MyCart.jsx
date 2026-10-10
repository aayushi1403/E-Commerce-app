import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function MyCart() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
    totalItems,
  } = useCart();

  // 1. Empty State
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 p-6">
        <h2 className="text-3xl font-bold text-gray-800">Your Cart is Empty</h2>
        <p className="text-gray-500">
          Looks like you haven't added any items to your cart yet.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  // 2. Populated State (Two Columns)
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Shopping Cart ({totalItems} items)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column (Items List) */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white border border-gray-200 rounded-2xl gap-4 shadow-sm"
            >
              {/* Product Image & Info */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/150x150?text=Product";
                  }}
                  className="w-20 h-20 object-contain rounded-lg bg-gray-50 p-2"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">₹{item.price} each</p>
                  <p className="font-bold text-gray-900 mt-1">
                    Line Total: ₹{item.price * item.quantity}
                  </p>
                </div>
              </div>

              {/* Quantity Controls & Remove */}
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 font-semibold text-gray-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column (Order Summary Card) */}
        <div className="lg:col-span-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
          <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>

          <div className="flex justify-between text-gray-600">
            <span>Subtotal ({totalItems} items)</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>{totalPrice > 1000 ? "FREE" : "₹99"}</span>
          </div>

          <hr className="border-gray-200" />

          <div className="flex justify-between text-xl font-bold text-gray-900">
            <span>Total</span>
            <span>
              ₹{totalPrice > 1000 ? totalPrice : totalPrice + 99}
            </span>
          </div>

          <button
            onClick={() =>
              alert("Order placed successfully! Thank you for shopping.")
            }
            className="w-full py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors mt-2"
          >
            Proceed to Checkout
          </button>

          <button
            onClick={clearCart}
            className="text-sm text-red-500 hover:underline text-center"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyCart;