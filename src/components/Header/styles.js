import { Link } from 'react-router-dom';
import { GiAztecCalendarSun, GiEvilMoon } from 'react-icons/gi';
import styled from 'styled-components';

export const HeaderContainer = styled.nav`
    background-color: ${({ theme }) => theme.colors.surface};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 6rem;
    box-shadow: 0 .25rem 1rem rgb(0 0 0 / .3);
    font-family: 'Londrina Shadow', cursive;
`;

export const HeaderTitle = styled(Link)`
    font-size: 3em;
    font-weight: bold;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.cinnabar};
    transition: all 0.3s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.colors.white};
        text-shadow: 1px -1px 0 #767676, -1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777, -4px 8px 1px #7b7a7a, -5px 10px 1px #7f7d7d, -6px 12px 1px #828181, -7px 14px 1px #868585, -8px 16px 1px #8b8a89, -9px 18px 1px #8f8e8d, -10px 20px 1px #949392, -11px 22px 1px #999897, -12px 24px 1px #9e9c9c, -13px 26px 1px #a3a1a1, -14px 28px 1px #a8a6a6, -15px 30px 1px #adabab, -16px 32px 1px #b2b1b0, -17px 34px 1px #b7b6b5, -18px 36px 1px #bcbbba, -19px 38px 1px #c1bfbf, -20px 40px 1px #c6c4c4, -21px 42px 1px #cbc9c8, -22px 44px 1px #cfcdcd, -23px 46px 1px #d4d2d1, -24px 48px 1px #d8d6d5, -25px 50px 1px #dbdad9, -26px 52px 1px #dfdddc, -27px 54px 1px #e2e0df, -28px 56px 1px #e4e3e2;
    }
`;

export const HeaderButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: .5rem;
    border-radius: 50%;
    border: none;
    transition: all 0.3s ease-out;

    &:hover {
        cursor: pointer;
        filter: brightness(.9);
        transform: rotate(180deg) scale(1.1);
    }
`;

export const MoonIcon = styled(GiEvilMoon)`
    width: 2.5rem;
    height: 2.5rem;

    @media screen and (max-width: 425px) {
        width: 2rem;
        height: 2rem;
    }
`;

export const SunIcon = styled(GiAztecCalendarSun)`
    width: 2.5rem;
    height: 2.5rem;

    @media screen and (max-width: 425px) {
        width: 2rem;
        height: 2rem;
    }
`;