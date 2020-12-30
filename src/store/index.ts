import { configureStore } from "@reduxjs/toolkit";

import favoritePokemon from "./favoritePokemon";

const store = configureStore({
  reducer: {
    favoritePokemon,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
