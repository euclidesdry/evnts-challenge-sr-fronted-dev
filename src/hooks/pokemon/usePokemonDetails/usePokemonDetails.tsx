import { useQuery } from "@tanstack/react-query";

import { listPokemonInfoById } from "../../../services/pokemon";
import { getIdFromURL } from "~/helpers/url";

export default function usePokemonDetails(name: string, url: string) {
	const { data: pokemonDetails } = useQuery([`pokemon-details-[${name}]`], () => listPokemonInfoById(pokemonId), {
		enabled: Boolean(name),
		staleTime: 1000 * 60 * 10, // 1000ms * 60s * 10min
	});

	const pokemonName = name.replace(/-/g, " ");
	const pokemonId = getIdFromURL(url);
	const image = pokemonDetails?.sprites.other["official-artwork"].front_default;
	const sprite = pokemonDetails?.sprites.front_default;
	const types = pokemonDetails?.types.map(({ type }) => type.name) || [];

	return {
		name: pokemonName,
		id: pokemonId,
		image,
		sprite,
		types,
	};
}
