import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
// import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
    </Routes>
  );
}
