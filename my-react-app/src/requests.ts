import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (searchText: string) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?name=${searchText ? searchText : ''}`
    );
    const data = await response.json();
    return data;
  }
);

export const fetchCharacterData = createAsyncThunk(
  'card/fetchCharacterData',
  async (id: number) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();
    return data;
  }
);
