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

  function addtoCart(product)
  {
    const existingItem=cart.find((item)=>item.id==product.id)
    if(existingItem){
      setCart(cart.map(item=>item.id==product.id?{...item,quantity:item.quantity+1}:item)
    )
    }
    else
      {
       setCart([...card,{...product,quantity:1}])
      }
  }

  function removeFromCart(id){
     setCart(cart.filter((item)=>item.id!=id))
  }

  function updateQuantity(id,delta){

  }
  const clearCart=()=>setCart([])
  return (
    <div>
      
    </div>
  )
}

