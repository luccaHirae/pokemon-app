import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.div`
	background-color: ${({ theme }) => theme.colors.surface};
	border-radius: 16px;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: 1rem;
`;

export const CardHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const CardTitleWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const Id = styled.h4`
	color: ${({ theme }) => theme.colors.cinnabar};
	font-size: 1.15em;
	font-weight: bold;
	margin-right: 0.25rem;
`;

export const Name = styled.h4`
	color: ${({ theme }) => theme.colors.text};
	font-size: 1.15em;
`;

export const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
	position: relative;
`;

export const Pokeball = styled.img`
	max-width: 100%;
	width: 100%;
	opacity: 0.3;
`;

export const Sprite = styled(LazyLoadImage)`
	position: absolute;
	right: 0%;
	top: 0%;
	max-width: 100%;
	width: 100%;
`;

export const MoreDetails = styled(Link)`
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
	text-align: center;
	border-radius: 16px;
	text-decoration: none;
	font-size: 1.15em;
	line-height: 1.5;
	transition: all 0.3s ease-out;

	&:hover {
		opacity: 0.9;
		transform: translateY(-0.25rem) scale(1.05);
	}
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
`;
