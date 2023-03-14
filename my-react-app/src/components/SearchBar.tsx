import { SearchBarState } from 'interfaces/interfaces';
import React, { Component } from 'react';

class SearchBar extends Component<{}, SearchBarState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      searchValue: localStorage.getItem('searchTerm') || '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    const searchValue = localStorage.getItem('searchValue');
    if (searchValue !== null) {
      this.setState({ searchValue: searchValue });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.searchValue} onChange={this.handleInputChange} />
        <p>Search Value: {this.state.searchValue}</p>
      </div>
    );
  }
}

export default SearchBar;
