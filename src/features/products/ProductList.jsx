import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './productSlice'

function ProductList() {
    var {products} = useSelector(state=>state.productReducer)
    var dispatch = useDispatch()
    console.log(products)
  return (
    <div>
        <h1>Products</h1>
        {
            products?.map((product)=>{
                return <li>
                    {product.title.slice(0,20)}
                    <button onClick={()=>{dispatch(addToCart(product))}}>Add To Cart</button>
                  </li>
            })
        }
    </div>
  )
}

export default ProductList