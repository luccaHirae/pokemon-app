import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AsideContainer = styled.aside`
    position: fixed;
    padding: 0 1rem;
    height: 100vh;
`;

export const SidebarButton = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 50%;
    transition: all 0.3s ease-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        filter: brightness(75%);
    }

    @media screen and (max-width: 425px) {
        height: 3rem;
        width: 3rem;
    }
`;

export const SidebarIcon = styled(AiOutlineMenu)`
    width: 2rem;
    height: 2rem;

    @media screen and (max-width: 425px) {
        height: 1rem;
        width: 1rem;
    }
`;

export const SidebarCloseIcon = styled(AiOutlineClose)`
    width: 2rem;
    height: 2rem;

    @media screen and (max-width: 425px) {
        height: 1rem;
        width: 1rem;
    }
`;

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const TeamLink = styled(Link)`
    text-align: center;
    background-color: ${({ theme }) => theme.colors.cinnabar};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 25px;
    text-decoration: none;
    padding: 0.5rem;
    margin-bottom: 1rem;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.cinnabar};
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
`;

export const PokemonSlot = styled.button`
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    margin-bottom: 1rem;
    transition: all 0.3s ease-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        filter: brightness(75%);
    }
`;

export const PokemonSprite = styled.img`
    max-width: 100%;
`;
