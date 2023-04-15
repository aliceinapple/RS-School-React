import SearchBar from '../components/SearchBar/SearchBar';
import React, { useCallback, useEffect, useState } from 'react';
import CardsBlock from '../components/Card/CardsBlock';
import { useDispatch, useSelector } from 'react-redux';
import { setDataApi, store } from '../store';

function MainPage() {
  const [error, setError] = useState<Error>();
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const searchText = useSelector(
    (state: ReturnType<typeof store.getState>) => state.search.searchText
  );
  const dataApi = useSelector((state: ReturnType<typeof store.getState>) => state.data.dataApi);

  const getCharacters = useCallback(async () => {
    setIsLoaded(false);
    setError(undefined);

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?name=${searchText ? searchText : ''}`
      );
      const data = await response.json();
      dispatch(setDataApi(data));
      setIsLoaded(true);
    } catch (error) {
      setIsLoaded(true);
      // setError(error);
    }
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
      <CardsBlock dataApi={dataApi} error={error} isLoaded={isLoaded} />
    </div>
  );
}

export default MainPage;
