export interface CardProps {
  key: number;
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
