import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `/pokemon/${name}`
        }),
        getPokemonByLimit: builder.query({
            query: (offset = 0, limit = 151) => `/pokemon?offset=${offset}&limit=${limit}`
        })
    })
})

export const { useGetPokemonByNameQuery, useGetPokemonByLimitQuery } = pokemonApi    