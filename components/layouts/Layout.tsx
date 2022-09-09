import { FC } from 'react';
import Head from 'next/head';
import { NavBar } from '../UI';

interface Props {
	title?: String;
	children: React.ReactNode;
	onChange: (name: string) => string;
}

export const Layout = ({ children, title, onChange }: Props) => {
	return (
		<>
			<Head>
				<title>{title || 'Pokemon App'}</title>
				<meta http-equiv='X-UA-Compatible' content='IE=7' />
				<meta name='author' content='Addi Mahfod' />
				<meta
					name='description'
					content={`
                   Information Pokemon ${title} 
                `}
				/>
				<meta name='keywords' content={`XXXX,pokemon,pokedex,${title}`} />
			</Head>
			<NavBar onChange={onChange} />
			<main>{children}</main>
		</>
	);
};
