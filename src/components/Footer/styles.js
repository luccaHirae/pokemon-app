import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.colors.onyx};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
`;

export const FooterText = styled.p`
    color: #fff;
    padding-right: 0.5rem;
`;

export const FooterLink = styled.a`
    color: ${({ theme }) => theme.colors.cinnabar};
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
        color: #fff;
        text-shadow: 0px 0px 10px ${({ theme }) => theme.colors.cinnabar};
    }
`;