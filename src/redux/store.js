import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from './services/pokemon'
import menuReducer from './reducers/menuReducer'
import pokemonReducer from './reducers/pokemonReducer'

export default configureStore({
    reducer: {
        pokemon: pokemonReducer,
        menu: menuReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
})