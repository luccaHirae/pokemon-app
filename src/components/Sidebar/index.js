import { useDispatch, useSelector } from "react-redux";
import useToggle from "../../hooks/useToggle";
import { remove } from "../../redux/reducers/pokemonReducer";
import {
    AsideContainer,
    PokemonSlot,
    PokemonSprite,
    SidebarButton,
    SidebarCloseIcon,
    SidebarIcon,
    SidebarWrapper,
    TeamLink,
} from "./styles";

const Sidebar = () => {
    const pokemonTeam = useSelector(state => state.pokemon)
    const dispatch = useDispatch()
    const { value, handleToggle } = useToggle(false)

    const handleClick = (uuid) => {
        dispatch(remove(uuid))
    }

    return (
        <AsideContainer>
            {value ? (
                <SidebarWrapper>
                    <SidebarButton onClick={handleToggle} title="close team builder">
                        <SidebarCloseIcon />
                    </SidebarButton>

                    <TeamLink to="/">Team</TeamLink>

                    {pokemonTeam.map(pokemon => (
                        <PokemonSlot onClick={() => handleClick(pokemon.uuid)} key={pokemon.uuid}>
                            <PokemonSprite src={pokemon.sprite} alt={pokemon.name} title={pokemon.name} />
                        </PokemonSlot>
                    ))}
                </SidebarWrapper>
            ) : (
                <SidebarButton onClick={handleToggle} title="open team builder">
                    <SidebarIcon />
                </SidebarButton>
            )}
        </AsideContainer>
    );
}

export default Sidebar;