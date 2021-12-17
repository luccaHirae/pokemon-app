import { useNavigate, useParams } from "react-router-dom";
import { firstCharToUpperCase } from "../../functions";
import { useGetPokemonByNameQuery } from "../../redux/services/pokemon";
import { Button, Container } from '../../GlobalStyles'
import { ChartTitle, ChartWrapper, ContentWrapper, HeaderContainer, HeaderName, Type, Wrapper } from "./styles";
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
import Loading from "../../components/Loading";
import DetailsError from "../../components/DetailsError";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const PokemonDetails = () => {
    const params = useParams()
    const navigate = useNavigate()
    const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(params.name)

    if (error) return <DetailsError />

    if (isLoading) return <Loading />

    const baseStats = pokemon.stats.map(s => s.base_stat)
    const statNames = pokemon.stats.map(s => s.stat.name)

    const data = {
        labels: statNames,
        datasets: [{
            label: `${pokemon.name} base stats`,
            data: baseStats,
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
    }

    return (
        <Container>
            <HeaderContainer>
                <HeaderName>{firstCharToUpperCase(pokemon.name)}</HeaderName>
                <Button onClick={() => navigate(-1)}>&#8592; Go Back</Button>
            </HeaderContainer>

            <ContentWrapper>
                <div>
                    <Wrapper>
                        <h3>Types</h3>
                        {pokemon.types.map(t => (
                            <Type type={t.type.name} key={t.type.name}>{t.type.name}</Type>
                        ))}
                    </Wrapper>

                    <div>
                        <h3>Abilities</h3>
                        {pokemon.abilities.map(a => (
                            <p key={a.ability.name}>{a.ability.name}</p>
                        ))}
                    </div>
                </div>

                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
            </ContentWrapper>

            <ChartWrapper>
                <ChartTitle>Stats</ChartTitle>
                <Radar data={data} />
            </ChartWrapper>
        </Container>
    );
}

export default PokemonDetails;