import AboutPage from '../pages/AboutPage';
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';

function Routing() {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Routing;
