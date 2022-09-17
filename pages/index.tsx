import { NextPage, GetStaticProps } from 'next';
import { useMemo } from 'react';
import { Grid, useTheme, Image } from '@nextui-org/react';
import { PokemonCards } from '../components/UI';

import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { Layout } from '../components/layouts/Layout';

interface Props {
	pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
	const theme = useTheme();
	const themeMemo = useMemo(() => theme, [theme]);

	return (
		<Layout title='List Pokemons'>
			<Image src='/img/banner.png' width={200} height={150} alt='banner' />

			<Grid.Container gap={2} justify='flex-start'>
				{pokemons.map(({ id, name, img }) => {
					return (
						<Grid xs={6} sm={3} md={2} xl={1} key={id}>
							<PokemonCards image={img} name={name} id={id} theme={themeMemo} />
						</Grid>
					);
				})}
			</Grid.Container>
		</Layout>
	);
};

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png

export const getStaticProps: GetStaticProps = async (ctx) => {
	const {
		data: { results },
	} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

	const pokemons = results?.map((poke: {}, i) => ({
		...poke,
		id: i + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			i + 1
		}.png`,
	}));

	return {
		props: {
			pokemons,
		},
	};
};

export default HomePage;
