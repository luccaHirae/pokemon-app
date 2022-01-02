import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './reducers/menuReducer'
import pokemonReducer from './reducers/pokemonReducer'
import themeReducer from './reducers/themeReducer'
import { pokemonApi } from './services/pokemon'

export default configureStore({
    reducer: {
        pokemon: pokemonReducer,
        theme: themeReducer,
        menu: menuReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
})