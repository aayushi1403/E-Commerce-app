import React from 'react'
import electronics from "../../assets/electronics.jpg";
import footwear from "../../assets/footwear.jpeg";
import cosmetics from "../../assets/cosmetics.jpeg";
import fashion from "../../assets/fashion.jpeg";
import accessories from "../../assets/acessories.jpeg";
import stationery from "../../assets/stationary.jpeg";
import household from "../../assets/household.jpeg";
import CategoryCard from './CategoryCard'
import { useRef } from 'react';
import './category.css'
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


  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  return (
    <section className="categories-section">
      <h2 className='text-[24px]'>Categories</h2>

      <div className="category-slider-wrapper">

        <button className="slider-btn left" onClick={slideLeft}>
          ←
        </button>

        <div className="category-container" ref={sliderRef}>
          {categoryitems.map((category) => (
            <CategoryCard
              key={category.id}
              props={category}
            />
          ))}
        </div>

        <button className="slider-btn right" onClick={slideRight}>
          →
        </button>

      </div>
    </section>
  )
}

export default CategorySection
