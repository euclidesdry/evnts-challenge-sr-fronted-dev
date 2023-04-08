export type BaseType = {
	name: string;
	url: string;
};

export type ResultType = BaseType;

export type ListPokemonsType = {
	count: number;
	next: string;
	previous: string | null;
	results: ResultType[];
};

type PokemonAbilityType = BaseType;

type PokemonAbilityProps = {
	ability: PokemonAbilityType;
	is_hidden: boolean;
	slot: number;
};

type Forms = BaseType;

type SpritesProps = {
	back_default: string;
	back_female: string | null;
	back_shiny: string;
	back_shiny_female: string | null;
	front_default: string;
	front_female: string | null;
	front_shiny: string;
	front_shiny_female: string | null;
	other: {
		dream_world: {
			front_default: string;
			front_female: string | null;
		};
		home: {
			front_default: string;
			front_female: string | null;
			front_shiny: string;
			front_shiny_female: string | null;
		};
		"official-artwork": {
			front_default: string;
			front_shiny: string;
		};
	};
	versions: object;
};

type TypesProps = {
	slot: number;
	type: BaseType;
};

export type StatProps = {
	base_stat: number;
	effort: number;
	stat: BaseType;
};

export type PokemonDetailsType = {
	abilities: PokemonAbilityProps[];
	base_experience: number;
	forms: Forms[];
	game_indices: [];
	height: number;
	held_items: [];
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	movies: [];
	name: string;
	order: number;
	past_types: [];
	species: BaseType;
	sprites: SpritesProps;
	stats: StatProps[];
	types: TypesProps[];
	weight: number;
};

export type PokemonType = {
	pokemon: ResultType;
	slot: 2;
};

export type ListPokemonByType = {
	id: number;
	name: string;
	move_damage_class: BaseType;
	moves: BaseType[];
	pokemon: PokemonType[];
};
