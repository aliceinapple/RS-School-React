export interface CardProps {
  id: number;
  image: string;
  name: string;
  weight: number;
  portion: string;
  price: number;
}

export interface SearchBarState {
  searchValue: string;
}

export interface SearchBarProps {
  name: string;
}

export interface HeaderTitleState {
  currentPageTitle: string;
}
