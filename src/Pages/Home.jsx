import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/home components/Hero";
import ProductCard from "../Components/home components/ProductCard";
import CategorySection from "../Components/home components/CategorySection";
import { fetchProducts } from "../services/api";
function Home() {
  const [products,setProducts]=useState([])
   const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
      
    
        const loadData= async()=>{
            try {
              const data=await fetchProducts();
              setProducts(data); 
            } catch (error) {
              setError(error)
            }
            finally{
              setLoading(false)
            }
        }
       loadData();
    },[])
  return (
    <main className="flex-1">
      <section>
        <Hero />
      </section>

      <CategorySection />

      <div className="flex flex-col justify-center gap-4 p-8">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        
        {
          loading?<div className="text-center py-10 font-medium">Loading products...</div>:console.log("not loading")
        } 
        {
          !error?console.log("error"):<div className="text-center text-red-500 py-10">Failed to load products.</div>
        }
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((item) => (
            <Link key={item.id} to={`/products/${item.id}`} className="no-underline text-inherit">
              <ProductCard product={item} />
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}

export default Home;