import { ListPokemonByType, ListPokemonSpecies, ListPokemonsType, PokemonDetailsType } from "../types/services/pokemon";
import { pokeApi } from "./config";

export async function listPokemons(limit = 9, offset = 0): Promise<ListPokemonsType> {
	const response = await pokeApi.get<ListPokemonsType>(`/pokemon?limit=${limit}&offset=${offset}`);
	return response.data;
}

export async function listPokemonInfoById(pokemonId: number): Promise<PokemonDetailsType> {
	const response = await pokeApi.get<PokemonDetailsType>(`/pokemon/${pokemonId}`);
	return response.data;
}

export async function listPokemonInfoByName(name?: string): Promise<PokemonDetailsType> {
	const response = await pokeApi.get<PokemonDetailsType>(`/pokemon/${name}`);
	return response.data;
}

export async function listPokemonsType(): Promise<ListPokemonsType["results"]> {
	const response = await pokeApi.get<ListPokemonsType>(`/type`);
	return response.data.results;
}

export async function listPokemonsTypeById(id: number): Promise<ListPokemonByType["pokemon"]> {
	const response = await pokeApi.get<ListPokemonByType>(`/type/${id}/`);
	return response.data.pokemon;
}

export async function listPokemonSpecies(pokemonId: number): Promise<ListPokemonSpecies> {
	const response = await pokeApi.get<ListPokemonSpecies>(`/pokemon-species/${pokemonId}/`);
	return response.data;
}
