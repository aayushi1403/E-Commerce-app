import React from 'react'

function SignupForm() {
  return (
    <div>
       <h1>Sign Up</h1>

      <form>
        <input
          type="text"
          placeholder="Enter your name"
        />

        <input
          type="email"
          placeholder="Enter your email"
        />

        <input
          type="password"
          placeholder="Enter your password"
        />

        <button type="submit">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignupForm
