import { Layout } from '../../components/layouts';
import { NextPage, GetStaticProps } from 'next';
import { Pokemon } from '../../interfaces';
import { localeFavorite, existFavorites } from '../../utils/localFavorites';
import confetti from 'canvas-confetti';

interface Props {
	pokemon: Pokemon;
}

const PokemonPageByName: NextPage<Props> = ({ pokemon }) => {
	const [isInFavorites, setIsInFavorites] = useState(
		existFavorites(pokemon.id)
	);

	const onToggleFavorite = () => {
		localeFavorite(pokemon.id);
		setIsInFavorites(!isInFavorites);

		if (isInFavorites) return;

		confetti({
			zIndex: 1,
			particleCount: 100,
			spread: 160,
			angle: -100,
			origin: {
				x: 0,
				y: 0,
			},
		});
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

import Image from 'next/image';
import pokeApi from '../../api/pokeApi';
import { Grid, Card, Text, Button, Container } from '@nextui-org/react';
import { useState } from 'react';
import { PokemonListResponse } from '../../interfaces/pokemon-list';
import { getPokemonInfo } from '../../utils/getPokemonInfo';

export const getStaticPaths = async () => {
	const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=5');

	const pokemonsNames = data.results?.map((name) => name);
	console.log();
	return {
		paths: pokemonsNames?.map(({ name }) => ({
			params: {
				name,
			},
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params as { name: string };

	return {
		props: {
			pokemon: await getPokemonInfo(name),
		},
	};
};

export default PokemonPageByName;
