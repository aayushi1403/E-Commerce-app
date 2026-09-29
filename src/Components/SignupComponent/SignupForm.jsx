import React from 'react'

function SignupForm() {
  return (
    <div className="w-full max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
  
  <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
    Sign Up
  </h1>

  <span className="block text-center text-gray-500 mb-8">
    Create a new account
  </span>

  <div className="flex flex-col gap-5">

    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-gray-700">
        Name
      </label>

      <input
        type="text"
        placeholder="Enter your name"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                   outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition"
      />
    </div>

    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-gray-700">
        Email
      </label>

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                   outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition"
      />
    </div>

    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-gray-700">
        Password
      </label>

      <input
        type="password"
        placeholder="Enter your password"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                   outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition"
      />
    </div>

    <button
      type="submit"
      className="w-full py-3 mt-2 bg-blue-600 text-white font-semibold 
                 rounded-lg hover:bg-blue-700 active:scale-[0.98] 
                 transition duration-200 cursor-pointer"
    >
      Sign Up
    </button>

  </div>
</div>
  )
}

export default SignupForm
