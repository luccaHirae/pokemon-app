import { useState } from "react";
import { useDispatch } from "react-redux";
import { remove, update } from "../redux/reducers/pokemonReducer";

const Pokemon = ({ pokemon }) => {
    const [isEditOpen, SetIsEditOpen] = useState(false)
    const [updatedPokemon, setUpdatedPokemon] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => setUpdatedPokemon(e.target.value)

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(update({ id: pokemon.id, name: updatedPokemon }))
        setUpdatedPokemon('')
        SetIsEditOpen(false)
    }

    const handleDelete = () => dispatch(remove(pokemon.id))

    return (
        <li>
            {isEditOpen ? (
                <form onSubmit={handleUpdate} autoComplete="off">
                    <input type="text" value={updatedPokemon} onChange={handleChange} placeholder="pokemon" required />
                    <button type="submit">save</button>
                </form>
            ) : (
                <span>{pokemon.name}</span>
            )}
            <button onClick={handleDelete}>delete</button>
            <button onClick={() => SetIsEditOpen(!isEditOpen)}>{isEditOpen ? "cancel" : "update"}</button>
        </li>
    );
}

export default Pokemon;