import { BASE_URL } from "~/services";
import { ListPokemonByType, ListPokemonsType } from "~/types/services/pokemon";

export const getIdFromURL = (url: string, size?: number) => Number(url.substring(size ? size : 34, url.length - 1));

export const convertToPokemonURL = (url: string) => {
	const id = getIdFromURL(url, 31);
	return `${BASE_URL}/pokemon/${id}/`;
};

export const convertFromListToPokemonURL = (list: ListPokemonsType["results"]) => {
	return list.map((pokemon) => {
		return {
			...pokemon,
			url: convertToPokemonURL(pokemon.url),
		};
	});
};

export const convertPokemonByTypeToPokemonList = (pokemonByType: ListPokemonByType["pokemon"]) => {
	return pokemonByType.map((pokemon) => {
		return {
			name: pokemon.pokemon.name,
			url: convertToPokemonURL(pokemon.pokemon.url),
		};
	});
};
