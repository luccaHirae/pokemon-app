import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const PokemonDetails = () => {
    const params = useParams()
    const pokemon = useSelector(state => state.pokemon.find(p => p.id === Number(params.id)))
    const navigate = useNavigate()

    return (
        <div>
            <h2>{pokemon.name}</h2>

            <div>
                <p>Types:</p>
                {pokemon.types.map(type => (
                    <span key={type}>{type}</span>
                ))}
            </div>

            <button onClick={() => navigate(-1)}>go back</button>
        </div>
    );
}

export default PokemonDetails;