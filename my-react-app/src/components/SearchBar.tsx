import { SearchBarProps } from 'interfaces/interfaces';
import React, { useState } from 'react';

function SearchBar(props: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleClick = () => {
    props.searchValue(searchValue);
  };

  return (
    <div className="main-page_search">
      <input type="text" value={searchValue} onChange={handleChange} />
      <button onClick={handleClick}></button>
    </div>
  );
}

export default SearchBar;
