import React from "react";
import Hero from "../Components/home components/Hero";

import ProductCard from "../Components/home components/ProductCard"
import CategorySection from "../Components/home components/CategorySection";
import { Link } from "react-router-dom";
function Home() {
  

  const productItems = [
  {
    id: "1",
    title: "Mobile",
    stars: "4.3",
    price: "₹25,999",
    images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYBS6LChJrJFWAe5gSPTblWeSDjebqY6GBd6IfwGIIA&s=10"
  },
  {
    id: "2",
    title: "Watch",
    stars: "4.5",
    price: "₹3,499",
    images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCXCPf7D6gfW6pSGBDedoKZQUPjVVSDNsgtEFHiRzKag&s=10"
  },
  {
    id: "3",
    title: "Headphone",
    stars: "4.6",
    price: "₹2,999",
    images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDr4uN2hRUGNos_T5igjf1sDi4iS57Toffp0o9GFQCOg&s=10"
  },
  {
    id: "4",
    title: "Sneakers",
    stars: "4.4",
    price: "₹4,499",
    images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwkRNLgzQ_o3nNWadVUf6_VeHBIYacF6RUpsPvLpzgww&s=10"
  }
];
  return (
    <main>
      <Link to="/">
      {/* Hero Section */}
      <section>
      <Hero/>
      </section>
      {/* Categories Section */}
      <CategorySection/>
      {/* Featured Products */}
      <div className="flex flex-col justify-center gap-2 p-9">
        <h2 className="text-[24px]">Featured Products</h2>
        <div className="flex  justify-center gap-2 ">
        {productItems.map((items)=>( <ProductCard key={items.id}props={items}/>))}
        </div>
        </div>
        </Link>
    </main>
  );
}

export default Home;