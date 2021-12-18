import { useEffect, useState } from "react";
import { useGetPokemonByLimitQuery } from "../redux/services/pokemon";
import { Container } from "../GlobalStyles";
import { Helmet } from 'react-helmet';
import PokemonList from '../components/PokemonList';
import Loading from "../components/Loading";
import HomeError from "../components/HomeError";
import ScrollToTop from "../components/ScrollToTop";

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

    if (isLoading) return <Loading />

    return (
        <Container>
            <Helmet>
                <title>Poké Data</title>
            </Helmet>

            <h1>Poké Data</h1>

            {isSuccess && <PokemonList pokemonData={pokemonData} />}

            <ScrollToTop />
        </Container>
    );
}

export default Home;