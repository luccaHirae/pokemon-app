import { Link } from 'react-router-dom';
import { GiAztecCalendarSun, GiEvilMoon } from 'react-icons/gi';
import styled from 'styled-components';

export const HeaderContainer = styled.nav`
	background-color: ${({ theme }) => theme.colors.surface};
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 6rem;
	box-shadow: 0 0.25rem 1rem rgb(0 0 0 / 0.3);
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
		text-shadow: 0 0 10px ${({ theme }) => theme.colors.cinnabar};
	}
`;

export const HeaderButton = styled.button`
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
	padding: 0.5rem;
	border-radius: 50%;
	border: none;
	transition: all 0.3s ease-out;

	&:hover {
		cursor: pointer;
		filter: brightness(0.9);
		transform: rotate(15deg) scale(1.1);
	}

	&:active {
		transform: rotate(-360deg);
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
