import React, { useState } from 'react';

const Sidebar = () => {
  // State variables for filter options
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGender, setSelectedGender] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedOffers, setSelectedOffers] = useState([]);
  const [selectedAvailabilities, setSelectedAvailabilities] = useState([]);

  // Sample data for filters
  const categories = ['Category 1', 'Category 2', 'Category 3'];
  const genders = ['Male', 'Female', 'Other'];
  const brands = ['Brand 1', 'Brand 2', 'Brand 3'];
  const discounts = ['10% off', '20% off', '30% off'];
  const ratings = ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'];
  const offers = ['Free Shipping', 'Buy 1 Get 1', 'Special Offer'];
  const availabilities = ['In Stock', 'Out of Stock', 'Pre-order'];

  // Handler functions for filters
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleGenderChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedGender([...selectedGender, value]);
    } else {
      setSelectedGender(selectedGender.filter((gender) => gender !== value));
    }
  };

  const handlePriceRangeChange = (event) => {
    setPriceRange({ ...priceRange, [event.target.name]: event.target.value });
  };

  const handleBrandChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedBrands([...selectedBrands, value]);
    } else {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== value));
    }
  };

  const handleDiscountChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedDiscounts([...selectedDiscounts, value]);
    } else {
      setSelectedDiscounts(selectedDiscounts.filter((discount) => discount !== value));
    }
  };

  const handleRatingChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedRatings([...selectedRatings, value]);
    } else {
      setSelectedRatings(selectedRatings.filter((rating) => rating !== value));
    }
  };

  const handleOfferChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOffers([...selectedOffers, value]);
    } else {
      setSelectedOffers(selectedOffers.filter((offer) => offer !== value));
    }
  };

  const handleAvailabilityChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedAvailabilities([...selectedAvailabilities, value]);
    } else {
      setSelectedAvailabilities(selectedAvailabilities.filter((availability) => availability !== value));
    }
  };

  return (
    <div className="sidebar">
      {/* Category Filter */}
      <div>
        <h3>Categories</h3>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Gender Filter */}
      <div>
        <h3>Gender</h3>
        <select value={selectedCategory} onChange={handleCategoryChange}>
        {genders.map((gender, index) => (
          <div key={index}>
              <option key={index} value={gender}>
              <input
              type="checkbox"
              value={gender}
              checked={selectedGender.includes(gender)}
              onChange={handleGenderChange}
            />
              </option>
            
            <label>{gender}</label>
          </div>
        ))}
         </select>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3>Price Range</h3>
        <input
          type="range"
          min={0}
          max={100}
          value={priceRange.max}
          onChange={handlePriceRangeChange}
        />
        <span>Min: {priceRange.min}</span>
        <span>Max: {priceRange.max}</span>
      </div>

      {/* Brand Filter */}
      <div>
        <h3>Brands</h3>
        <select value={selectedCategory} onChange={handleCategoryChange}>

        {brands.map((brand, index) => (
           <option key={index} value={brand}>
          <div key={index}>
            <input
              type="checkbox"
              value={brand}
              checked={selectedBrands.includes(brand)}
              onChange={handleBrandChange}
            />
            <label>{brand}</label>
           
          </div>
          </option>
        ))}
        </select>
      </div>

      {/* Discount Filter */}
      <div>
        <h3>Discounts</h3>
        <select value={selectedCategory} onChange={handleCategoryChange}>
        {discounts.map((discount, index) => (
           <option key={index} value={discount}>
          <div key={index}>
            <input
              type="checkbox"
              value={discount}
              checked={selectedDiscounts.includes(discount)}
              onChange={handleDiscountChange}
            />
            <label>{discount}</label>
          </div>
          </option>
        ))}
        </select>
      </div>

      {/* Rating Filter */}
      <div>
        <h3>Ratings</h3>
        <select value={selectedCategory} onChange={handleCategoryChange}>
        {ratings.map((rating, index) => (
          <option key={index} value={rating}>
          <div key={index}>
            <input
              type="checkbox"
              value={rating}
              checked={selectedRatings.includes(rating)}
              onChange={handleRatingChange}
            />
            <label>{rating}</label>
          </div>
          </option>
        
        ))}
          </select>
      </div>

      {/* Offer Filter */}
      <div>
        <h3>Offers</h3>
        <select value={selectedCategory} onChange={handleCategoryChange}>
        {offers.map((offer, index) => (
           <option key={index} value={offer}>
          <div key={index}>
            <input
              type="checkbox"
              value={offer}
              checked={selectedOffers.includes(offer)}
              onChange={handleOfferChange}
            />
            <label>{offer}</label>
          </div>
          </option>
        ))}
        </select>
      </div>

      {/* Availability Filter */}
      <div>
        <h3>Availability</h3>
        <select value={selectedCategory} onChange={handleCategoryChange}>
        {availabilities.map((availability, index) => (
          <option key={index} >
          <div key={index}>
            <input
              type="checkbox"
              value={availability}
              checked={selectedAvailabilities.includes(availability)}
              onChange={handleAvailabilityChange}
            />
            <label>{availability}</label>
          </div>
          </option>
        ))}
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
