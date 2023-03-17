import SearchBar from '../components/SearchBar';
import React, { Fragment } from 'react';
import CardsBlock from '../components/CardsBlock';
import Header from '../components/Header';

class MainPage extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="main-page">
          <SearchBar name="searchValue" />
          <CardsBlock />
        </div>
      </Fragment>
    );
  }
}

export default MainPage;
