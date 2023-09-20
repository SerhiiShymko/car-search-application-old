import React, { useCallback, useEffect, useState } from 'react';
import ButtonLoadMore from '../../components/ButtonLoadMore/ButtonLoadMore'
import { Cards, Container } from './CatalogPage.styled'
import { api } from '../../services/api'
import Sidebar from '../../components/Sidebar/Sidebar';
import AdvertCard from 'components/AdvertCard/AdvertCard';


const CatalogPage = () => {
    const [adverts, setAdverts] = useState([])
    const [page, setPage] = useState(1)
    const [filters, setFilters] = useState({});
    const advertsPerPage = 8

    const fetchAdverts = async () => {
        try {
            const response = await api();
            return response;
        } catch (error) {
            console.error('Error fetching adverts: ', error);
            return [];
        }
    };

    const performSearch = useCallback(async (searchParams) => {
        const { brand, price, minMileage, maxMileage } = searchParams;

        try {
            const response = await fetchAdverts();


            const filteredAdverts = response.filter((advert) => {
                const brandMatch = !brand || advert.make.toLowerCase() === brand.toLowerCase();
                const priceMatch = !price || parseFloat(advert.rentalPrice.replace('$', '')) <= parseFloat(price);
                const minMileageMatch = !minMileage || advert.mileage >= parseInt(minMileage, 10);
                const maxMileageMatch = !maxMileage || advert.mileage <= parseInt(maxMileage, 10);

                return brandMatch && priceMatch && minMileageMatch && maxMileageMatch;
            });

            setAdverts(filteredAdverts);
        } catch (error) {
            console.error('Error filtering adverts: ', error);
        }
    }, []);

    useEffect(() => {
        const fetchAndFilterAdverts = async () => {
            try {
                const response = await fetchAdverts();
                const startIndex = (page - 1) * advertsPerPage
                const endIndex = startIndex + advertsPerPage
                const paginatedAdverts = response.slice(startIndex, endIndex)

                setAdverts(paginatedAdverts);
                performSearch(filters);
            } catch (error) {
                console.error('Error fetching adverts: ', error)
            }
        }

        fetchAndFilterAdverts();
    }, [filters, page, performSearch])

    const handleLoadMore = () => {
        setPage(page + 1)
    }

    const handleSearch = (searchParams) => {
        setFilters(searchParams);
        setPage(1);

    }



    return (
        <Container>
            <Sidebar onSearch={handleSearch} />

            <Cards>
                {adverts.map((advert) => (
                    <AdvertCard key={advert.id} advert={advert} />
                ))}
            </Cards>

            <ButtonLoadMore onClick={handleLoadMore} />
        </Container>
    );
};

export default CatalogPage