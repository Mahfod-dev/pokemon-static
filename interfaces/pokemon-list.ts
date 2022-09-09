export interface PokemonListResponse {
	count: number;
	next?: string;
	previous?: string;
	results?: [];
	pokemons: SmallPokemon[];
}

export interface SmallPokemon {
	name: string;
	url: string;
	id: number;
	img: string;
	
}
