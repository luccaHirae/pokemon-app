import { useDispatch } from "react-redux";
import { add } from "../../redux/reducers/pokemonReducer";
import { firstCharToUpperCase } from "../../functions";
import {
    Card,
    CardContent,
    CardHeader,
    Id,
    ImageWrapper,
    MoreDetails,
    Name,
    Sprite
} from "./styles";
import { AddButton, AddIcon } from "../../GlobalStyles";

const Pokemon = ({ pokemon }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(add(pokemon))
    }

    return (
        <Card>
            <CardHeader>
                <Id>{pokemon.id}.</Id>
                <Name>{firstCharToUpperCase(pokemon.name)}</Name>
                <AddButton onClick={handleClick} title="add pókemon to team">
                    <AddIcon />
                </AddButton>
            </CardHeader>
            <CardContent>
                <ImageWrapper>
                    <Sprite src={pokemon.sprite} alt={pokemon.name} />
                </ImageWrapper>
                <MoreDetails to={`/pokemon/${pokemon.name}`}>More Details</MoreDetails>
            </CardContent>
        </Card>
    );
}

export default Pokemon;