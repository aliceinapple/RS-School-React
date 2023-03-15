import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './AboutPage';
import Header from './Header';
import MainPage from './MainPage';
import NotFoundPage from './NotFoundPage';

function Routing() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default Routing;
