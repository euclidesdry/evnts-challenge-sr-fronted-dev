import { pokemonDetails } from "~/constants/mocks/server/pokemon";
import { BASE_URL } from "~/services";
import { PokemonDetailsType } from "~/types/services/pokemon";
import { RecursivePartial } from "~/utils/types";

export const detailsBuilder = (props: RecursivePartial<PokemonDetailsType> = {}) => ({ ...pokemonDetails, ...props });

export const pokemonDetailsBuilder = (id: number, name: string = "empoleon") => {
	return detailsBuilder({
		id,
		name,
		species: {
			...pokemonDetails.species,
			name,
			url: `${BASE_URL}/pokemon-species/${id}`,
		},
		sprites: {
			other: {
				"official-artwork": {
					front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`,
					front_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`,
				},
			},
		},
	});
};

export const bulbasaurMock = pokemonDetailsBuilder(1, "bulbasaur");
export const pikachuMock = pokemonDetailsBuilder(25, "pikachu");
export const empoleonMock = pokemonDetailsBuilder(395, "empoleon");
