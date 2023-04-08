import SearchBar from '../components/SearchBar';
import React, { useEffect, useState } from 'react';
import CardsBlock from '../components/CardsBlock';
import { IApi } from 'interfaces/interfaces';

function MainPage() {
  const [dataApi, setDataApi] = useState<IApi | null>(null);
  const [error, setError] = useState<Error>();
  const [isLoaded, setIsLoaded] = useState(false);

  const getCharacters = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await response.json();
    setIsLoaded(true);
    setDataApi((prevState) => ({
      ...prevState,
      results: data.results,
      info: data.info,
    }));
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const searchValue = (value: string) => {
    fetch(`https://rickandmortyapi.com/api/character?name=${value}`)
      .then((data) => data.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDataApi(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  return (
    <div className="main-page">
      <SearchBar searchValue={searchValue} />
      <CardsBlock dataApi={dataApi} error={error} isLoaded={isLoaded} />
    </div>
  );
}

export default MainPage;
