import React from "react";
import Hero from "../home components/Hero";
import CategoryCard  from "../home components/CategoryCard"
import ProductCard from "../home components/ProductCard"
function Home() {
  const categoryitems=[
  {
   id:"1",
   title:"electronics",
   images:'https://in.pinterest.com/pin/85920305386721836/'
  },
  {
    id:"2",
   title:"footwear",
   images:'https://in.pinterest.com/pin/300474606411446486/'
  },
  {
   id:"3",
   title:"cosmetics",
   images:'https://in.pinterest.com/pin/124130533476566178/'
  },
  {
    id:"4",
   title:"fashion",
   images:'https://in.pinterest.com/pin/1102959765022179841/'
  },
  {
    id:"5",
   title:"accesories",
   images:'https://in.pinterest.com/pin/1066930967995011337/'
  },
  {
    id:"6",
   title:"stationary",
   images:'https://in.pinterest.com/pin/184366178492328585/'
  },
  {
    id:"7",
   title:"households",
   images:'https://in.pinterest.com/pin/138274651055571450/'
  }]
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
      
+
      {/* Featured Products */}
      {productItems.map((items)=>( <ProductCard key={items.id}props={items}/>))}
    </main>
  );
}

export default Home;