import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        name: 'bulbasaur',
    },
    {
        id: 2,
        name: 'charmander',
    },
    {
        id: 3,
        name: 'squirtle',
    },
]

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        add: (state, action) => {
            return [...state, action.payload]
        },
        remove: (state, action) => {
            return state.filter(pokemon => pokemon.id !== action.payload)
        },
        update: (state, action) => {
            const id = action.payload.id
            const updated = action.payload
            return state.map(pokemon => pokemon.id !== id ? pokemon : updated)
        }
    }
})

export const { add, remove, update } = pokemonSlice.actions

export default pokemonSlice.reducer