import { useDispatch } from "react-redux";
import { add } from "../../redux/reducers/pokemonReducer";
import { firstCharToUpperCase } from "../../functions";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitleWrapper,
    Id,
    ImageWrapper,
    MoreDetails,
    Name,
    Sprite
} from "./styles";
import { AddButton, AddIcon } from "../../styles/GlobalStyles";
import useMenu from "../../hooks/useMenu";

const Pokemon = ({ pokemon }) => {
    const dispatch = useDispatch()
    const { openMenu } = useMenu()

    const handleClick = () => {
        dispatch(add(pokemon))
        openMenu()
    }

    return (
        <Card>
            <CardHeader>
                <CardTitleWrapper>
                    <Id>{pokemon.id}.</Id>
                    <Name>{firstCharToUpperCase(pokemon.name)}</Name>
                </CardTitleWrapper>
                <AddButton onClick={handleClick} title="add pókemon to team">
                    <AddIcon />
                </AddButton>
            </CardHeader>
            <CardContent>
                <ImageWrapper>
                    <Sprite src={pokemon.sprite} alt={pokemon.name} />
                </ImageWrapper>
                <MoreDetails to={`/pokemon/${pokemon.name}`}>More details</MoreDetails>
            </CardContent>
        </Card>
    );
}

export default Pokemon;