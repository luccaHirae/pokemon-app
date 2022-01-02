import { createSlice } from "@reduxjs/toolkit"

const initialState = false

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        alternate: (state) => {
            return !state
        },
        open: (state) => {
            if (state) return state
            return true
        }
    }
})

export const { alternate, open } = menuSlice.actions

export default menuSlice.reducer