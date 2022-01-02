import { Container } from "../../styles/GlobalStyles";
import { LoaderWrapper, LoadingBall } from "./styles";

const Loading = () => {
    return (
        <Container>
            <LoaderWrapper>
                <LoadingBall></LoadingBall>
                <LoadingBall></LoadingBall>
                <LoadingBall></LoadingBall>
            </LoaderWrapper>
        </Container>
    );
}

export default Loading;