import React, { useEffect, useState } from "react";
import AdvertCard from "components/AdvertCard/AdvertCard";
import ButtonLoadMore from "components/ButtonLoadMore/ButtonLoadMore";
import Sidebar from "components/Sidebar/Sidebar";
import { Cards, Container } from "pages/CatalogPage/CatalogPage.styled";



const FavoritesPage = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    const updateFavorites = () => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    };

    return (
        <Container>
            <Sidebar />

            <Cards>
                {favorites.map((advertId) => (
                    <AdvertCard key={advertId} advert={advertId} updateFavorites={updateFavorites} />
                ))}
            </Cards>

            <ButtonLoadMore />
        </Container>
    );
};

export default FavoritesPage;