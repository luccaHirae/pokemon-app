import { useNavigate, useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../redux/services/pokemon";

const PokemonDetails = () => {
    const params = useParams()
    const navigate = useNavigate()
    const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(params.name)

    if (error) return <h3>Oops! There was an error.</h3>

    if (isLoading) return <h3>Loading...</h3>

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            {pokemon.types.map(t => (
                <p key={t.type.name}>{t.type.name}</p>
            ))}

            <button onClick={() => navigate(-1)}>go back</button>
        </div>
    );
}

export default PokemonDetails;