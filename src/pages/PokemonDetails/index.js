import { useNavigate, useParams } from 'react-router-dom';
import { firstCharToUpperCase } from '../../functions';
import { useGetPokemonByNameQuery } from '../../redux/services/pokemon';
import {
	AddButton,
	AddIcon,
	Button,
	Container,
} from '../../styles/GlobalStyles';
import {
	ChartTitle,
	ChartWrapper,
	ContentWrapper,
	HeaderContainer,
	HeaderName,
	Image,
	Subtitle,
	Type,
	Wrapper,
} from './styles';
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import Loading from '../../components/Loading';
import DetailsError from '../../components/DetailsError';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/reducers/pokemonReducer';
import useMenu from '../../hooks/useMenu';

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

const PokemonDetails = () => {
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {
		data: pokemon,
		error,
		isLoading,
	} = useGetPokemonByNameQuery(params.name);
	const { openMenu } = useMenu();

	if (error) return <DetailsError />;

	if (isLoading) return <Loading />;

	const baseStats = pokemon.stats.map((s) => s.base_stat);
	const statNames = pokemon.stats.map((s) => s.stat.name);

	const data = {
		labels: statNames,
		datasets: [
			{
				label: `${pokemon.name} base stats`,
				data: baseStats,
				fill: true,
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgb(255, 99, 132)',
				pointBackgroundColor: 'rgb(255, 99, 132)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgb(255, 99, 132)',
			},
		],
	};

	const handleClick = () => {
		dispatch(add(pokemon));
		openMenu();
	};

	return (
		<Container>
			<Helmet>
				<title>Poké Data - {firstCharToUpperCase(pokemon.name)}</title>
			</Helmet>

			<HeaderContainer>
				<HeaderName>{firstCharToUpperCase(pokemon.name)}</HeaderName>

				<AddButton onClick={handleClick} title='add pókemon to team'>
					<AddIcon />
				</AddButton>

				<Button onClick={() => navigate(-1)}>&#8592; Go Back</Button>
			</HeaderContainer>

			<ContentWrapper>
				<div>
					<Wrapper>
						<Subtitle>Types</Subtitle>
						{pokemon.types.map((t) => (
							<Type type={t.type.name} key={t.type.name}>
								{t.type.name}
							</Type>
						))}
					</Wrapper>

					<Subtitle>Abilities</Subtitle>
					{pokemon.abilities.map((a) => (
						<p key={a.ability.name}>{a.ability.name}</p>
					))}
				</div>

				<Image
					src={
						pokemon.sprites.other['official-artwork'].front_default
					}
					alt={pokemon.name}
				/>
			</ContentWrapper>

			<ChartWrapper>
				<ChartTitle>Stats</ChartTitle>
				<Radar data={data} />
			</ChartWrapper>
		</Container>
	);
};

export default PokemonDetails;
