import { useState, ChangeEventHandler, FormEventHandler } from 'react';
import { Grid, Container, Row, Text, Input } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';

type Props = {
	onChange: (name:string) => string;
};

export const NavBar = ({ onChange }: Props) => {
	console.log(onChange('hello'));
	const { setTheme } = useNextTheme();
	const { isDark } = useTheme();

	const [pokemon, setPokemon] = useState('');

	return (
		<Container fluid justify='space-around'>
			<Row>
				<Grid.Container alignItems='center'>
					<Grid xs={5}>
						<Row align='center' justify='flex-start'>
							<Image
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png`}
								alt='pokemon'
								width={50}
								height={50}
							/>

							<Text>List Pokemons</Text>
						</Row>
					</Grid>
					<Grid xs={5}>
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
