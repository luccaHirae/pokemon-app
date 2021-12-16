import { firstCharToUpperCase } from "../../functions";
import { Card, CardContent, CardHeader, Id, ImageWrapper, MoreDetails, Name, Sprite } from "./styles";

const Pokemon = ({ pokemon }) => {
    return (
        <Card>
            <CardHeader>
                <Id>{pokemon.id}.</Id>
                <Name>{firstCharToUpperCase(pokemon.name)}</Name>
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