import React from "react";
import Hero from "../home components/Hero";
import CategoryCard  from "../home components/CategoryCard"
import ProductCard from "../home components/ProductCard"
function Home() {
  const categoryitems=[
  {
   id:"1",
   title:"electronics",
   images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsaoQuJC1PP0UCGRquFHn1t9Ex5fecqVAaysUWWQEpA&s=10"
  },
  {
    id:"2",
   title:"footwear",
   images:"https://www.indiamart.com/proddetail/foot-wears-6617092088.html?srsltid=AU7gw4WANdclDVX2dPiodjPTpd2W7T2c7KEmAmsfqYaTGeDlLosra7ue"
  },
  {
   id:"3",
   title:"cosmetics",
   images:"https://www.google.com/imgres?q=cosmetics&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61FeJFhmRoL._AC_UF350%2C350_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FAMIT-GELLERY-Eyeshadow-Cosmetics-Collection%2Fdp%2FB0H4GTTXH5&docid=ncr68Ay0TPgmdM&tbnid=MDvyaT3uTrWwCM&vet=12ahUKEwju366trYWXAxXQxjgGHTkrErMQnPAOegQIThAA..i&w=350&h=313&hcb=2&ved=2ahUKEwju366trYWXAxXQxjgGHTkrErMQnPAOegQIThAA"
  },
  {
    id:"4",
   title:"fashion",
   images:"https://www.google.com/imgres?q=fashion&imgurl=https%3A%2F%2Fmyfashionroad.com%2Fwp-content%2Fuploads%2F2024%2F04%2Fvarsha-fashion-maya-new-designs-muslin-ladies-dress-catalog-suppliers-0-2024-04-18_12_12_48-scaled.jpg&imgrefurl=https%3A%2F%2Fmyfashionroad.com%2Fproduct%2Fvarsha-fashion-maya-new-designs-muslin-ladies-dress-my-03%2F%3Fsrsltid%3DAU7gw4U8P-8r4Wd1rEM3UM68GMlDscu9SuJS-VMulf1-wPhBFkttP6s3&docid=mTSa-84fK57nTM&tbnid=D285s7-QfXL1PM&vet=12ahUKEwj6lf-0rYWXAxWGSmwGHcuKON0QnPAOegQINhAA..i&w=1829&h=2560&hcb=2&ved=2ahUKEwj6lf-0rYWXAxWGSmwGHcuKON0QnPAOegQINhAA"
  },
  {
    id:"5",
   title:"accesories",
  images:"https://www.google.com/imgres?q=accessories&imgurl=http%3A%2F%2Fpanaxmart.com%2Fcdn%2Fshop%2Farticles%2FJewelry-laydown-two.jpg%3Fv%3D1695801014&imgrefurl=https%3A%2F%2Fpanaxmart.com%2Fblogs%2Fnews%2Fthe-special-importance-of-accessories-in-clothing%3Fsrsltid%3DAU7gw4VsgI9YAJNig5_uxo_A57P6SNn0K0TUShS4LKGZ22Qjd7A8THIc&docid=alNPO2ABzU-JJM&tbnid=5gubM1hCL8QLvM&vet=12ahUKEwjAjNq7rYWXAxWrSGwGHThFC-sQnPAOegQIPxAA..i&w=4432&h=2955&hcb=2&ved=2ahUKEwjAjNq7rYWXAxWrSGwGHThFC-sQnPAOegQIPxAA"
  },
  {
    id:"6",
   title:"stationery",
   images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dsHilKavHTRm6zc7M_8dpJqpNRVIpfIskb-zziRc9Q&s=10"
  },
  {
    id:"7",
   title:"households",
   images:"https://www.google.com/imgres?q=household%20items&imgurl=https%3A%2F%2Fmedia.worldofinteriors.com%2Fphotos%2F65ccefdc8ad8023d2304113a%2F4%3A3%2Fw_2560%252Cc_limit%2FWoI-ObjectsofUse-CoverImage.jpg&imgrefurl=https%3A%2F%2Fwww.worldofinteriors.com%2Fstory%2Fuseful-household-objects&docid=hAwESn3Nj1tz0M&tbnid=JFIJlZEeSxn2wM&vet=12ahUKEwjrl-DMrYWXAxUASGwGHZGWGQcQnPAOegQISRAA..i&w=2560&h=1920&hcb=2&ved=2ahUKEwjrl-DMrYWXAxUASGwGHZGWGQcQnPAOegQISRAA"
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