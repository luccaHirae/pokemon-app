import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NotFoundSubtitle = styled.h2`
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 3rem;
`