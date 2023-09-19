import React, { useState } from "react";
import { InputField, InputLabel, SearchButton, SidebarContainer } from "./Sidebar.styled";

const Sidebar = ({ onSearch }) => {
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [mileage, setMileage] = useState('')

    const handleSearch = () => {
        const searchParams = {
            brand, price, mileage,
        }
        // Pass the search parameters to the parent component
        onSearch(searchParams);
    }

    return (
        <SidebarContainer>
            <InputLabel>
                Car brand:
                <InputField type="text" value={brand} onChange={(e) => onBrandChange(e.target.value)} />
            </InputLabel>
            <InputLabel>
                Price / 1 hour:
                <InputField type="text" value={price} onChange={(e) => onPriceChange(e.target.value)} />
            </InputLabel>
            <InputLabel>
                Car mileage / km:
                <InputField type="text" value={mileage} onChange={(e) => onMileageChange(e.target.value)} />
            </InputLabel>
            <SearchButton onClick={handleSearch}>Search</SearchButton>
        </SidebarContainer>
    );
}

export default Sidebar