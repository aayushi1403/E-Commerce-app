import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { Route,Routes } from 'react-router-dom'
import MyCart from './Pages/MyCart'
import Products from './Pages/Products'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Wishlist from './Pages/Wishlist'
import MyAccount from './Pages/MyAccount'
import ProductDetails from './Components/home components/ProductDetails'
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mycart" element={<MyCart/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetails />} />
        
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
