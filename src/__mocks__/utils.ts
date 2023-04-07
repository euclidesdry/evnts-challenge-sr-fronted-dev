import { RecursivePartial } from "~/utils/types";
import { PokemonDetailsType } from "~/types/services/pokemon";

export const getPokemonDetails = (details: RecursivePartial<PokemonDetailsType>) => ({
	name: details.name?.replace(/-/g, " "),
	id: details.id,
	image: details.sprites?.other?.["official-artwork"]?.front_default,
	sprite: details.sprites?.front_default,
	types: details.types?.map((type) => type?.type?.name),
});
