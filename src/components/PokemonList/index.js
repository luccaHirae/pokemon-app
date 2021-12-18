import { useState } from "react";
import { Button } from "../../GlobalStyles";
import Pokemon from "../Pokemon";
import { Form, Grid, Input, NoResults } from "./styles";

const PokemonList = ({ pokemonData }) => {
    const [filter, setFilter] = useState('')

    const pokemons = pokemonData.filter(p => {
        if (filter === '') return p
        return p.name.toLowerCase().includes(filter.toLocaleLowerCase())
    })

    return (
        <>
            <Form>
                <Input
                    id="filter"
                    type="text"
                    placeholder="Filter by name"
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                />
                <Button onClick={() => setFilter('')} type="reset">reset</Button>
            </Form>

            <Grid>
                {pokemons.map(pokemon => (
                    <Pokemon key={pokemon.id} pokemon={pokemon} />
                ))}
            </Grid>

            {pokemons?.length === 0 && <NoResults>No pokémon found called "{filter}"</NoResults>}
        </>
    );
}

export default PokemonList;