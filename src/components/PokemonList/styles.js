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
    min-height: 2rem;
    font-size: 1em;
    width: 100%;
    min-width: 12rem;
    padding: 1rem 1.5rem;
    margin-right: 1rem;
    border-radius: 25px;
    border: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;

    &:focus {
        color: #fff;
        background-color: ${({ theme }) => theme.colors.onyx};
        outline: none;
        box-shadow: none;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 2rem;
        margin-right: 0;
    }
`

export const Grid = styled.div`
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