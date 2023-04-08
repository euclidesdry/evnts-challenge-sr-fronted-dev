import { BASE_URL } from "~/services";
import { ListPokemonsType, PokemonDetailsType } from "../../../../src/types/services/pokemon";
import { RecursivePartial } from "../../../../src/utils/types";

export const pokemonTypes: ListPokemonsType["results"] = [
	{
		name: "normal",
		url: "https://pokeapi.co/api/v2/type/1/",
	},
	{
		name: "fighting",
		url: "https://pokeapi.co/api/v2/type/1/",
	},
];

export const pokemonDetails: RecursivePartial<PokemonDetailsType> = {
	id: 395,
	name: "empoleon",
	species: { name: "empoleon", url: `${BASE_URL}/pokemon-species/395/` },
	sprites: {
		other: {
			"official-artwork": {
				front_default:
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/395.png",
				front_shiny:
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/395.png",
			},
		},
		front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
	},
	types: [
		{ slot: 1, type: { name: "water", url: `${BASE_URL}/type/11/` } },
		{ slot: 2, type: { name: "steel", url: `${BASE_URL}/type/9/` } },
	],
};
