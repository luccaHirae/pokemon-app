
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    position: fixed;
    bottom: 15px;
    right: 15px;
`;

export const ScrollButton = styled.button`
    opacity: ${({ isVisible }) => isVisible ? 1 : 0};
    background-color: ${({ theme }) => theme.colors.cinnabar};
    color: #fff;
    border: none;
    border-radius: 50%;
    padding: 1rem;
    transition: all 0.3s ease-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        filter: brightness(75%);
    }
`;

export const ArrowIcon = styled(FaArrowUp)`
    height: 2rem;
    width: 2rem;
`