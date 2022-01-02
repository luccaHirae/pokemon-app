import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { empty } from '../../redux/reducers/pokemonReducer';
import { useNavigate } from "react-router-dom";
import { AddButton, Button, Container } from "../../styles/GlobalStyles";
import {
    ClearIcon,
    NoPokemonText,
    PokemonName,
    PokemonSprite,
    PokemonWrapper,
    TeamContainer,
    Title,
    TitleContainer
} from "./styles";

const Team = () => {
    const pokemonTeam = useSelector(state => state.pokemon)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(empty())
    }

    return (
        <Container>
            <Helmet>
                <title>Poké Data - Team</title>
            </Helmet>

            <TitleContainer>
                <Title>Team</Title>

                <AddButton onClick={handleClick} title="remove all pókemons from team">
                    <ClearIcon />
                </AddButton>

                <Button onClick={() => navigate(-1)}>&#8592; Go Back</Button>
            </TitleContainer>

            <TeamContainer>
                {pokemonTeam.length > 0 ? pokemonTeam.map(pokemon => (
                    <PokemonWrapper to={`/pokemon/${pokemon.name}`} key={pokemon.uuid}>
                        <PokemonSprite src={pokemon.sprite} alt={pokemon.name} />
                        <PokemonName>{pokemon.name}</PokemonName>
                    </PokemonWrapper>
                )) : (
                    <NoPokemonText>No pókemon in your team</NoPokemonText>
                )}
            </TeamContainer>
        </Container>
    );
}

export default Team;