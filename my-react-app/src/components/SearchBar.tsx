import { SearchBarProps } from 'interfaces/interfaces';
import React, { useEffect, useState } from 'react';

function SearchBar(props: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem('searchValue');
    if (storedValue) {
      setSearchValue(storedValue);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('searchValue', searchValue);
    props.searchValue(searchValue);
  };

  return (
    <form onSubmit={handleClick} role="form">
      <div className="main-page_search">
        <input type="text" value={searchValue} onChange={handleChange} />
        <button type="submit"></button>
      </div>
    </form>
  );
}

export default SearchBar;
