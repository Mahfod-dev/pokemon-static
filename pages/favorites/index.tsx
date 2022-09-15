import { Card, Grid } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/UI';
import { pokemons } from '../../utils/localFavorites';

const FavoritePage = () => {
	const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);

	useEffect(() => {
		setFavoritePokemon(pokemons());
	}, []);

	return (
		<Layout title='Pokemons - Favorites'>
			{favoritePokemon.length === 0 ? (
				<NoFavorites />
			) : (
				<Grid.Container gap={4}>
					{favoritePokemon.map((id) => (
						<Grid xs={6} sm={3} md={2} xl={1} key={id}>
							<Card isPressable isHoverable css={{ padding: 10 }}>
								<Card.Image
									src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
									width={'100%'}
									height={140}
								/>
							</Card>
						</Grid>
					))}
				</Grid.Container>
			)}
		</Layout>
	);
};
export default FavoritePage;
