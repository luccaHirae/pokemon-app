import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem;
`

export const Input = styled.input`
    height: 2.5rem;
    font-size: 1em;
    width: 100%;
    padding: 1rem;
    border-radius: 16px;
    border: 2px solid ${({ theme }) => theme.colors.onyx};
    transition: all 0.3s ease-out;
    margin-right: 1rem;

    &:focus {
        background-color: ${({ theme }) => theme.colors.onyx};
        color: #fff;
    }
`

export const ResetButton = styled.button`
    background-color: ${({ theme }) => theme.colors.onyx};
    color: #fff;
    font-size: 1.15em;
    font-weight: bold;
    border: none;
    border-radius: 16px;
    padding: 0.7rem;
    transition: all 0.3s ease;

    &:hover {
        cursor: pointer;
        background-color: #fff;
        color: ${({ theme }) => theme.colors.onyx};
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
`

export const NoResults = styled.p`
    text-align: center;
    font-weight: bold;
`