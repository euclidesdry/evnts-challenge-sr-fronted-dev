import { Tags } from "./components";
import { usePokemonDetails } from "~/hooks/pokemon";
import { Id, Container, Name, Sprite } from "./styles";

type PokemonCardProps = {
	url: string;
	name: string;
};

export default function PokemonCard({ name, url }: PokemonCardProps) {
	const { id: pokemonId, name: pokemonName, sprite, types } = usePokemonDetails(name, url);

	return (
		<Container key={pokemonId}>
			{sprite && <Sprite src={sprite} alt="Pokemon icon" />}
			<Id>#{pokemonId}</Id>
			<Name>{pokemonName}</Name>
			<Tags types={types} />
		</Container>
	);
}
