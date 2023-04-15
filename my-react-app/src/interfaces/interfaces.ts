export interface IApi {
  info: {
    count: number;
    next: string;
    pages: number;
  };
  results: {
    id: number;
    name: string;
    image: string;
  }[];
}

export interface DataState {
  dataApi: IApi | null;
}
