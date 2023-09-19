import React from "react";

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

export default RentalPriceDropdown