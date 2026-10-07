import React from 'react'
import { useState,useEffect,useContext,createContext } from 'react'
import { useAsyncError } from 'react-router-dom';

export function CartContext() {
  const CartContext=createContext();

  return (
    <div>
      
    </div>
  )
}

export default function CartProvider({children}) 
{
  const[cart,setCart]=useState([])
  return (
    <div>
      
    </div>
  )
}

