import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';
import { FormInputs, FormState } from 'components/Form/interfaces';
import { SearchState } from 'components/SearchBar/interfaces';
import { DataState, IApi } from 'interfaces/interfaces';
import { fetchCharacters } from './requests';

export type RootState = ReturnType<typeof store.getState>;

const initialState: SearchState = {
  searchText: '',
};

const initialDataState: DataState = {
  dataApi: null,
};

const initialFormState: FormState = {
  formStateArray: [],
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
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.dataApi = null;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.dataApi = action.payload;
    });
    builder.addCase(fetchCharacters.rejected, (state) => {
      state.dataApi = null;
    });
  },
});

export const formSlice = createSlice({
  name: 'form',
  initialState: initialFormState,
  reducers: {
    setFormCards: (state: FormState, action: PayloadAction<FormInputs[]>) => {
      state.formStateArray = action.payload;
    },
  },
});

export const { setSearchText } = searchSlice.actions;
export const { setDataApi } = dataSlice.actions;
export const { setFormCards } = formSlice.actions;

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    data: dataSlice.reducer,
    form: formSlice.reducer,
  },
});
