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

export default CarBrandDropdown;