import PokemonList from "../components/PokemonList";
import { useGetPokemonByLimitQuery } from "../redux/services/pokemon";

const Home = () => {
    const { data, error, isLoading } = useGetPokemonByLimitQuery(150)

    return (
        <>
            <h1>Pokemons</h1>
            {error ? (
                <h3>Oops! There was an error.</h3>
            ) : isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <PokemonList data={data} />
            )}
        </>
    );
}

export default Home;