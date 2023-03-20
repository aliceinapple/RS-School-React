import AboutPage from '../pages/AboutPage';
import MainPage from '../pages/MainPage';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import { SetPageTitle } from 'interfaces/interfaces';

class Routing extends React.Component<SetPageTitle> {
  render() {
    this.props.setCurrentPageTitle(location.pathname.slice(1));
    return (
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<NotFoundPage />} />
      </Routes>
    );
  }
}

export default Routing;
