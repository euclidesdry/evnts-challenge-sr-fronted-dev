import { PokemonFilter, SearchBar } from "./components";
import { Container, Filters, Logo } from "./styles";

export default function Header() {
	return (
		<Container>
			<Logo src="/img/pokedex-logo.png" alt="Pokedex Logo" />
			<Filters>
				<SearchBar />
				<PokemonFilter />
			</Filters>
		</Container>
	);
}
