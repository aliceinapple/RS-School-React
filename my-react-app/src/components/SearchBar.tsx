import { SearchBarProps } from 'interfaces/interfaces';
import React, { useEffect, useState } from 'react';

function SearchBar(props: SearchBarProps) {
  const [searchValue, setSearchValue] = useState(localStorage.getItem(props.name) || '');

  useEffect(() => {
    localStorage.setItem(props.name, searchValue);
  }, [props.name, searchValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="main-page_search">
      <input type="text" name={props.name} value={searchValue} onChange={handleChange} />
      <button></button>
    </div>
  );
}

export default SearchBar;
