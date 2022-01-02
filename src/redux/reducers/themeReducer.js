import { createSlice } from "@reduxjs/toolkit"

const initialState = false

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggle: (state) => {
            return !state
        }
    }
})

export const { toggle } = themeSlice.actions

export default themeSlice.reducer