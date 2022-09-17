import { useState } from 'react';
import { Grid, Container, Row, Text, Input, Image } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme, Link } from '@nextui-org/react';

import { AiOutlineSearch } from 'react-icons/ai';
import NextLink from 'next/link';

export const NavBar = () => {
	const { setTheme } = useNextTheme();
	const { isDark } = useTheme();
	console.log(isDark);
	const [pokemon, setPokemon] = useState('');

	const color = isDark ? '#fff' : '#222';

	return (
		<Container fluid justify='space-between'>
			<Row>
				<Grid.Container alignItems='center' justify='space-between'>
					<Grid xs={4}>
						<Link href='/'>
							<>
								<Image
									src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png`}
									alt='pokemon'
									width={70}
									height={70}
								/>

								<Text color={color}>Pokémons</Text>
							</>
						</Link>
					</Grid>

					<Grid xs={4}>
						<NextLink href='/favorites'>
							<Link>
								<Text color={color}>Favorites</Text>
							</Link>
						</NextLink>
					</Grid>
					<Grid xs={4} justify='flex-end'>
						<Switch
							size='xs'
							checked={isDark}
							color='secondary'
							onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}>
							Click me
						</Switch>
					</Grid>
				</Grid.Container>
			</Row>
		</Container>
	);
};
