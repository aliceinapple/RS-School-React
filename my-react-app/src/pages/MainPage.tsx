import SearchBar from '../components/SearchBar';
import React from 'react';
import CardsBlock from '../components/CardsBlock';

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <SearchBar name="searchValue" />
        <CardsBlock />
      </div>
    );
  }
}

export default MainPage;
