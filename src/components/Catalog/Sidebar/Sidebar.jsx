import React, { useState } from "react";
import { InputField, InputLabel, SearchButton, SidebarContainer } from "./Sidebar.styled";

import CarBrandDropdown from '../utils/CarBrandDropdown';
import RentalPriceDropdown from '../utils/RentalPriceDropdown';
import MileageRangeInputs from '../utils/MileageRangeInputs';

const Sidebar = ({ onSearch, onBrandChange, onPriceChange, onMileageChange }) => {
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [minMileage, setMinMileage] = useState('');
    const [maxMileage, setMaxMileage] = useState('');

    const handleSearch = () => {
        const searchParams = {
            brand,
            price,
            minMileage,
            maxMileage
        }

        onSearch(searchParams);
    }

    return (
        <SidebarContainer>
            <InputLabel>
                Car brand:
                <InputField type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
            </InputLabel>
            <InputLabel>
                Price / 1 hour:
                <InputField type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </InputLabel>
            <InputLabel>
                Car mileage / km:
                <MileageRangeInputs
                    minMileage={minMileage}
                    maxMileage={maxMileage}
                    onMinMileageChange={(value) => setMinMileage(value)}
                    onMaxMileageChange={(value) => setMaxMileage(value)}
                />
            </InputLabel>
            <SearchButton onClick={handleSearch}>Search</SearchButton>
        </SidebarContainer>
    );
}

export default Sidebar