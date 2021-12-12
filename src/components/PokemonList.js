import Pokemon from "./Pokemon";

const PokemonList = ({ pokemonData }) => {
    return (
        <div>
            {pokemonData.map((pokemon) => (
                <Pokemon key={pokemon.name} pokemon={pokemon} />
            ))}
        </div>
    );
}

export default PokemonList;