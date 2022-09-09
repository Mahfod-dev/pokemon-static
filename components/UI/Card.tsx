import { Card, Text, Row } from '@nextui-org/react';

interface Props {
	image: string;
	name: string;
	id: number;
	theme: {
		isDark?: boolean;
		type?: string;
	};
}

export const PokemonCards: React.FC<Props> = ({ image, name, id, theme }) => {
	const { isDark } = theme;

	return (
		<Card isPressable>
			<Card.Image
				src={image}
				width='100%'
				height={140}
				objectFit='contain'
				alt='Card image background'
			/>
			<Card.Footer>
				<Row justify='space-between'>
					<Text>#{id}</Text>
					<Text transform='capitalize' h4 color={isDark ? 'white' : 'black'}>
						{name}
					</Text>
				</Row>
			</Card.Footer>
		</Card>
	);
};
