import { useState } from 'react';
import { Grid, Container, Row, Text, Input, Image } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme, Link } from '@nextui-org/react';

import { AiOutlineSearch } from 'react-icons/ai';
import NextLink from 'next/link';

export const NavBar = () => {
	const { setTheme } = useNextTheme();
	const { isDark } = useTheme();

	const [pokemon, setPokemon] = useState('');

	return (
		<Container fluid justify='space-around'>
			<Row>
				<Grid.Container alignItems='center'>
					<Grid xs={4}>
						<Row align='center' justify='flex-start'>
							<Link href='/'>
								<>
									<Image
										src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png`}
										alt='pokemon'
										width={70}
										height={70}
									/>

									<Text color='white'>Pokémons</Text>
								</>
							</Link>
						</Row>
					</Grid>
					<Grid xs={4}>
						<Input
							size='xs'
							type='text'
							labelRight={<AiOutlineSearch />}
							status='secondary'
							width='10rem'
							id='search'
							aria-label='search'
							onChange={(e) => setPokemon(e.target.value)}
							value={pokemon}
						/>
					</Grid>
					<Grid xs={2}>
						<NextLink href='/favorites'>
							<Link>
								<Text color='white'>Favorites</Text>
							</Link>
						</NextLink>
					</Grid>
					<Grid xs={2}>
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
