import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Pages/Home'
import { Route,Routes } from 'react-router-dom'
import MyCart from './Components/Pages/MyCart'
import Products from './Components/Pages/Products'
import AboutUs from './Components/Pages/AboutUs'
import ContactUs from './Components/Pages/ContactUs'
import Login from './Components/Pages/Login'
import Signup from './Components/Pages/Signup'
import Wishlist from './Components/Pages/Wishlist'
import MyAccount from './Components/Pages/MyAccount'
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mycart" element={<MyCart/>}/>
        <Route path="/products" element={<Products/>}/>
        
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/myaccount" element={<MyAccount/>}/>
        
       </Routes>
      
        {/* Your page content */}
        
      
      <Footer />
    </div>
  )
}

export default App
