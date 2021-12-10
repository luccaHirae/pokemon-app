import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        name: 'bulbasaur',
        types: ['grass', 'poison']
    },
    {
        id: 2,
        name: 'charmander',
        types: ['fire']
    },
    {
        id: 3,
        name: 'squirtle',
        types: ['water']
    },
]

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        add: (state, action) => {
            const newPokemon = { ...action.payload, id: state.length }
            return [...state, newPokemon]
        },
        remove: (state, action) => {
            return state.filter(pokemon => pokemon.id !== action.payload)
        },
        update: (state, action) => {
            const id = action.payload.id
            const pokemonToUpdate = state.find(p => p.id === id)
            const updatedPokemon = { ...pokemonToUpdate, name: action.payload.name }
            return state.map(pokemon => pokemon.id !== id ? pokemon : updatedPokemon)
        }
    }
})

export const { add, remove, update } = pokemonSlice.actions

export default pokemonSlice.reducer