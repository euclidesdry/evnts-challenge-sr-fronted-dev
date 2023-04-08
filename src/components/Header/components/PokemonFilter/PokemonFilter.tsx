import { useQuery } from "@tanstack/react-query";
import { Container, List } from "./styles";
import { listPokemonsType } from "~/services/pokemon";
import { useAppContext } from "~/contexts/App";
import { convertToPokemonURL, getIdFromURL } from "~/helpers/url";

export default function PokemonFilter() {
	const { selectedType, setSearchTerm, setOffset, setSelectedType } = useAppContext();

	const { data: pokemonTypeList } = useQuery(["pokemon-types"], () => listPokemonsType(), {
		staleTime: 1000 * 60 * 30, // 1000ms * 60s * 30min = 30min
	});

	function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
		setSelectedType(e.target.value === "all" ? null : e.target.value);
		setOffset(0);
		setSearchTerm("");
	}

	return (
		<Container>
			<List name="pokemon-type" defaultValue="all" value={selectedType || ""} onChange={handleChange}>
				<option value="all">All Types</option>
				{pokemonTypeList &&
					pokemonTypeList.map(({ name, url }) => (
						<option key={name} value={getIdFromURL(convertToPokemonURL(url))} style={{ textTransform: "capitalize" }}>
							{name}
						</option>
					))}
			</List>
		</Container>
	);
}
