import { useNavigate } from "react-router-dom";
import { Button, Container } from "../../styles/GlobalStyles";
import { DetailsErrorMessage, DetailsErrorWrapper } from "./styles";

const DetailsError = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <DetailsErrorWrapper>
                <h1>Pokémon Not Found</h1>
                <DetailsErrorMessage>
                    Sorry, there was an error while fetching the pokémon data.
                </DetailsErrorMessage>
                <Button onClick={() => navigate('/')}>Homepage</Button>
            </DetailsErrorWrapper>
        </Container>
    );
}

export default DetailsError;