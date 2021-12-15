import { useState } from "react";
import Pokemon from "./Pokemon";

const PokemonList = ({ pokemonData }) => {
    const [filter, setFilter] = useState('')

    const pokemons = pokemonData.filter(p => {
        if (filter === '') return p
        return p.name.toLowerCase().includes(filter.toLocaleLowerCase())
    })

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                    placeholder="Filter by name"
                />
                <button onClick={() => setFilter('')} type="reset">reset</button>
            </form>

            {pokemons.map(pokemon => (
                <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))}

            {pokemons.length === 0 && <span>No pokemon found called "{filter}"</span>}
        </div>
    );
}

export default PokemonList;