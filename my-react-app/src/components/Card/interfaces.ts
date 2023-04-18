export interface CardProps {
  id: number;
  image: string;
  name: string;
  status?: string;
  species?: string;
  gender?: string;
  origin?: {
    name: string;
  };
}

export interface CardsProps {
  error: Error | undefined;
  isLoaded: boolean;
}
