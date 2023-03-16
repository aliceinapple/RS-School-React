import AboutPage from '../pages/AboutPage';
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
