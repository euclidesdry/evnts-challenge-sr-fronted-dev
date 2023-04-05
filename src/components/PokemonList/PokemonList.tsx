import { PokemonCard } from "./components";
import { Container } from "./styles";

export default function PokemonList() {
	return (
		<Container>
			{Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
				<PokemonCard
					key={i}
					id={i}
					name="Pikachu"
					sprite="https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/dream-world/25.svg"
					types={["grass", "electric"]}
				/>
			))}
		</Container>
	);
}
