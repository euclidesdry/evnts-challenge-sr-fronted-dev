import { useQuery } from "@tanstack/react-query";
import { listPokemonInfoByName } from "~/services/pokemon";

export default function usePokemonByNameService(searchTerm: string) {
	const result = useQuery(["pokemon-by-name", searchTerm], () => listPokemonInfoByName(searchTerm), {
		enabled: !!searchTerm,
		staleTime: 1000 * 60 * 10, // 10 minutes,
	});

	const searchResult = result.data
		? [
				{
					name: result.data.name,
					url: `https://pokeapi.co/api/v2/pokemon/${result.data.id}/`,
				},
		  ]
		: [];

	return {
		...result,
		searchResult,
	};
}
