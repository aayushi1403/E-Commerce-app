import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Pages/Home'
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1">
        {/* Your page content */}
        <Home/>
      </main>
      <Footer />
    </div>
  )
}

export default App
