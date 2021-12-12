import { useEffect, useState } from "react";
import { useGetPokemonByLimitQuery } from "../redux/services/pokemon";
import PokemonList from '../components/PokemonList'

const Home = () => {
    const [offset, setOffset] = useState(0)
    const { data, error, isLoading, isSuccess } = useGetPokemonByLimitQuery(offset)
    const [pokemonData, setPokemonData] = useState([])

    useEffect(() => {
        const loadSprites = () => {
            const newPokemonData = []
            data?.results.forEach((pokemon, index) => {
                newPokemonData[index + 1] = {
                    id: index + 1,
                    name: pokemon.name,
                    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                }
            })
            setPokemonData(newPokemonData)
        }

        loadSprites()
    }, [data?.results])

    if (error) return <h3>Oops! There was an error.</h3>

    return (
        <div>
            <h1>Pokemons</h1>
            <input type="number" value={offset} onChange={(e) => setOffset(e.target.value)} />
            {isSuccess && <PokemonList pokemonData={pokemonData} />}
            {isLoading && <h3>Loading...</h3>}
        </div>
    );
}

export default Home;