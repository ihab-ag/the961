import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Screen } from '../../navigation/types'
import navigation from '../../constants/navigation'
import { NavigationState } from '../types'

const initialState: NavigationState = {
    selectedScreenIndex: navigation.bottomtabScreens[0].index
}

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        navigate: (state, action: PayloadAction<number>) => {
            state.selectedScreenIndex = action.payload
        },
    },
})

export const { navigate } = navigationSlice.actions

export default navigationSlice.reducer