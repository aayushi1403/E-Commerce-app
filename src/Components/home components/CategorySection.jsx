import React from 'react'
import electronics from "../../assets/electronics.jpg";
import footwear from "../../assets/footwear.jpeg";
import cosmetics from "../../assets/cosmetics.jpeg";
import fashion from "../../assets/fashion.jpeg";
import accessories from "../../assets/acessories.jpeg";
import stationery from "../../assets/stationary.jpeg";
import household from "../../assets/household.jpeg";
import CategoryCard from './CategoryCard'
function CategorySection() {

    const categoryitems=[
  {
   id:"1",
   title:"electronics",
 images:electronics  },
  {
    id:"2",
   title:"footwear",
 images:footwear  },
  {
   id:"3",
   title:"cosmetics",
 images:cosmetics },
  {
    id:"4",
   title:"fashion",
   images:fashion
  },
  {
    id:"5",
   title:"accesories",
 images:accessories  },
  {
    id:"6",
   title:"stationery",
 images:stationery  },
  {
    id:"7",
   title:"households",
 images:household  }]
  return (
    <div>
      <section>
        <h1 className="text-[40px]">Categories</h1>
      <div className="flex flex-wrap justify-center gap-2">
        
        {categoryitems.map((items)=>( <CategoryCard key={items.id} props={items}/>))}
        </div>
      </section>
    </div>
  )
}

export default CategorySection
