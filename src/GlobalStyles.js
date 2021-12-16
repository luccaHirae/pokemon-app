import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.ivory};
        font-family: 'Source Code Pro', monospace;
        font-size: 1.15em;
        margin: 0;
    }

    p {
        opacity: 0.7;
        line-height: 1.5;
    }

    h1 {
        color: ${({ theme }) => theme.colors.onyx};
        text-align: center;
    }
`

export const Container = styled.div`
    max-width: 75%;
    margin: auto;
    padding: 4rem;
`

export default GlobalStyles