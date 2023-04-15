import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';
import { SearchState } from 'components/SearchBar/interfaces';
import { DataState, IApi } from 'interfaces/interfaces';

const initialState: SearchState = {
  searchText: '',
};

const initialDataState: DataState = {
  dataApi: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state: SearchState, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const dataSlice = createSlice({
  name: 'data',
  initialState: initialDataState,
  reducers: {
    setDataApi: (state: DataState, action: PayloadAction<IApi | null>) => {
      state.dataApi = action.payload;
    },
  },
});

export const { setSearchText } = searchSlice.actions;
export const { setDataApi } = dataSlice.actions;

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    data: dataSlice.reducer,
  },
});
