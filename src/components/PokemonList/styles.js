import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Input = styled.input`
    color: ${({ theme }) => theme.colors.text};
    font-size: 1em;
    width: 66%;
    max-height: 3rem;
    min-width: 10rem; 
    padding: 1rem 1.5rem;
    margin-right: 1rem;
    border-radius: 25px;
    border: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    background-color: ${({ theme }) => theme.colors.surface};
    transition: all 0.3s ease;

    &:focus {
        transform: scale(1.03);
        background-color: ${({ theme }) => theme.colors.secondary};
        border: 2px solid ${({ theme }) => theme.colors.cinnabar};
        outline: none;
        box-shadow: none;
    }

    @media screen and (max-width: 768px) {
        min-width: 100%;
        margin-bottom: 2rem;
        margin-right: 0;
    }
`

export const Grid = styled.div`
    /* background-color: pink; */
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 708px) {
        grid-template-columns: 1fr;
    }
`

export const NoResults = styled.p`
    text-align: center;
    font-weight: bold;
`