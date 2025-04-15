import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigationSlice";
import favoritesReducer from "./slices/favoritesSlice";

export const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        favorites: favoritesReducer
    }
})