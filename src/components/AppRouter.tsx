import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Page404 from './pages/Page404';
import Last from './pages/Last';
import Second from './pages/Second';
import Layout from './Layout/Layout';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="second" element={<Second />} />
        <Route path="last" element={<Last />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
