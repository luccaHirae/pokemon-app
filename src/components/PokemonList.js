import { useSelector } from "react-redux";
import Pokemon from "./Pokemon";

const PokemonList = () => {
    const data = useSelector(state => state.pokemon)

    return (
        <ul>
            {data.map((pokemon) => (
                <Pokemon key={pokemon.name} pokemon={pokemon} />
            ))}
        </ul>
    );
}

export default PokemonList;