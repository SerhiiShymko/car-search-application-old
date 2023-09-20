import React, { useState } from "react";
import { InputField, InputLabel, SearchButton, SidebarContainer } from "./Sidebar.styled";

import CarBrandDropdown from '../../utils/CarBrandDropdown';
import RentalPriceDropdown from '../../utils/RentalPriceDropdown';




const Sidebar = ({ onSearch }) => {
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
                <CarBrandDropdown brand={brand} onBrandChange={setBrand} />
            </InputLabel>
            <InputLabel>
                Price / 1 hour:
                <RentalPriceDropdown price={price} onPriceChange={setPrice} />
            </InputLabel>
            <InputLabel>
                Car mileage / km:
                <InputLabel>
                    <InputField
                        value={minMileage}
                        onChange={(e) => setMinMileage(e.target.value)}
                        placeholder="Min Mileage"
                        type="number" />
                </InputLabel>
                <InputLabel>
                    <InputField
                        value={maxMileage}
                        onChange={(e) => setMaxMileage(e.target.value)}
                        placeholder="Max Mileage"
                        type="number" />
                </InputLabel>
            </InputLabel>
            <SearchButton type="button" onClick={handleSearch}>Search</SearchButton>
        </SidebarContainer>
    );
}

export default Sidebar