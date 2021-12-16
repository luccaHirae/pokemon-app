import { useNavigate, useParams } from "react-router-dom";
import { firstCharToUpperCase, insertDot } from "../functions";
import { useGetPokemonByNameQuery } from "../redux/services/pokemon";

const PokemonDetails = () => {
    const params = useParams()
    const navigate = useNavigate()
    const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(params.name)

    if (error) return <h3>Oops! There was an error.</h3>

    if (isLoading) return <h3>Loading...</h3>

    return (
        <div>
            <button onClick={() => navigate(-1)}>go back</button>

            <h2>{firstCharToUpperCase(pokemon.name)}</h2>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />

            <div>
                <h4>types</h4>
                {pokemon.types.map(t => (
                    <p key={t.type.name}>{t.type.name}</p>
                ))}
            </div>

            <div>
                <h4>abilities</h4>
                {pokemon.abilities.map(a => (
                    <p key={a.ability.name}>{a.ability.name}</p>
                ))}
            </div>

            <div>
                <h4>stats</h4>
                {pokemon.stats.map(s => (
                    <p key={s.stat.name}>{s.stat.name}: {s.base_stat}</p>
                ))}
            </div>

            <div>
                <p>height: {insertDot(pokemon.height)} m</p>
                <p>weight: {insertDot(pokemon.weight)} kg</p>
            </div>
        </div>
    );
}

export default PokemonDetails;