import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './reducers/pokemonReducer'
import { pokemonApi } from './services/pokemon'

export default configureStore({
    reducer: {
        pokemon: pokemonReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
})