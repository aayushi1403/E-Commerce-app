import React, { use, useState } from 'react'

function Products() {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  const[error,setError]=useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
const [sortBy, setSortBy] = useState("default");
  return (
    <div>
      <h1>Product page</h1>
    </div>
  )
}

export default Products
