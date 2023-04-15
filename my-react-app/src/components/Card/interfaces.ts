import { IApi } from 'interfaces/interfaces';

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
  dataApi: IApi | null;
  error: Error | undefined;
  isLoaded: boolean;
}
