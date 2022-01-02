import { useDispatch, useSelector } from "react-redux";
import useMenu from "../../hooks/useMenu";
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
    const { isOpen, toggleOpen } = useMenu()

    const handleClick = (uuid) => {
        dispatch(remove(uuid))
    }

    return (
        <AsideContainer>
            {isOpen ? (
                <SidebarWrapper>
                    <SidebarButton onClick={toggleOpen} title="close team builder">
                        <SidebarCloseIcon />
                    </SidebarButton>

                    <TeamLink to="/team">Team</TeamLink>

                    {pokemonTeam.map(pokemon => (
                        <PokemonSlot onClick={() => handleClick(pokemon.uuid)} key={pokemon.uuid}>
                            <PokemonSprite src={pokemon.sprite} alt={pokemon.name} title={pokemon.name} />
                        </PokemonSlot>
                    ))}
                </SidebarWrapper>
            ) : (
                <SidebarButton onClick={toggleOpen} title="open team builder">
                    <SidebarIcon />
                </SidebarButton>
            )}
        </AsideContainer>
    );
}

export default Sidebar;