import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Card = styled.div`
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.5);
    padding-left: 1rem;
    padding-right: 1rem ;
    padding-bottom: 1rem;
`

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const Id = styled.span`
    color: ${({ theme }) => theme.colors.cinnabar};
    font-size: 1.15em;
    font-weight: bold;
`

export const Name = styled.h4`
    color: ${({ theme }) => theme.colors.onyx};
    font-size: 1.15em;
`

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`

export const Sprite = styled.img`
    max-width: 100%;
    width: 10rem;
`

export const MoreDetails = styled(Link)`
    background-color: ${({ theme }) => theme.colors.cinnabar};
    color: #fff;
    text-align: center;
    border-radius: 16px;
    text-decoration: none;
    font-size: 1.15em;
    line-height: 1.5;
    transition: all 0.3s ease-out;

    &:hover {
        opacity: 0.9;
        transform: scale(1.05);
    }
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
`