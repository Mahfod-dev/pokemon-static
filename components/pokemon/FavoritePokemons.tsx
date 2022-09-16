import { Card, Grid } from '@nextui-org/react';
import { FC } from 'react';
import FavoriteCardPokemon from './FavoriteCardPokemon';

type Props = {
	favoritePokemon: number[];
};

const FavoritePokemons: FC<Props> = ({ favoritePokemon }) => {
	return (
		<Grid.Container gap={4}>
			{favoritePokemon.map((id) => (
				<FavoriteCardPokemon key={id} pokemonId={id} />
			))}
		</Grid.Container>
	);
};
export default FavoritePokemons;
