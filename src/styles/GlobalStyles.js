import { AiOutlinePlus } from 'react-icons/ai';
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.secondary};
        font-family: 'Source Code Pro', monospace;
        font-size: 1.15em;
        margin: 0;
    }

    p {
        color: ${({ theme }) => theme.colors.text};
        opacity: 0.7;
        line-height: 1.5;
    }

    h1 {
        color: ${({ theme }) => theme.colors.text};
        text-align: center;
    }
`

export const Container = styled.div`
    min-height: 100vh;
    max-width: 75%;
    margin: 0 auto;
    padding: 2rem;

    @media screen and (max-width: 425px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.15em;
    font-weight: bold;
    border: none;
    border-radius: 25px;
    padding: 1rem;
    transition: all 0.3s ease;

    &:hover {
        cursor: pointer;
        box-shadow: 0 1rem .5rem rgba(0, 0, 0, 0.5);
        opacity: .9;
        transform: translateY(-0.5rem);
    }

    @media screen and (max-width: 768px) {
        margin-top: 1rem;
    }
`

export const AddButton = styled.button`
    display: flex;
    background-color: ${({ theme }) => theme.colors.cinnabar};
    color: #fff;
    border: none;
    border-radius: 50%;
    padding: 0.5rem;
    transition: all 0.3s;

    &:hover {
        cursor: pointer;
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
        transform: scale(1.1);
        
    }
`;

export const AddIcon = styled(AiOutlinePlus)`
    width: 1.5rem;
    height: 1.5rem;
`;

export default GlobalStyles