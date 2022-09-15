import { Card, Text, Row } from '@nextui-org/react';
import { useRouter } from 'next/router';

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

	const router = useRouter();

	const onClick = () => {
		router.push(`/pokemon/${id}`);
	};

	return (
		<Card isPressable onClick={onClick} isHoverable>
			<Card.Body css={{ height: '100px' }}>
				<Card.Image
					src={image}
					width='100%'
					height={100}
					alt='Card image background'
				/>
			</Card.Body>
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
