import React from "react";
import styled from 'styled-components';
import brands from '../data/makes.json'

const StyledSelect = styled.select`
display:flex;
	flex-direction:column;
   width: 150px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  color: #121417;
  font-size: 18px;
  font-style: normal;
`;

const StyledOption = styled.option`
   display: block;
  padding: 14px 18px;
  border-radius: 14px;
  border: medium;
  background: rgb(247, 247, 251);
  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11111;
  
`;

const CarBrandDropdown = ({ brand, onBrandChange }) => {


    return (
      
        <StyledSelect value={brand} onChange={(e) => onBrandChange(e.target.value)}>
            <StyledOption key="all" value="">Enter the text</StyledOption>
            {brands.map((brand, index) => (
                <StyledOption key={index} value={brand}>
                    {brand}
                </StyledOption>
            ))}
            </StyledSelect>
           
    );
}

export default CarBrandDropdown;

