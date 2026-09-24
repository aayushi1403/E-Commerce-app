import React from "react";
import Hero from "../home components/Hero";
import CategoryCard  from "../home components/CategoryCard"
import ProductCard from "../home components/ProductCard"
function Home() {
  const categoryitems=[
  {
   id:"1",
   title:"electronics",
 images:""  },
  {
    id:"2",
   title:"footwear",
 images:""  },
  {
   id:"3",
   title:"cosmetics",
 images:""  },
  {
    id:"4",
   title:"fashion",
   images:""
  },
  {
    id:"5",
   title:"accesories",
 images:""  },
  {
    id:"6",
   title:"stationery",
 images:""  },
  {
    id:"7",
   title:"households",
 images:""  }]

 
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
      
      {/* Hero Section */}
      <Hero/>
      {/* Categories Section */}
      <div className="flex flex-wrap justify-center gap-2">
        {categoryitems.map((items)=>( <CategoryCard key={items.id} props={items}/>))}
        </div>
+
      {/* Featured Products */}
      <div className="flex justify-center gap-2">
        {productItems.map((items)=>( <ProductCard key={items.id}props={items}/>))}
        </div>
    </main>
  );
}

export default Home;