const url="https://api.freeapi.app/api/v1/public/randomproducts"
export async function fetchProducts() {
  try {
    const response=await fetch(`${url}?page=1&limit=10`)
    const data =await response.json()
    return data.data.data;
    
  } catch (error) {
    console.log("error in fetch products")
  }
  
}
export async function fetchProductByID(id) {
  try {
    const response=await fetch(`${url}/${id}`)
    const data =await response.json()
    return data.data;
    
  } catch (error) {
    console.log("error in fetch products")
  }
  
}