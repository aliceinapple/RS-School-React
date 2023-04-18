import SearchBar from '../components/SearchBar/SearchBar';
import React, { useCallback, useEffect, useState } from 'react';
import CardsBlock from '../components/Card/CardsBlock';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Action } from 'interfaces/interfaces';
import { fetchCharacters } from '../requests';

function MainPage() {
  const [error, setError] = useState<Error>();
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch: ThunkDispatch<RootState, undefined, Action> = useDispatch();
  const searchText = useSelector((state: RootState) => state.search.searchText);
  const dataApi = useSelector((state: RootState) => state.data.dataApi);

  const getCharacters = useCallback(() => {
    setIsLoaded(false);
    setError(undefined);

    dispatch(fetchCharacters(searchText))
      .then(() => setIsLoaded(true))
      .catch((error: Error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, [dispatch, searchText]);

  useEffect(() => {
    if (!dataApi) {
      getCharacters();
    } else {
      setIsLoaded(true);
    }
  }, [dataApi, getCharacters]);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getCharacters();
  };

  return (
    <div className="main-page" role="main-page">
      <SearchBar handleSearchSubmit={handleSearchSubmit} />
      <CardsBlock error={error} isLoaded={isLoaded} />
    </div>
  );
}

export default MainPage;
