import { SearchBarProps, SearchBarState } from 'interfaces/interfaces';
import React from 'react';

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem(props.name) || '',
    };
  }

  componentWillUnmount() {
    localStorage.setItem(this.props.name, this.state.searchValue);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    return (
      <div className="main-page_search">
        <input
          type="text"
          name={this.props.name}
          value={this.state.searchValue}
          onChange={this.handleChange}
        />
        <button></button>
      </div>
    );
  }
}

export default SearchBar;
