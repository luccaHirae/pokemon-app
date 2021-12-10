import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pokemon from "./components/Pokemon";
import { add } from "./redux/reducers/pokemonReducer";

const App = () => {
  const data = useSelector(state => state.pokemon)
  const dispatch = useDispatch()
  const [newPokemon, setNewPokemon] = useState('')

  const handleChange = (e) => setNewPokemon(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(add({ id: data.length + 1, name: newPokemon }))
    setNewPokemon('')
  }

  return (
    <div>
      <h1>Pokemons</h1>
      <ul>
        {data.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>


      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="text" value={newPokemon} onChange={handleChange} placeholder="pokemon" required />
        <button type="submit">add</button>
      </form>

    </div>
  );
}

export default App;