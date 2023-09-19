import React from "react";

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

export default MileageRangeInputs