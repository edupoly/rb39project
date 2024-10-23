import React from 'react'
import { useGetProductsQuery } from '../../services/products'

function Newproducts() {
    var {isLoading,data}=useGetProductsQuery();
    console.log(isLoading,data)
  return (
    <div>
        <h1>Newproducts</h1>
        {
            isLoading && <h2>Aagu its getting ready....</h2>
        }
        {
            !isLoading && data.map((product)=>{
                return <li>{product.title}</li>
            })
        }
    </div>
  )
}

export default Newproducts
// post(C),get(R),put(U),delete(D)