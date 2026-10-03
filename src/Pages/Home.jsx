import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/home components/Hero";
import ProductCard from "../Components/home components/ProductCard";
import CategorySection from "../Components/home components/CategorySection";
import { productItems } from "../data/Products";
function Home() {
  
  return (
    <main className="flex-1">
      <section>
        <Hero />
      </section>

      <CategorySection />

      <div className="flex flex-col justify-center gap-4 p-8">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {productItems.map((item) => (
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