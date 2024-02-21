import React from 'react'
import { FaStar } from 'react-icons/fa'
import './ProductCard.css';
export const ProductCard = () => {
  const handleAddToCart = () => {

  }

  const handleAddToWishlist = () => {

  }
  return (
    <div className="product-card">
      <div className='image-box'>
        <img src="https://placehold.jp/250x250.png" alt="product-img" />
      </div>
      <div className='product-details'>
        <p className='title'>Shirt</p>
        <p className='description'>Men Regular Fit Solid Spread Collar Casual Shirt</p>
        <div className="rating">3.5<span className='rating-star'><FaStar /></span> </div>
        <div className="price">
          <span className="original-price">$100</span>
          <span className="sale-price">$50</span>
        </div>
        <div className='button-box'>
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={handleAddToWishlist}>Add to Wishlist</button>
        </div>
      </div>
    </div>
  )
}
