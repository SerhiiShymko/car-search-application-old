import React from "react";
import { Container, Details, Img, Info, MoreButton, Title } from "./AdvertCard.styled";

const AdvertCard = ({ advert }) => {
    if (!advert) {
        return null;
    }

    const {
        id, year, brand, model, type, img, description, rentalPrice, mileage,
    } = advert;

    return (
        <Container key={id} >
            <Img src={img} alt={`${brand} ${model}`} width="100%" height="auto" />
            <Details>
                <Title>{`${year} ${brand} ${model} ${rentalPrice}`}</Title>
                <Info>Type: {type}</Info>
                <Info>Description: {description}</Info>
                <Info>Mileage: {mileage}</Info>
            </Details>
            <MoreButton ></MoreButton>
        </Container>
    );
};

export default AdvertCard