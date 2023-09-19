import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import Catalog from './Catalog/Catalog';
import Favorites from './Favorites/Favorites';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}
