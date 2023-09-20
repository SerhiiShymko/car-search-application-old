import React from "react";
import styled from 'styled-components';

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

const RentalPriceDropdown = ({ onPriceChange }) => {
    const prices = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];

    return (
        <StyledSelect onChange={(e) => onPriceChange(parseInt(e.target.value))}>
            <StyledOption value="">To $</StyledOption>
            {prices.map((price) => (
                <StyledOption key={price} value={price}>
                    {price}
                </StyledOption>
            ))}
        </StyledSelect>
    )
}

export default RentalPriceDropdown