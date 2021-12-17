import { Button, Container } from "../../GlobalStyles";
import { HomeErrorMessage, HomeErrorWrapper } from "./styles";

const HomeError = ({ refetch }) => {
    return (
        <Container>
            <HomeErrorWrapper>
                <h1>Error Loading Data</h1>
                <HomeErrorMessage>Sorry, an error occurred while fetching data.</HomeErrorMessage>
                <Button onClick={() => refetch()}>Reload</Button>
            </HomeErrorWrapper>
        </Container>
    );
}

export default HomeError;