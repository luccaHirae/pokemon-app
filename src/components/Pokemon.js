import { Link } from "react-router-dom";

const Pokemon = ({ pokemon }) => {
    return (
        <li>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
        </li>
    );
}

export default Pokemon;