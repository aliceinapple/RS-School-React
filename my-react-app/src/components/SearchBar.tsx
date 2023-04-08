import { SearchBarProps } from 'interfaces/interfaces';
import React, { useState } from 'react';

function SearchBar(props: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.searchValue(searchValue);
  };

  return (
    <form onSubmit={handleClick}>
      <div className="main-page_search">
        <input type="text" value={searchValue} onChange={handleChange} />
        <button type="submit"></button>
      </div>
    </form>
  );
}

export default SearchBar;
