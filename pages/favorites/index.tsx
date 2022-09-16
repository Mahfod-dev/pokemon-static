import { Card, Grid } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { Layout } from '../../components/layouts';
import FavoritePokemons from '../../components/pokemon/FavoritePokemons';
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
				<FavoritePokemons favoritePokemon={favoritePokemon} />
			)}
		</Layout>
	);
};
export default FavoritePage;
