import Pokemon from "./Pokemon";

const PokemonList = ({ data }) => {
    return (
        <ul>
            {data.results.map((pokemon) => (
                <Pokemon key={pokemon.name} pokemon={pokemon} />
            ))}
        </ul>
    );
}

export default PokemonList;