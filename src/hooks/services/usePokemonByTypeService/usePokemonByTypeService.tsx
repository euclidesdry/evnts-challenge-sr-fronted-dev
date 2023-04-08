import { useQuery } from "@tanstack/react-query";
import { listPokemonsTypeById } from "~/services/pokemon";

export default function usePokemonByTypeService(id?: string | number | null) {
	return useQuery(["pokemons-by-types", id], () => listPokemonsTypeById(id ? Number(id) : 0), {
		keepPreviousData: true,
		staleTime: 1000 * 60 * 30, // 1000ms * 60 seconds * 30min = 30min
		enabled: Boolean(id),
	});
}
