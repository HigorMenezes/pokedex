import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FavoritePokemon = string[];

const initialState: FavoritePokemon = [];

const favoritePokemonSlice = createSlice({
  name: "favoritePokemon",
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

export const { toggleFavoritePokemon } = favoritePokemonSlice.actions;

export default favoritePokemonSlice.reducer;
