import React from 'react';
import { BtnClose, BtnCloseSvg, BtnRental, Container, Img } from './ModalCard.styled';

const ModalCard = ({ advert, closeModal }) => {
    if (!advert) {
        return null;
    }

    const {
        id, year, img, make, model, type, description, fuelConsumption, engineSize,
        accessories, functionalities, rentalConditions, mileage, rentalPrice, rentalCompany, address
    } = advert;


    return (
        <Container>
            <BtnClose onClick={closeModal}>
                <BtnCloseSvg />
            </BtnClose>
            <Img src={img} alt={`${make} ${model}`} width="100%" height="auto" />
            <h2>{make} {model}, {year}</h2>
            <p>{address}</p>
            <p>ID: {id} | Type: {type}</p>
            <p>Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}</p>
            <p>{description}</p>
            <h3>Accessories:</h3>
            <ul>
                {accessories.map((accessory, index) => (
                    <li key={index}>{accessory}</li>
                ))}
            </ul>
            <h3>Functionalities:</h3>
            <ul>
                {functionalities.map((functionality, index) => (
                    <li key={index}>{functionality}</li>
                ))}
            </ul>
            <h3>Rental Conditions:</h3>
            <p>{rentalConditions}</p>
            <p>Mileage: {mileage}</p>
            <p>Price: {rentalPrice}</p>
            <p>Rental Company: {rentalCompany}</p>
            <BtnRental href="tel:+380730000000">Rental car</BtnRental>
        </Container>
    );
};

export default ModalCard;