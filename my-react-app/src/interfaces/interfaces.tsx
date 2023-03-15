export interface CardProps {
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
