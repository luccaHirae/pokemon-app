import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 2rem;
    }
`

export const HeaderName = styled.h2`
    color: ${({ theme }) => theme.colors.onyx};
    font-size: 2em;
`

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

export const Wrapper = styled.div`
    margin-bottom: 4rem;
`

export const Type = styled.p`
    background-color: ${({ type }) => {
        switch (type) {
            case 'normal':
                return '#A8A77A'
            case 'fire':
                return '#EE8130'
            case 'water':
                return '#6390F0'
            case 'electric':
                return '#F7D02C'
            case 'grass':
                return '#7AC74C'
            case 'ice':
                return '#96D9D6'
            case 'fighting':
                return '#C22E28'
            case 'poison':
                return '#A33EA1'
            case 'ground':
                return '#E2BF65'
            case 'flying':
                return '#A98FF3'
            case 'psychic':
                return '#F95587'
            case 'bug':
                return '#A6B91A'
            case 'rock':
                return '#B6A136'
            case 'ghost':
                return '#735797'
            case 'dragon':
                return '#6F35FC'
            case 'dark':
                return '#705746'
            case 'steel':
                return '#B7B7CE'
            case 'fairy':
                return '#D685AD'
            default:
                return '#2c8579'
        }
    }};
    color: #fff;
    text-align: center;
    border-radius: 4px;
`

export const Image = styled.img`
    @media screen and (max-width: 425px) {
        display: none;
    }
`

export const ChartWrapper = styled.div`
    max-width: 75%;
    margin: auto;

    @media screen and (max-width: 768px) {
        max-width: 100%;
    }

    @media screen and (max-width: 425px) {
        display: none;
    }
`

export const ChartTitle = styled.h2`
    margin-top: 4rem;
    text-align: center;
`