import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import About from './AboutPage';
import Main from './MainPage';
import NotFound from './NotFoundPage';

function Routing() {
  return (
    <Router>
      <div className="header">
        <p>
          <Link to="/main">Home page</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
      </div>

      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default Routing;
