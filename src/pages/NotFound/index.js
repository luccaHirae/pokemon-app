import { Button, Container } from "../../styles/GlobalStyles";
import { NotFoundSubtitle, NotFoundWrapper } from "./styles";
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <NotFoundWrapper>
                <h1>404</h1>
                <NotFoundSubtitle>Page Not Found</NotFoundSubtitle>
                <Button onClick={() => navigate('/')}>Homepage</Button>
            </NotFoundWrapper>
        </Container>
    );
}

export default NotFound;