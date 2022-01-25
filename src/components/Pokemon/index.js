import { useDispatch } from 'react-redux';
import { add } from '../../redux/reducers/pokemonReducer';
import { firstCharToUpperCase } from '../../functions';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitleWrapper,
	Id,
	ImageWrapper,
	MoreDetails,
	Name,
	Pokeball,
	Sprite,
} from './styles';
import { AddButton, AddIcon } from '../../styles/GlobalStyles';
import useMenu from '../../hooks/useMenu';
import placeholderPokeball from '../../assets/img/placeholder-pokeball.png';
const Pokemon = ({ pokemon }) => {
	const dispatch = useDispatch();
	const { openMenu } = useMenu();

	const handleClick = () => {
		dispatch(add(pokemon));
		openMenu();
	};

	return (
		<Card>
			<CardHeader>
				<CardTitleWrapper>
					<Id>{pokemon.id}.</Id>
					<Name>{firstCharToUpperCase(pokemon.name)}</Name>
				</CardTitleWrapper>
				<AddButton onClick={handleClick} title='add pókemon to team'>
					<AddIcon />
				</AddButton>
			</CardHeader>
			<CardContent>
				<ImageWrapper>
					<Pokeball
						src={placeholderPokeball}
						alt='placeholder pokéball'
						loading='lazy'
					/>
					<Sprite
						src={pokemon.sprite}
						alt={pokemon.name}
						effect='blur'
					/>
				</ImageWrapper>
				<MoreDetails to={`/pokemon/${pokemon.name}`}>
					More details
				</MoreDetails>
			</CardContent>
		</Card>
	);
};

export default Pokemon;
