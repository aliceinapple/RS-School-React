import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setSearchText } from '../../store';
import { SearchBarProps } from './interfaces';

function SearchBar(props: SearchBarProps) {
  const dispatch = useDispatch();
  const searchText = useSelector((state: RootState) => state.search.searchText);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(event.target.value));
  };

  return (
    <form onSubmit={props.handleSearchSubmit} role="search-bar">
      <div className="main-page_search">
        <input type="text" value={searchText} onChange={handleChange} />
        <button type="submit"></button>
      </div>
    </form>
  );
}

export default SearchBar;
