import { PokemonCard } from "./components";
import { ListPokemonsType } from "../../types/services/pokemon";

import { Container } from "./styles";

type PokemonListProps = {
	data?: ListPokemonsType["results"];
};

export default function PokemonList({ data }: PokemonListProps) {
	return (
		<Container noCards={!data}>
			{data && data?.map(({ name, url }) => <PokemonCard key={name} url={url} name={name} />)}
			{!data && <p style={{ textAlign: "center", width: "100%" }}>Loading...</p>}
		</Container>
	);
}
