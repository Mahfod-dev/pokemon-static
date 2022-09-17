import { FC } from 'react';
import Head from 'next/head';
import { NavBar } from '../UI';

interface Props {
	title?: String;
	children: React.ReactNode;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout = ({ children, title }: Props) => {
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
				<meta property='og:title' content={`Information ${title}`} />
				<meta property='og:description' content={`About ${title}`} />
				<meta
					property='og:image'
					content={`${origin}/img/banner.png`}
				/>
			</Head>
			<NavBar />
			<main>{children}</main>
		</>
	);
};
