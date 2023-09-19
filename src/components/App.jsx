import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import Catalog from './Catalog/Catalog';
import Advertisements from './Advertisements/Advertisements';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="catalog" element={<Catalog />} />
      <Route path="favorites" element={<Advertisements />} />
    </Routes>
  );
}
