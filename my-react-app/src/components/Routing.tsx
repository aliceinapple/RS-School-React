import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './AboutPage';
import MainPage from './MainPage';
import NotFoundPage from './NotFoundPage';

function Routing() {
  return (
    <Router>
      <div className="header">
        <p>
          <Link to="/main">Main</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
      </div>

      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default Routing;
