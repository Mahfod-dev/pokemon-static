import { Grid, Card } from '@nextui-org/react';
import { FC } from 'react';
import { useRouter } from 'next/router';

type Props = {
	pokemonId: number;
};

const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
	const router = useRouter();

	const onFavoriteClicked = () => {
		router.push(`/pokemon/${pokemonId}`);
	};

	return (
		<Grid
			xs={6}
			sm={3}
			md={2}
			xl={1}
			key={pokemonId}
			onClick={onFavoriteClicked}>
			<Card isPressable isHoverable css={{ padding: 10 }}>
				<Card.Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
					width={'100%'}
					height={140}
				/>
			</Card>
		</Grid>
	);
};
export default FavoriteCardPokemon;
