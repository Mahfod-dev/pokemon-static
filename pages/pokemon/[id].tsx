import { Layout } from '../../components/layouts';
import { NextPage, GetStaticProps } from 'next';
import { Pokemon } from '../../interfaces';
import { localeFavorite, existFavorites } from '../../utils/localFavorites';

interface Props {
	pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
	const [isInFavorites, setIsInFavorites] = useState(
		existFavorites(pokemon.id)
	);

	const onToggleFavorite = () => {
		localeFavorite(pokemon.id);
		setIsInFavorites(!isInFavorites);
	};

	return (
		<Layout title={pokemon.name}>
			<Grid.Container css={{ marginTop: '5px' }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card isHoverable css={{ padding: '30px' }}>
						<Card.Body>
							<Card.Image
								src={
									pokemon.sprites.other?.dream_world.front_default ||
									'/no-image.png'
								}
								alt={pokemon.name}
								width='100%'
								height={200}></Card.Image>
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={12} sm={8}>
					<Card>
						<Card.Header
							css={{
								display: 'flex',
								justifyContent: 'space-between',
							}}>
							<Text h1 transform='capitalize'>
								{pokemon.name}
							</Text>
							<Button
								onPress={onToggleFavorite}
								color='gradient'
								ghost={!isInFavorites}>
								{isInFavorites ? 'Delete Favorite' : 'favorite'}
							</Button>
						</Card.Header>
						<Card.Body>
							<Text size={30}>Sprites:</Text>
							<Container
								direction='row'
								display='flex'
								justify='space-between'
								gap={3}>
								<Image
									src={pokemon.sprites.front_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.front_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	);
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import { GetStaticPaths } from 'next';
import Image from 'next/image';
import pokeApi from '../../api/pokeApi';
import { Grid, Card, Text, Button, Container } from '@nextui-org/react';
import { useState } from 'react';

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);

	return {
		paths: pokemon151.map((id) => ({
			params: { id },
		})),

		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };

	const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

	// const pokemons = results?.map((poke: {}, i) => ({
	// 	...poke,
	// 	id: i + 1,
	// 	img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
	// 		i + 1
	// 	}.png`,
	// }));

	return {
		props: {
			pokemon: data,
		},
	};
};

export default PokemonPage;
