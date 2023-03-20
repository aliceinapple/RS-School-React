import React from 'react';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';
import Header from 'components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
