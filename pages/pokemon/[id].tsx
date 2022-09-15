import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Layout } from '../../components/layouts';

const PokemonPage = () => {
	const router = useRouter();
	const {
		query: { id },
	} = router;

	console.log(id);
	return (
		<Layout>
			<h1>Hola mundo</h1>
		</Layout>
	);
};
export default PokemonPage;
