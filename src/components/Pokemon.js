import { Link } from "react-router-dom";

const Pokemon = ({ pokemon }) => {
    return (
        <li>
            <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>

            <div>
                {pokemon.types.map(type => (
                    <span key={type}>{type}</span>
                ))}
            </div>
        </li>
    );
}

export default Pokemon;