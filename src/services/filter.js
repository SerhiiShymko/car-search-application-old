import React from "react";

const CarBrandDropdown = ({ brands, onBrandChange }) => {
    return (
        <select onChange={(e)=>onBrandChange(e.target.value)}>
            <option value="">All Brands</option>
            {brands.map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
                ))}
        </select>
    )
}

const RentalPriceDropdown = ({ onPriceChange }) => {
    const prices = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    return (
        <select onChange={(e) => onPriceChange(parseInt(e.target.value))}>
            <option value="">All Prices</option>
            {prices.map((price) => (
                <option key={price} value={price}>
                    {price === 0 ? 'Any Price' : `$${price}`}
                </option>
            ))}
        </select>
    )
}

const MileageRangeInputs = ({ minMileage, maxMileage, onMinMileageChange, onMaxMileageChange }) => {
    return (
      <div>
      <label>
        Min Mileage:
        <input type="number" value={minMileage} onChange={(e) => onMinMileageChange(e.target.value)} />
      </label>
      <label>
        Max Mileage:
        <input type="number" value={maxMileage} onChange={(e) => onMaxMileageChange(e.target.value)} />
      </label>
    </div>
 )   
}

