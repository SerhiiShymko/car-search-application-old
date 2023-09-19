import React, { useEffect, useState } from 'react';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore'
import { Container } from './Catalog.styled'
// import axios from 'axios';
import { api } from '../../services/api'
import Sidebar from './Sidebar/Sidebar';

// axios.defaults.baseURL = 'https://63ebe5f3be929df00ca4038a.mockapi.io/adverts';

const Catalog = () => {
  const [adverts, setAdverts] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const response = await api();
      } catch (error) {
        console.error('Error feching adverts: ', error)
      }
    }

    fetchAdverts()
  }, [page])

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  const handleSearch = (searchParams) => {
    // Handle search with the provided parameters
    console.log('Search parameters:', searchParams);
  }

  return (
    <Container>
      <Sidebar onSearch={handleSearch} />
      {/* Display adverts */}
      {adverts.map((advert) => (
        <div key={advert.id}>
          {/* Display advert information */}
        </div>
      ))}
      <ButtonLoadMore onClick={handleLoadMore} />
    </Container>
  );
};

export default Catalog