import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import SideBar from '../SideBar/SideBar'

import './ProductList.css'
import { SortBar } from '../SortBar/SortBar'
const ProductList = () => {
  const productCards = Array.from({ length: 20 }, (_, index) => (
    <ProductCard key={index} />  ));
  return (
    <div className='product-list-page'>
      <div className='sidebar'>
      <SideBar/>
      </div>
      <div >
        <div className='sort-bar'>
          <SortBar/>
        </div>
        <div className='products-container'>
      {productCards}
      </div>
      </div>
      
    </div>
  )
}

export default ProductList