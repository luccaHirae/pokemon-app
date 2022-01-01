import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = []

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        add: (state, action) => {
            if (state.length < 6) {
                const newPokemon = {
                    uuid: uuidv4(),
                    id: action.payload.id,
                    name: action.payload.name,
                    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${action.payload.id}.png`
                }
                return [...state, newPokemon]
            }
            return state
        },
        remove: (state, action) => {
            return state.filter(pokemon => pokemon.uuid !== action.payload)
        },
        empty: () => {
            return initialState
        }
    }
})

export const { add, remove, empty } = pokemonSlice.actions

export default pokemonSlice.reducer