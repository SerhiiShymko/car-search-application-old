import React, { useEffect, useState } from "react";
import { Container, Details, FavoriteButton, Img, Info, MoreButton, Title } from "./AdvertCard.styled";
import Modal from "components/Modal/Modal";
import ModalCard from "components/ModalCard/ModalCard";


const AdvertCard = ({ advert, updateFavorites }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.includes(advert.id));
    }, [advert.id]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favorites.includes(advert.id)) {
            const updatedFavorites = favorites.filter((favId) => favId !== advert.id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setIsFavorite(false);
        } else {
            const updatedFavorites = [...favorites, advert.id];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setIsFavorite(true);
        }
    };

    if (!advert) {
        return null;
    }

    const {
        id, year, make, model, address, img, accessories, rentalPrice, mileage, rentalCompany,
    } = advert;

    const handleMoreButtonClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Container key={id} >
            <Img src={img} alt={`${make} ${model}`} width="100%" height="auto" />
            <Details>
                <Title>{`${year} ${make} ${model} ${rentalPrice}`}</Title>
                <Info>{address}|</Info>
                <Info>{rentalCompany}|</Info>
                <Info>{accessories}|</Info>
                <Info>{mileage}</Info>
            </Details>
            <MoreButton onClick={handleMoreButtonClick}>Learn more</MoreButton>
            <FavoriteButton onClick={toggleFavorite} >
                <span role="img" aria-label="Heart">{isFavorite ? '❤️' : '🤍'}</span>
            </FavoriteButton>
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <ModalCard advert={advert} />
                    <button onClick={closeModal}>Close Modal</button>
                </Modal>
            )}
        </Container>
    );
};

export default AdvertCard