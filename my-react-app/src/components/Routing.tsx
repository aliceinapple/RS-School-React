import AboutPage from '../pages/AboutPage';
import MainPage from '../pages/MainPage';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import { SetPageTitle } from 'interfaces/interfaces';
import FormPage from '../pages/FormPage';

class Routing extends React.Component<SetPageTitle> {
  render() {
    return (
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<NotFoundPage />} />
      </Routes>
    );
  }
}

export default Routing;
