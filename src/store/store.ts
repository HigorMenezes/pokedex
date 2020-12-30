import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { favoritePokemonsReducer } from "./slices";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = {
  favoritePokemons: favoritePokemonsReducer,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducer),
);

const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
export default store;
