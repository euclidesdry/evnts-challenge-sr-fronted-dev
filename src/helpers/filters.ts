import { ListPokemonByType } from "~/types/services/pokemon";

export const paginatePokemonByType = (items: number, offset: number, list?: ListPokemonByType["pokemon"]) => {
	if (!list) return [];

	const start = (offset / items) * items;
	const end = start + items;

	return list.slice(start, end).map(({ pokemon }) => ({ name: pokemon.name, url: pokemon.url }));
};
