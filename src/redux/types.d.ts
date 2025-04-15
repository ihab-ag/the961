import { BottomtabScreen } from "../navigation/types"
import { store } from "./store"

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export interface NavigationState {
    selectedScreenIndex: number
}

export interface FavoritesState {
    favoriteDeals: number[]
}