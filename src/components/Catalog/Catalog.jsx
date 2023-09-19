import React, { useEffect, useState } from 'react';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore'

const Catalog = () => {
  const [adverts, detAdverts] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    // Fetch adverts based on the page
    // Update the adverts state
  }, [page])

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  return (
    <div>
      {/* Display adverts */}
      <ButtonLoadMore onClick={handleLoadMore} />
    </div>
  );
};

export default Catalog