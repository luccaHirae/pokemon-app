import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './reducers/pokemonReducer'

export default configureStore({
    reducer: {
        pokemon: pokemonReducer
    }
})