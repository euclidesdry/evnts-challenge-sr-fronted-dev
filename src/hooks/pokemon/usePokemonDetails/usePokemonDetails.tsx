import { useQuery } from "@tanstack/react-query";

import { listPokemonInfoById } from "../../../services/pokemon";

export default function usePokemonDetails(name: string, url: string) {
	const { data: pokemonDetails } = useQuery(
		[`pokemon-details-[${name}]`],
		() => listPokemonInfoById(pokemonId),
		{
			enabled: Boolean(name),
			staleTime: 1000 * 60 * 10, // 1000ms * 60s * 10min
		}
	);

	const pokemonName = name.replace(/-/g, " ");
	const pokemonId = Number(url.substring(34, url.length - 1));
	const sprite = pokemonDetails?.sprites.other.dream_world.front_default;
	const types = pokemonDetails?.types.map(({ type }) => type.name) || [];

	return {
		name: pokemonName,
		id: pokemonId,
		sprite,
		types,
	};
}
