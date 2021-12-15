import { Link } from "react-router-dom";

const Pokemon = ({ pokemon }) => {
    return (
        <div>
            <span>{pokemon.id}</span>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            <img src={pokemon.sprite} alt={pokemon.name} />
        </div>
    );
}

export default Pokemon;