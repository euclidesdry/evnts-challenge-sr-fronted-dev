import { useQuery } from "@tanstack/react-query";
import { listPokemons } from "~/services/pokemon";

export default function usePokemonListService(items: number, offset: number) {
	return useQuery(["pokemon", offset], () => listPokemons(items, offset), {
		keepPreviousData: true,
		staleTime: 1000 * 60 * 60 * 1, // 1000ms * 60 seconds * 60min * 1h
	});
}
