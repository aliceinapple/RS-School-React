import SearchBar from '../components/SearchBar';
import React from 'react';
import CardsBlock from '../components/CardsBlock';

function MainPage() {
  return (
    <div className="main-page">
      <SearchBar name="searchValue" />
      <CardsBlock />
    </div>
  );
}

export default MainPage;
