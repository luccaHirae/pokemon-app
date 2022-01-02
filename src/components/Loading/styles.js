import styled from 'styled-components';

export const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoadingBall = styled.span`
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 50%;
    margin: 5rem 0.5rem;
    animation: bouncingLoader 0.6s infinite alternate;

    &:nth-child(2) {
        animation-delay: 0.2s;
    }

    &:nth-child(3) {
        animation-delay: 0.4s;
    }

    @keyframes bouncingLoader {
        from {
            width: 0.1rem;
            height: 0.1rem;
            opacity: 1;
            transform: translate3d(0);
        } to {
            width: 1rem;
            height: 1rem;
            opacity: 0.1;
            transform: translate3d(0, -1rem, 0);
        }
    }
`;