import { useNavigate } from "react-router-dom";
import { Button, Container } from "../../GlobalStyles";
import { DetailsErrorMessage, DetailsErrorWrapper } from "./styles";

const DetailsError = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <DetailsErrorWrapper>
                <h1>Pokemon Not Found</h1>
                <DetailsErrorMessage>Sorry, there was an error fetching the pokemon data.</DetailsErrorMessage>
                <Button onClick={() => navigate('/')}>Homepage</Button>
            </DetailsErrorWrapper>
        </Container>
    );
}

export default DetailsError;