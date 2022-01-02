import { AiOutlineClear } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 2rem;
    }
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.text};
    font-size: 2em;
`;

export const ClearIcon = styled(AiOutlineClear)`
    width: 1.5rem;
    height: 1.5rem;
`;

export const TeamContainer = styled.div`
    margin-top: 1rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

export const PokemonWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    border-radius: 1rem;
    box-shadow: 0 .25rem 1rem rgb(0 0 0 / .3);
    color: ${({ theme }) => theme.colors.text};
    transition: all .3s ease;

    &:hover {
        box-shadow: 0 .25rem 1rem rgb(0 0 0 / .7);
        transform: scale(1.05);
    }
`;

export const PokemonSprite = styled.img`
    max-width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
`;

export const PokemonName = styled.h3`
    text-align: center;
    text-transform: uppercase;
`;

export const NoPokemonText = styled.p`
    text-align: center;
`;