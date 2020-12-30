import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FavoritePokemons = string[];

const initialState: FavoritePokemons = [];

const favoritePokemonsSlice = createSlice({
  name: "favoritePokemons",
  initialState: initialState,
  reducers: {
    toggleFavoritePokemon: (state, action: PayloadAction<string>) => {
      if (state.includes(action.payload)) {
        return state.filter(
          (favoritePokemon) => favoritePokemon !== action.payload,
        );
      } else {
        return [...state, action.payload];
      }
    },
  },
});

export const { reducer } = favoritePokemonsSlice;
export const { toggleFavoritePokemon } = favoritePokemonsSlice.actions;

export default favoritePokemonsSlice;
