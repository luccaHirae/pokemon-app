import { useEffect, useState } from "react";
import { useGetPokemonByLimitQuery } from "../redux/services/pokemon";
import { Container } from "../GlobalStyles";
import PokemonList from '../components/PokemonList'
import Loading from "../components/Loading";
import HomeError from "../components/HomeError";

const Home = () => {
    const { data, error, isLoading, isSuccess, refetch } = useGetPokemonByLimitQuery()
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

    if (error) return <HomeError refetch={refetch} />

    return (
        <Container>
            <h1>Pokemon Finder</h1>

            {isSuccess && <PokemonList pokemonData={pokemonData} />}
            {isLoading && <Loading />}
        </Container>
    );
}

export default Home;