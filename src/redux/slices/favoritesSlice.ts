import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { FavoritesState } from '../types'

const initialState: FavoritesState = {
    favoriteDeals: []
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        like: (state, action: PayloadAction<number>) => {
            state.favoriteDeals = [...state.favoriteDeals, action.payload]
        },
        unlike: (state, action: PayloadAction<number>) => {
            state.favoriteDeals = state.favoriteDeals.filter(deal => deal != action.payload)
        },
    },
})

export const { like, unlike } = favoritesSlice.actions

export default favoritesSlice.reducer