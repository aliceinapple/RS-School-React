export interface SearchBarProps {
  handleSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface SearchState {
  searchText: string;
}
