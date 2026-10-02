import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/home components/Hero";
import ProductCard from "../Components/home components/ProductCard";
import CategorySection from "../Components/home components/CategorySection";

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